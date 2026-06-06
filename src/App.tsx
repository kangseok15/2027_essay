/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useMemo, ChangeEvent, ReactNode, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { toPng } from 'html-to-image';
import jsPDF from 'jspdf';
import { 
  GraduationCap, 
  Calendar, 
  CheckCircle2, 
  BookOpen, 
  Info, 
  AlertCircle, 
  ChevronRight, 
  School, 
  ClipboardList, 
  Table as TableIcon,
  Download,
  ArrowRightLeft,
  Printer
} from 'lucide-react';
import { admissionData, type AdmissionInfo } from './data';

const RANK_THEMES = [
  { name: 'indigo', bg: 'bg-indigo-300', text: 'text-indigo-500', border: 'border-indigo-100', light: 'bg-indigo-50', hover: 'hover:bg-indigo-50', accent: 'text-indigo-50', shadow: 'shadow-indigo-100/20', ring: 'focus:ring-indigo-200', btn: 'bg-indigo-300 hover:bg-indigo-400', icon: 'text-indigo-400' },
  { name: 'emerald', bg: 'bg-emerald-300', text: 'text-emerald-500', border: 'border-emerald-100', light: 'bg-emerald-50', hover: 'hover:bg-emerald-50', accent: 'text-emerald-50', shadow: 'shadow-emerald-100/20', ring: 'focus:ring-emerald-200', btn: 'bg-emerald-300 hover:bg-emerald-400', icon: 'text-emerald-400' },
  { name: 'rose', bg: 'bg-rose-300', text: 'text-rose-500', border: 'border-rose-100', light: 'bg-rose-50', hover: 'hover:bg-rose-50', accent: 'text-rose-50', shadow: 'shadow-rose-100/20', ring: 'focus:ring-rose-200', btn: 'bg-rose-300 hover:bg-rose-400', icon: 'text-rose-400' },
  { name: 'amber', bg: 'bg-amber-300', text: 'text-amber-500', border: 'border-amber-100', light: 'bg-amber-50', hover: 'hover:bg-amber-50', accent: 'text-amber-50', shadow: 'shadow-amber-100/20', ring: 'focus:ring-amber-200', btn: 'bg-amber-300 hover:bg-amber-400', icon: 'text-amber-400' },
  { name: 'sky', bg: 'bg-sky-300', text: 'text-sky-500', border: 'border-sky-100', light: 'bg-sky-50', hover: 'hover:bg-sky-50', accent: 'text-sky-50', shadow: 'shadow-sky-100/20', ring: 'focus:ring-sky-200', btn: 'bg-sky-300 hover:bg-sky-400', icon: 'text-sky-400' },
  { name: 'violet', bg: 'bg-violet-300', text: 'text-violet-500', border: 'border-violet-100', light: 'bg-violet-50', hover: 'hover:bg-violet-50', accent: 'text-violet-50', shadow: 'shadow-violet-100/20', ring: 'focus:ring-violet-200', btn: 'bg-violet-300 hover:bg-violet-400', icon: 'text-violet-400' },
];

export default function App() {
  const [ranks, setRanks] = useState<{ university: string | null; category: string | null }[]>(
    Array(6).fill({ university: null, category: null })
  );
  const [selectedRankIndices, setSelectedRankIndices] = useState<number[]>([0]);
  const [isGenerating, setIsGenerating] = useState(false);
  const reportRef = useRef<HTMLDivElement>(null);

  const universities = useMemo(() => {
    const list = admissionData.map(d => d.university);
    return Array.from(new Set(list)).sort();
  }, []);

  const getCategoriesForUni = (uni: string | null) => {
    if (!uni) return [];
    return admissionData
      .filter(d => d.university === uni)
      .map(d => d.category);
  };

  const handleUniversityChange = (index: number, value: string) => {
    const newRanks = [...ranks];
    newRanks[index] = { 
      university: value === "" ? null : value, 
      category: null 
    };
    setRanks(newRanks);
  };

  const handleCategoryChange = (index: number, value: string) => {
    const newRanks = [...ranks];
    newRanks[index] = { 
      ...newRanks[index], 
      category: value === "" ? null : value 
    };
    setRanks(newRanks);
  };

  const toggleRankSelection = (index: number) => {
    setSelectedRankIndices(prev => {
      if (prev.includes(index)) {
        if (prev.length === 1) return prev; 
        return prev.filter(i => i !== index);
      }
      if (prev.length >= 2) {
        return [prev[1], index]; 
      }
      return [...prev, index].sort((a, b) => a - b);
    });
  };

  const selectedInfos = useMemo(() => {
    return selectedRankIndices.map(idx => {
      const rank = ranks[idx];
      if (!rank.university || !rank.category) return null;
      return {
        index: idx,
        theme: RANK_THEMES[idx],
        info: admissionData.find(d => d.university === rank.university && d.category === rank.category)
      };
    }).filter(item => item !== null);
  }, [ranks, selectedRankIndices]);

  const formatText = (text: string | undefined) => {
    if (!text) return "";
    // '(줄바꿈)' 문자열을 줄바꿈 문자('\n')로 명확하게 변환하고 외부 공백을 제거합니다.
    return text.replace(/\(줄바꿈\)/g, '\n').trim();
  };

  const getMinimumStandardFontSize = (text: string | undefined) => {
    if (!text) return "text-base";
    const formatted = text.replace(/\(줄바꿈\)/g, '\n').trim();
    const lines = formatted.split('\n');
    if (lines.length > 1 && formatted.length > 20) {
      return "text-[11px] sm:text-[12px] leading-tight";
    }
    if (lines.length > 3 || formatted.length > 35) {
      return "text-[13px] sm:text-[14px] leading-tight";
    }
    if (lines.length > 1 || formatted.length > 15) {
      return "text-[15px] sm:text-base leading-snug";
    }
    return "text-lg sm:text-xl font-bold";
  };

  const getExamTypeFontSize = (text: string | undefined) => {
    if (!text) return "text-base";
    const formatted = text.replace(/\(줄바꿈\)/g, '\n').trim();
    const lines = formatted.split('\n');
    if (lines.length > 3 || formatted.length > 45) {
      return "text-[13px] sm:text-[14px] leading-tight";
    }
    if (lines.length > 1 || formatted.length > 20) {
      return "text-[15px] sm:text-base leading-snug";
    }
    return "text-lg sm:text-xl font-bold";
  };

  const getExamRangeFontSize = (text: string | undefined) => {
    if (!text) return "text-sm";
    const formatted = text.replace(/\(줄바꿈\)/g, '\n').trim();
    const lines = formatted.split('\n');
    if (lines.length > 3 || formatted.length > 45) {
      return "text-[14px] sm:text-[16px] leading-[1.3] font-semibold";
    }
    if (lines.length > 1 || formatted.length > 20) {
      return "text-[17px] sm:text-[19px] leading-[1.4] font-semibold";
    }
    return "text-xl sm:text-[23px] leading-[1.4] font-bold";
  };

  const getExamDateFontSize = (text: string | undefined) => {
    if (!text) return "text-base";
    const formatted = text.replace(/\(줄바꿈\)/g, '\n').trim();
    const lines = formatted.split('\n');
    if (lines.length > 3 || formatted.length > 45) {
      return "text-[13px] sm:text-[14px] leading-tight";
    }
    if (lines.length > 1 || formatted.length > 20) {
      return "text-[15px] sm:text-base leading-snug";
    }
    return "text-lg sm:text-xl font-bold";
  };

  const downloadPDF = async () => {
    if (!reportRef.current) return;
    setIsGenerating(true);
    
    try {
      // Ensure we're at the top to avoid offset issues
      const originalScrollY = window.scrollY;
      window.scrollTo(0, 0);

      // Use html-to-image instead of html2canvas to support modern CSS (oklch, etc.)
      const dataUrl = await toPng(reportRef.current, {
        quality: 1.0,
        pixelRatio: 2,
        backgroundColor: '#ffffff',
        skipFonts: false,
      });
      
      // Restore scroll
      window.scrollTo(0, originalScrollY);

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = pdf.internal.pageSize.getWidth();
      
      // Calculate height to maintain aspect ratio
      const img = new Image();
      img.src = dataUrl;
      await new Promise((resolve) => (img.onload = resolve));
      
      const pdfHeight = (img.height * pdfWidth) / img.width;
      
      pdf.addImage(dataUrl, 'PNG', 0, 0, pdfWidth, pdfHeight);
      
      // Sanitize filename
      const dateStr = new Date().toISOString().split('T')[0];
      pdf.save(`2027_논술전형_입시리포트_${dateStr}.pdf`);
    } catch (error) {
      console.error('PDF 생성 실패:', error);
      alert('PDF 생성 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.');
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-slate-900 pb-64">
      {/* Header */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-indigo-600 p-2 rounded-lg shadow-indigo-200 shadow-lg">
              <GraduationCap className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">2027학년도 논술전형 한눈에 보기 (상담용)</h1>
              <p className="text-[10px] text-slate-500 font-medium leading-tight mb-1">
                * 정확한 자료는 대학 홈페이지를 활용하시기 바랍니다.
              </p>
          <p className="text-[11px] text-slate-500 font-semibold">제작 : 숭신고등학교 진로전담교사 김강석</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={downloadPDF}
              disabled={isGenerating || !ranks.some(r => r.university && r.category)}
              className="flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 text-white px-4 py-2 rounded-lg text-xs font-bold transition-all shadow-md shadow-indigo-100"
            >
              {isGenerating ? <div className="w-3 h-3 border-2 border-white/30 border-t-white rounded-full animate-spin" /> : <Download className="w-3.5 h-3.5" />}
              리포트 다운로드 (6개 대학)
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 space-y-8">
        {/* Ranking Table Section */}
        <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
          <div className="bg-indigo-50/80 px-6 py-4 border-b border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <TableIcon className="w-4 h-4 text-indigo-600" />
              <h2 className="text-sm font-bold text-slate-800">목표 대학 및 계열 설정</h2>
            </div>
            <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-700 bg-white/60 px-3 py-1.5 rounded-full border border-indigo-100 shadow-sm">
              <ArrowRightLeft className="w-3 h-3 animate-pulse" />
              최대 2개 대학 선택 시 실시간 비교 가능
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-50/50">
                  <th className="border-r border-slate-200 py-4 px-4 text-center font-bold text-slate-400 w-24 bg-slate-50/80">구분</th>
                  {[1, 2, 3, 4, 5, 6].map(num => {
                    const idx = num - 1;
                    const theme = RANK_THEMES[idx];
                    const isSelected = selectedRankIndices.includes(idx);
                    return (
                      <th key={num} className={`border-r border-slate-200 py-4 px-4 text-center transition-all duration-300 ${isSelected ? `${theme.light} shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)]` : 'hover:bg-slate-50/50'}`}>
                        <div className="flex items-center justify-center gap-2">
                          <input 
                            type="checkbox" 
                            id={`rank-${num}`}
                            checked={isSelected}
                            onChange={() => toggleRankSelection(idx)}
                            className={`w-4 h-4 rounded border-slate-300 ${theme.text} focus:ring-offset-0 cursor-pointer transition-transform hover:scale-110`}
                          />
                          <label htmlFor={`rank-${num}`} className={`font-bold cursor-pointer transition-colors ${isSelected ? theme.text : 'text-slate-500'}`}>
                            {num}순위
                          </label>
                        </div>
                      </th>
                    );
                  })}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-slate-200">
                  <td className="border-r border-slate-200 py-4 px-4 text-center font-bold text-slate-600 bg-slate-50/80">대학</td>
                  {ranks.map((rank, idx) => {
                    const theme = RANK_THEMES[idx];
                    const isSelected = selectedRankIndices.includes(idx);
                    return (
                      <td key={`uni-${idx}`} className={`border-r border-slate-200 p-2 transition-all duration-300 ${isSelected ? `${theme.light}/60` : ''}`}>
                        <select
                          value={rank.university || ""}
                          onChange={(e) => handleUniversityChange(idx, e.target.value)}
                          className={`w-full bg-white border rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 focus:ring-2 ${theme.ring.replace('500', '500/20')} cursor-pointer transition-all ${isSelected ? `${theme.border} shadow-sm` : 'border-slate-200'}`}
                        >
                          <option value="">대학 선택</option>
                          {universities.map(u => (
                            <option key={u} value={u}>{u}</option>
                          ))}
                        </select>
                      </td>
                    );
                  })}
                </tr>
                <tr className="border-t border-slate-200">
                  <td className="border-r border-slate-200 py-4 px-4 text-center font-bold text-slate-600 bg-slate-50/80">계열</td>
                  {ranks.map((rank, idx) => {
                    const theme = RANK_THEMES[idx];
                    const isSelected = selectedRankIndices.includes(idx);
                    return (
                      <td key={`cat-${idx}`} className={`border-r border-slate-200 p-2 transition-all duration-300 ${isSelected ? `${theme.light}/60` : ''}`}>
                        <select
                          value={rank.category || ""}
                          onChange={(e) => handleCategoryChange(idx, e.target.value)}
                          disabled={!rank.university}
                          className={`w-full bg-white border rounded-lg px-2 py-2 text-xs font-semibold text-slate-700 focus:ring-2 ${theme.ring.replace('500', '500/20')} cursor-pointer disabled:opacity-30 transition-all ${isSelected ? `${theme.border} shadow-sm` : 'border-slate-200'}`}
                        >
                          <option value="">계열 선택</option>
                          {getCategoriesForUni(rank.university).map(c => (
                            <option key={c} value={c}>{c}</option>
                          ))}
                        </select>
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Detailed Info Section */}
        <AnimatePresence mode="wait">
          {selectedInfos.length > 0 ? (
            <motion.div
              key={selectedRankIndices.join('-')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className={`grid grid-cols-1 ${selectedInfos.length > 1 ? 'lg:grid-cols-2' : ''} gap-8`}
            >
              {selectedInfos.map(({ index, theme, info }) => (
                <div key={index} className="space-y-6">
                  {/* Title Banner */}
                  <div className={`${theme.bg} rounded-2xl px-6 py-5 shadow-xl ${theme.shadow} flex flex-col sm:flex-row sm:items-center justify-between gap-4`}>
                    <div className="flex items-center gap-4">
                      <div className="bg-white/20 p-2.5 rounded-xl backdrop-blur-sm">
                        <CheckCircle2 className="text-white w-6 h-6" />
                      </div>
                      <div>
                        <p className={`${theme.accent} text-[10px] font-bold uppercase tracking-widest mb-0.5`}>{index + 1}순위 목표</p>
                        <h2 className="text-xl font-black text-white tracking-tight">
                          {info?.university} <span className={`${theme.accent} font-bold`}>{info?.category}</span>
                        </h2>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <div 
                        className={`flex-1 sm:flex-none bg-white/20 text-white px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm flex items-center justify-center gap-2 backdrop-blur-sm cursor-default select-none`}
                      >
                        <BookOpen className="w-4 h-4" />
                        가이드북(업데이트 중)
                      </div>
                      <a 
                        href={info?.links.notice} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className={`flex-1 sm:flex-none bg-white ${theme.text} px-4 py-2.5 rounded-xl font-bold text-xs shadow-sm hover:opacity-90 transition-all flex items-center justify-center gap-2`}
                      >
                        <ClipboardList className="w-4 h-4" />
                        모집요강
                      </a>
                    </div>
                  </div>

                  {/* Info Cards Grid - Row 1: Ratios & Min Standard */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <DashboardCard 
                      title="2027 논술 비율" 
                      theme={theme}
                      content={
                        <div className="flex justify-around items-center h-full py-4">
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 mb-1">논술%</p>
                            <p className={`text-2xl font-black ${theme.icon}`}>{info?.ratio2027.essay}</p>
                          </div>
                          <div className="w-px h-8 bg-slate-200" />
                          <div className="text-center">
                            <p className="text-[10px] font-bold text-slate-400 mb-1">교과%</p>
                            <p className="text-2xl font-black text-slate-300">{info?.ratio2027.record}</p>
                          </div>
                        </div>
                      }
                    />
                    <DashboardCard 
                      title="2026 비율" 
                      theme={theme}
                      content={
                        <div className="flex flex-col items-center justify-center h-full py-4">
                          <p className="text-[10px] font-bold text-slate-400 mb-1">논술/교과</p>
                          <p className="text-lg sm:text-xl font-bold text-slate-700">{info?.ratio2026}</p>
                        </div>
                      }
                    />
                    <DashboardCard 
                      title="수능최저" 
                      theme={theme}
                      content={
                        <div className="flex flex-col items-center justify-center h-full px-3 py-4 text-center">
                          <p className={`${getMinimumStandardFontSize(info?.minimumStandard)} font-bold text-slate-700 whitespace-pre-line`}>
                            {formatText(info?.minimumStandard)}
                          </p>
                        </div>
                      }
                    />
                  </div>

                  {/* Info Cards Grid - Row 2: Date & Type */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="sm:col-span-1">
                      <DashboardCard 
                        title="논술 시험 일시" 
                        theme={theme}
                        className="min-h-[140px]"
                        content={
                          <div className="flex flex-col items-center justify-center p-4 text-center h-full">
                            <p className={`${getExamDateFontSize(info?.examDate)} font-bold ${theme.icon} whitespace-pre-line`}>{formatText(info?.examDate)}</p>
                          </div>
                        }
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <DashboardCard 
                        title="논술유형" 
                        theme={theme}
                        className="min-h-[140px]"
                        content={
                          <div className="flex flex-col items-center justify-center h-full px-4 py-4 text-center">
                            <p className={`${getExamTypeFontSize(info?.examType)} font-bold text-slate-800 whitespace-pre-line`}>
                              {formatText(info?.examType)}
                            </p>
                          </div>
                        }
                      />
                    </div>
                  </div>

                  {/* Detail Cards - Range */}
                  <div className="grid grid-cols-1 gap-4">
                    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden min-h-[140px] flex flex-col">
                      <div className="px-5 py-3 border-b border-slate-200 flex items-center justify-between">
                        <h3 className={`text-[11px] font-bold ${theme.text} uppercase tracking-wider`}>논술 출제범위</h3>
                      </div>
                      <div className="p-5 flex-1 flex items-center justify-center">
                        <p className={`${getExamRangeFontSize(info?.examRange)} font-semibold text-slate-600 text-center whitespace-pre-line`}>
                          {formatText(info?.examRange)}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Scores Table */}
                  <section className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
                    <div className={`${theme.light}/40 px-5 py-3 border-b border-slate-200 flex items-center justify-between`}>
                      <div className="flex items-center gap-2">
                        <TableIcon className={`w-3.5 h-3.5 ${theme.icon}`} />
                        <h2 className="text-[11px] font-bold text-slate-700 uppercase tracking-wider">석차등급별 환산점수</h2>
                      </div>
                    </div>
                    <div className="overflow-x-auto">
                      <table className="w-full text-[10px] border-collapse">
                        <thead>
                          <tr className="bg-slate-50/30">
                            <th className="border-r border-slate-200 py-2.5 px-2 text-center font-bold text-slate-400 w-16">등급</th>
                            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
                              <th key={num} className="border-r border-slate-200 py-2.5 px-1 text-center font-bold text-slate-600">
                                {num}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-t border-slate-200">
                            <td className="border-r border-slate-200 py-3 px-2 text-center font-bold text-slate-500 bg-slate-50/30">점수</td>
                            {info?.scores.map((score, idx) => (
                              <td key={idx} className={`border-r border-slate-200 py-3 px-1 text-center font-bold ${theme.icon}`}>
                                {score}
                              </td>
                            ))}
                          </tr>
                          <tr className="border-t border-slate-200">
                            <td className="border-r border-slate-200 py-3 px-2 text-center font-bold text-slate-500 bg-slate-50/30">차이</td>
                            {info?.scores.map((score, idx) => {
                              if (idx === 0) return <td key={idx} className="border-r border-slate-200 py-3 px-1 text-center text-slate-300">-</td>;
                              const prev = info?.scores[idx - 1];
                              const diff = typeof score === 'number' && typeof prev === 'number' ? (prev - score).toFixed(2) : "0";
                              return (
                                <td key={idx} className="border-r border-slate-200 py-3 px-1 text-center font-bold text-red-500">
                                  {diff === "0.00" || diff === "0" ? "0" : diff}
                                </td>
                              );
                            })}
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </section>
                </div>
              ))}
            </motion.div>
          ) : (
            <div className="bg-white rounded-3xl border-2 border-dashed border-slate-200 p-24 text-center">
              <div className="bg-indigo-50 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8">
                <School className="text-indigo-200 w-12 h-12" />
              </div>
              <h3 className="text-2xl font-black text-slate-400 mb-3">목표 대학을 선택해주세요</h3>
              <p className="text-slate-400 max-w-sm mx-auto text-sm font-medium leading-relaxed">
                상단 설정 테이블에서 대학과 계열을 선택하세요.<br />
                최대 2개를 선택하여 실시간으로 비교 분석할 수 있습니다.
              </p>
            </div>
          )}
        </AnimatePresence>
      </main>

      {/* Hidden Report for Download */}
      <div className="absolute top-0 left-0 -z-50 opacity-0 pointer-events-none" style={{ width: '210mm', minHeight: '297mm' }}>
        <div ref={reportRef} className="w-[210mm] bg-white p-10 space-y-8">
          <div className="flex items-center justify-between border-b-4 border-indigo-600 pb-6">
            <div>
              <h1 className="text-3xl font-black text-slate-900">2027학년도 논술전형 한눈에 보기 (상담용)</h1>
              <p className="text-sm text-slate-600 font-bold mt-2">
                * 정확한 자료는 대학 홈페이지를 활용하시기 바랍니다.
              </p>
            </div>
            <div className="text-right">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Report Date</p>
              <p className="text-lg font-black text-indigo-600">{new Date().toLocaleDateString()}</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {ranks.map((rank, idx) => {
              const info = admissionData.find(d => d.university === rank.university && d.category === rank.category);
              const theme = RANK_THEMES[idx];
              return (
                <div key={idx} className={`border ${theme.border} rounded-xl p-5 space-y-4 ${theme.light}/30`}>
                  <div className={`flex items-center justify-between border-b ${theme.border} pb-3`}>
                    <h3 className={`text-lg font-black ${theme.text}`}>{idx + 1}순위: {rank.university || '미선택'}</h3>
                    <span className={`text-xs font-bold ${theme.bg} text-white px-2 py-0.5 rounded`}>{rank.category}</span>
                  </div>
                  {info ? (
                    <div className="grid grid-cols-2 gap-3 text-[10px]">
                      <div className="bg-white p-2 rounded border border-slate-100">
                        <p className="text-slate-400 font-bold mb-0.5">반영비율</p>
                        <p className="font-black text-slate-700">{info.ratio2027.essay}% / {info.ratio2027.record}%</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-100 whitespace-pre-line">
                        <p className="text-slate-400 font-bold mb-0.5">시험일시</p>
                        <p className={`font-black ${theme.text}`}>{formatText(info.examDate)}</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-100 col-span-2">
                        <p className="text-slate-400 font-bold mb-0.5">수능최저</p>
                        <p className="font-bold text-slate-700 leading-tight whitespace-pre-line">{formatText(info.minimumStandard)}</p>
                      </div>
                      <div className="bg-white p-2 rounded border border-slate-100 col-span-2">
                        <p className="text-slate-400 font-bold mb-0.5">논술유형</p>
                        <p className="font-bold text-slate-700 leading-tight whitespace-pre-line">{formatText(info.examType)}</p>
                      </div>
                    </div>
                  ) : (
                    <p className="text-xs text-slate-300 italic py-10 text-center">정보가 선택되지 않았습니다.</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="pt-10 border-t border-slate-200 text-center">
            <p className="text-[10px] text-slate-400 font-bold">본 리포트는 참고용이며, 정확한 내용은 반드시 해당 대학의 최종 모집요강을 확인하시기 바랍니다.</p>
          </div>
        </div>
      </div>

      <footer className="max-w-7xl mx-auto px-4 py-12 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-start gap-4 text-slate-500 text-xs font-medium">
          <div className="bg-slate-100 p-2 rounded-full mt-0.5">
            <Info className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex flex-col gap-1.5">
            <span className="font-bold text-slate-800 text-sm">2027 합격을 위한 논술전형 가이드</span>
            <span className="text-slate-600 font-semibold">제작 : 숭신고등학교 진로전담교사 김강석</span>
            <span className="text-slate-400 text-[11px] leading-relaxed">이 프로그램은 교사, 학생, 학부모님 누구나 자유롭게 활용하실 수 있습니다.</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function DashboardCard({ title, content, theme, className = "" }: { title: string, content: ReactNode, theme: any, className?: string }) {
  return (
    <div className={`h-full bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col transition-all hover:shadow-md hover:${theme.border} ${className}`}>
      <div className={`bg-slate-50/50 px-4 py-2.5 border-b border-slate-200`}>
        <h3 className="text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">{title}</h3>
      </div>
      <div className="flex-1">
        {content}
      </div>
    </div>
  );
}
