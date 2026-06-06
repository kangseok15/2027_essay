export interface AdmissionInfo {
  university: string;
  category: string;
  ratio2027: { essay: number; record: number };
  ratio2026: string;
  examDate: string;
  minimumStandard: string;
  examType: string;
  examRange: string;
  scores: (number | string)[]; // 1등급 to 9등급
  recruitment: string;
  links: {
    guide: string;
    notice: string;
  };
}

export const admissionData: AdmissionInfo[] = [
  {
    university: "가천대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 30일",
    minimumStandard: "1개 3이내(탐1)",
    examType: "약술형: 국어 8문항 + 수학 5문항",
    examRange: "1학년 국어, 문학, 독서, 화법, 작문, 문법 영역 / 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "1012",
    links: {
      guide: "https://admission.gachon.ac.kr/admission/html/rolling/guide.asp",
      notice: "https://admission.gachon.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "가천대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 29일(의,한,약) (줄바꿈) 11월 30일(간,바,화) (줄바꿈) 12월 01일(자연)",
    minimumStandard: "1개 3이내(탐1) (줄바꿈) 바2합1(탐1)/약3합5(과2) (줄바꿈) 의예:3각1(과2)/한2각1(과2)",
    examType: "약술형: 국어 5문항 + 수학 8문항 (줄바꿈) 의예과, 한의예과, 약학과 : 수학 8문항",
    examRange: "1학년 국어, 문학, 독서, 화법, 작문, 문법 영역 / 수학Ⅰ, 수학Ⅱ (줄바꿈) 의예과, 한의예과, 약학과(미적분 포함)",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "1012",
    links: {
      guide: "https://admission.gachon.ac.kr/admission/html/rolling/guide.asp",
      notice: "https://admission.gachon.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "가톨릭대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "80/20",
    examDate: "10월 11일 (줄바꿈) 14:30~",
    minimumStandard: "X",
    examType: "언어논술 (줄바꿈) 지문. 자료 제시형",
    examRange: "국어과, 사회과, 도덕과 공통과목 및 (줄바꿈) 일반선택 과목 반영",
    scores: [100, 99.5, 99, 98.5, 98, 97.5, 97, 90, 70],
    recruitment: "178",
    links: {
      guide: "https://ipsi.catholic.ac.kr/detail.do?menuurl=n5%2FP1yX8Zyh%2Fvtvla1KeyA%3D%3D&board_seq=37578&pageNo=1&categoryid=1&userpwd=",
      notice: "https://ipsi.catholic.ac.kr/detail.do?menuurl=n5%2FP1yX8Zyh%2Fvtvla1KeyA%3D%3D&board_seq=37578&pageNo=1&categoryid=1&userpwd="
    }
  },
  {
    university: "가톨릭대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "80/20",
    examDate: "10월 11일(자연,간호) (줄바꿈) 11월 22일(약학,의예)",
    minimumStandard: "X (줄바꿈) 3합: 의예 4(과2평), (줄바꿈) 약학 5(과1),간호 7(탐 1)",
    examType: "수리논술",
    examRange: "자연, 간호 : 수학, 수학Ⅰ, 수학Ⅱ, 미적분 반영 (줄바꿈) 의,약 : 수학, 수학Ⅰ, 수학Ⅱ, 미적분, 확률과 통계",
    scores: [100, 99.5, 99, 98.5, 98, 97.5, 97, 90, 70],
    recruitment: "178",
    links: {
      guide: "https://ipsi.catholic.ac.kr/detail.do?menuurl=n5%2FP1yX8Zyh%2Fvtvla1KeyA%3D%3D&board_seq=37578&pageNo=1&categoryid=1&userpwd=",
      notice: "https://ipsi.catholic.ac.kr/detail.do?menuurl=n5%2FP1yX8Zyh%2Fvtvla1KeyA%3D%3D&board_seq=37578&pageNo=1&categoryid=1&userpwd="
    }
  },
  {
    university: "강남대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 28일 (줄바꿈) (10시~)",
    minimumStandard: "X",
    examType: "약술형: 국어 8문항 + 수학 2문항, (줄바꿈) 자유전공 : 국어 5문항 + 수학 5문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 98, 97, 96, 95, 94, 91, 87.5],
    recruitment: "230",
    links: {
      guide: "https://admission.kangnam.ac.kr/jeonhyung/yogang.htm?ctg_cd=susi1",
      notice: "https://admission.kangnam.ac.kr/jeonhyung/yogang.htm?ctg_cd=susi1"
    }
  },
  {
    university: "강남대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 28일 (줄바꿈) (14시~)",
    minimumStandard: "X",
    examType: "약술형: 국어 3문항 + 수학 7문항, (줄바꿈) 자유전공 : 국어 5문항 + 수학 5문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 98, 97, 96, 95, 94, 91, 87.5],
    recruitment: "230",
    links: {
      guide: "https://admission.kangnam.ac.kr/jeonhyung/yogang.htm?ctg_cd=susi1",
      notice: "https://admission.kangnam.ac.kr/jeonhyung/yogang.htm?ctg_cd=susi1"
    }
  },
  {
    university: "건국대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일 (줄바꿈) (09시~)",
    minimumStandard: "2합 5(탐1)",
    examType: "인문 - 인문사회교과 내용 바탕 (줄바꿈) 통합 - 국어, 사회 1문항 + 수학 3문항",
    examRange: "인문 : 국어 사회 교과 분야의 다양한 지문 (줄바꿈) 통합 : 국어, 통합사회 + 수학, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "434",
    links: {
      guide: "https://enter.konkuk.ac.kr/submenu.do?menuurl=rOjsbGuR5i0fqsax24xcPQ%3d%3d&",
      notice: "https://enter.konkuk.ac.kr/submenu.do?menuurl=rOjsbGuR5i0fqsax24xcPQ%3d%3d&"
    }
  },
  {
    university: "건국대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일 (줄바꿈) (14시~)",
    minimumStandard: "2합 5(탐1) (줄바꿈) 수의 3합 4(탐1)",
    examType: "자연 - 수리논술 (줄바꿈) 통합 - 국어, 사회 1문항 + 수학 3문항",
    examRange: "자연 : 수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분, 기하 (줄바꿈) 통합 : 국어, 통합사회 + 수학, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "434",
    links: {
      guide: "https://enter.konkuk.ac.kr/submenu.do?menuurl=rOjsbGuR5i0fqsax24xcPQ%3d%3d&",
      notice: "https://enter.konkuk.ac.kr/submenu.do?menuurl=rOjsbGuR5i0fqsax24xcPQ%3d%3d&"
    }
  },
  {
    university: "경기대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 27일",
    minimumStandard: "X",
    examType: "언어, 사회 논술 (제시문 논술) 각 1문항씩",
    examRange: "국어, 사회, 한국사 일반과목",
    scores: [100, 99, 97, 95, 90, 85, 60, 20, 0],
    recruitment: "-",
    links: {
      guide: "https://enter.kyonggi.ac.kr/cms/FR_CON/index.do?MENU_ID=120",
      notice: "https://enter.kyonggi.ac.kr/cms/FR_CON/index.do?MENU_ID=120"
    }
  },
  {
    university: "경기대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 27일",
    minimumStandard: "X",
    examType: "수리논술 2문항",
    examRange: "수학, 수학I, 수학II",
    scores: [100, 99, 97, 95, 90, 85, 60, 20, 0],
    recruitment: "-",
    links: {
      guide: "https://enter.kyonggi.ac.kr/cms/FR_CON/index.do?MENU_ID=120",
      notice: "https://enter.kyonggi.ac.kr/cms/FR_CON/index.do?MENU_ID=120"
    }
  },
  {
    university: "경북대",
    category: "인문",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) (09시~)",
    minimumStandard: "2합 5~6 (줄바꿈) (탐1)",
    examType: "교과 통합형 (6문항 내외)",
    examRange: "국어, 인문학, 사회과학 등",
    scores: [150, 145, 140, 135, 130, 120, 100, 50, 0],
    recruitment: "150",
    links: {
      guide: "https://ipsi1.knu.ac.kr/mojib/?m_type=SUSI",
      notice: "https://ipsi1.knu.ac.kr/mojib/?m_type=SUSI"
    }
  },
  {
    university: "경북대",
    category: "자연",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) 자연Ⅰ(15시)  (줄바꿈) 자연Ⅱ(16시)",
    minimumStandard: "2합 5~6(탐1) (줄바꿈) 의, 치 3합 4(탐2)/ (줄바꿈) 수, 약 3합 5(탐2)",
    examType: "수학+자연과학(자연계열Ⅰ) 3문항 내외 (줄바꿈) 수학+의학논술(자연계열Ⅱ) 3문항 내외",
    examRange: "수학: 수,수Ⅰ,Ⅱ,미적/자연:통과,물화생지1 등 (줄바꿈) 의학논술: 통과, 생1, 생2 등",
    scores: [150, 145, 140, 135, 130, 120, 100, 50, 0],
    recruitment: "350",
    links: {
      guide: "https://ipsi1.knu.ac.kr/mojib/?m_type=SUSI",
      notice: "https://ipsi1.knu.ac.kr/mojib/?m_type=SUSI"
    }
  },
  {
    university: "경희대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일(인문) (줄바꿈) 11월 22일(사회)",
    minimumStandard: "2합 5(탐2), 한5 (줄바꿈) 체육: 1개 3이내 (탐2)",
    examType: "인문,체육 : 통합교과형 논술 2문항 (줄바꿈) 사회 : 통합교과형(도표, 통계 포함) 2문항",
    examRange: "학교 교육과정 전과정",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "223",
    links: {
      guide: "https://iphak.khu.ac.kr/submenu.do?menuurl=iRpJZN81uYxYKEjgpdzo4Q%3d%3d&",
      notice: "https://iphak.khu.ac.kr/submenu.do?menuurl=iRpJZN81uYxYKEjgpdzo4Q%3d%3d&"
    }
  },
  {
    university: "경희대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일(메디컬) (줄바꿈) 11월 22일(자연)",
    minimumStandard: "2합 5(탐2), 한5 (줄바꿈) 의치한약 3합4(탐2),한5",
    examType: "자연 : 수리논술 6문항 (줄바꿈) 의약학:수학 4문항+과학선택 4문항",
    examRange: "자연 : 수학,수학Ⅰ,수학Ⅱ,확통,미적,기하 (줄바꿈) 의약학: 수필+과(물리, 화학, 생명Ⅰ·Ⅱ)중 1과목 선택",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "254",
    links: {
      guide: "https://iphak.khu.ac.kr/submenu.do?menuurl=iRpJZN81uYxYKEjgpdzo4Q%3d%3d&",
      notice: "https://iphak.khu.ac.kr/submenu.do?menuurl=iRpJZN81uYxYKEjgpdzo4Q%3d%3d&"
    }
  },
  {
    university: "고려대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 22일",
    minimumStandard: "4합 8(탐1), 한4",
    examType: "인문 사회 통합형 논술",
    examRange: "공통과목 + 독서, 문학, 화법과 작문,  (줄바꿈) 언어와 매체 및 사회계열(역사, 도덕 포함)",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "361",
    links: {
      guide: "https://oku.korea.ac.kr/oku/cms/FR_CON/index.do?MENU_ID=680",
      notice: "https://oku.korea.ac.kr/oku/cms/FR_CON/index.do?MENU_ID=680"
    }
  },
  {
    university: "고려대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일",
    minimumStandard: "4합 8(탐1), 한4",
    examType: "수학 논술",
    examRange: "공통과목 + (줄바꿈) 수학I, 수학II, 미적분, 확률과 통계, 기하",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "361",
    links: {
      guide: "https://oku.korea.ac.kr/oku/cms/FR_CON/index.do?MENU_ID=680",
      notice: "https://oku.korea.ac.kr/oku/cms/FR_CON/index.do?MENU_ID=680"
    }
  },
  {
    university: "고려대(세종)",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일 (줄바꿈) (인문, 체육)",
    minimumStandard: "2합 6(탐1)",
    examType: "교과 통합형 논술(2문제 이내)",
    examRange: "인문, 체능 : 국어, 사회, 도덕 등(독해력과 문제해결력)",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "370",
    links: {
      guide: "https://oku.korea.ac.kr/sejong/cms/FR_CON/index.do?MENU_ID=420",
      notice: "https://oku.korea.ac.kr/sejong/cms/FR_CON/index.do?MENU_ID=420"
    }
  },
  {
    university: "고려대(세종)",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일 (줄바꿈) (자연, 약학)",
    minimumStandard: "2합6 (탐1) (줄바꿈) 약 3합 5(미/기,과2)",
    examType: "수리논술Ⅰ - 수학 6문항 내외 (줄바꿈) 수리논술Ⅱ(약학) -수학 3문항 내외",
    examRange: "자연 : 수리논술Ⅰ - 수, 수I, 수II, 미적분 (줄바꿈) 약학 : 수리논술Ⅱ - 수, 수I, 수II, 확률과 통계, 미적분",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "370",
    links: {
      guide: "https://oku.korea.ac.kr/sejong/cms/FR_CON/index.do?MENU_ID=420",
      notice: "https://oku.korea.ac.kr/sejong/cms/FR_CON/index.do?MENU_ID=420"
    }
  },
  {
    university: "광운대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 29일",
    minimumStandard: "X",
    examType: "교과통합형 논술(2문제)",
    examRange: "국어, 독서, 문학, 화작, 언매/ (줄바꿈) 통사 ,경제, 정법, 사문, 생윤, 윤사",
    scores: [100, 98, 96, 94, 92, 88, 80, 70, 0],
    recruitment: "184",
    links: {
      guide: "https://iphak.kw.ac.kr/mojib/mojib.php?m_type=SUSI",
      notice: "https://iphak.kw.ac.kr/mojib/mojib.php?m_type=SUSI"
    }
  },
  {
    university: "광운대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 28일",
    minimumStandard: "X",
    examType: "수리논술(2문제) - 각 문제당 5문항 내외 소문제",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분, 확률과통계",
    scores: [100, 98, 96, 94, 92, 88, 80, 70, 0],
    recruitment: "184",
    links: {
      guide: "https://iphak.kw.ac.kr/mojib/mojib.php?m_type=SUSI",
      notice: "https://iphak.kw.ac.kr/mojib/mojib.php?m_type=SUSI"
    }
  },
  {
    university: "국민대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "12월 05일",
    minimumStandard: "2합 6(탐1)",
    examType: "국어 8문항(단답형, 단문형)+수학 2문항(단답형)",
    examRange: "국어: 국어, 문학, 독서 (줄바꿈) 수학: 수학, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.kookmin.ac.kr/nonschedule/application.php",
      notice: "https://admission.kookmin.ac.kr/nonschedule/application.php"
    }
  },
  {
    university: "국민대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "12월 06일",
    minimumStandard: "2합 6(과1)",
    examType: "국어 2문항(단답형, 단문형)+수학 8문항(단답형)",
    examRange: "국어: 국어, 문학, 독서 (줄바꿈) 수학: 수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.kookmin.ac.kr/nonschedule/application.php",
      notice: "https://admission.kookmin.ac.kr/nonschedule/application.php"
    }
  },
  {
    university: "단국대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "80/20",
    examDate: "10월 18일",
    minimumStandard: "X",
    examType: "인문, 사회 통합 교과형 2문제(문제별 소논제)",
    examRange: "국어, 화작, 독서, 언매, 문학, 생윤, 윤사, 통사, 한, 한지, 세지, 동아, 세계사, 경제, 정법, 사문",
    scores: [100, 99, 98, 97, 96, 95, 70, 40, 0],
    recruitment: "310",
    links: {
      guide: "https://ipsi.dankook.ac.kr/jukjeon/doumi/mojip.html?bbsid=juk_paper&ctg_cd=01",
      notice: "https://ipsi.dankook.ac.kr/jukjeon/doumi/mojip.html?bbsid=juk_paper&ctg_cd=01"
    }
  },
  {
    university: "단국대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "80/20",
    examDate: "10월 17일",
    minimumStandard: "X",
    examType: "수학 통합교과형 2문제(문제별 소논제)",
    examRange: "수학,수학Ⅰ,수학Ⅱ,미적분",
    scores: [100, 99, 98, 97, 96, 95, 70, 40, 0],
    recruitment: "310",
    links: {
      guide: "https://ipsi.dankook.ac.kr/jukjeon/doumi/mojip.html?bbsid=juk_paper&ctg_cd=01",
      notice: "https://ipsi.dankook.ac.kr/jukjeon/doumi/mojip.html?bbsid=juk_paper&ctg_cd=01"
    }
  },
  {
    university: "덕성여대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 29일",
    minimumStandard: "2합  7(탐1)",
    examType: "언어논술(인문) : 2문항(소문항 최대 3문항)",
    examRange: "교과서에서 나온 주제문이나 주제를 활용하여 출제",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "100",
    links: {
      guide: "https://enter.duksung.ac.kr/mojib/?m_type=SUSI",
      notice: "https://enter.duksung.ac.kr/mojib/?m_type=SUSI"
    }
  },
  {
    university: "덕성여대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 29일",
    minimumStandard: "2합  7(탐1) (줄바꿈) 약: 3합 수포 5(과1)",
    examType: "자연1 - 수리논술 2문항(소문항 최대 3문항) (줄바꿈) 자연2(약학) - 수리논술 3문항(소문항 최대 3문항)",
    examRange: "자연1: 수학,수학Ⅰ,수학Ⅱ (줄바꿈) 자연2(약학): 수학,수학Ⅰ,수학Ⅱ,미적분",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "100",
    links: {
      guide: "https://enter.duksung.ac.kr/mojib/?m_type=SUSI",
      notice: "https://enter.duksung.ac.kr/mojib/?m_type=SUSI"
    }
  },
  {
    university: "동국대",
    category: "인문",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 22일 (줄바꿈) 인문1(13:00~) (줄바꿈) 인문2(16:30~)",
    minimumStandard: "2합 5(탐1) (줄바꿈) 경찰 2합 4(탐1)",
    examType: "제시문 기반 사고력과 표현능력 등을  (줄바꿈) 평가하는 통합 교과형 논술 3문항",
    examRange: "국어교과, 사회(역사/도덕포함)교과, 한국사 (줄바꿈) 공통과목 및 일반선택 과목",
    scores: [10, 9.97, 9.93, 9.9, 9.8, 8.7, 7, 6, 5],
    recruitment: "150",
    links: {
      guide: "https://ipsi.dongguk.edu/admission/html/rolling/book.asp",
      notice: "https://ipsi.dongguk.edu/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "동국대",
    category: "자연",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 22일 (줄바꿈) (자연 09:30~)",
    minimumStandard: "2합 5(탐1) (줄바꿈) 약 3합4(과1)(수과택1)",
    examType: "수학적에 대한 이해도 및 적용 능력 등을 평가하는 풀이과정 중심의 수리논술 3문항",
    examRange: "수학교과 : 공통과목, 일반선택, 기하",
    scores: [10, 9.97, 9.93, 9.9, 9.8, 8.7, 7, 6, 5],
    recruitment: "160",
    links: {
      guide: "https://ipsi.dongguk.edu/admission/html/rolling/book.asp",
      notice: "https://ipsi.dongguk.edu/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "동덕여대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일",
    minimumStandard: "2합 6(탐1)",
    examType: "국어 6문항 + 수학 2문항",
    examRange: "국어, 문학, 독서, 화법과 작문, 언어와 매체 (줄바꿈) 수학, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "179",
    links: {
      guide: "https://ipsi.dongduk.ac.kr/ipsi/contents/nontime-viewer.do?gotoMenuNo=nontime-viewer",
      notice: "https://ipsi.dongduk.ac.kr/ipsi/contents/nontime-viewer.do?gotoMenuNo=nontime-viewer"
    }
  },
  {
    university: "동덕여대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일",
    minimumStandard: "2합 6(탐1)",
    examType: "국어 2문항 + 수학 6문항",
    examRange: "국어, 문학, 독서, 화법과 작문, 언어와 매체 (줄바꿈) 수학, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "179",
    links: {
      guide: "https://ipsi.dongduk.ac.kr/ipsi/contents/nontime-viewer.do?gotoMenuNo=nontime-viewer",
      notice: "https://ipsi.dongduk.ac.kr/ipsi/contents/nontime-viewer.do?gotoMenuNo=nontime-viewer"
    }
  },
  {
    university: "부산대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) 15:30 ~",
    minimumStandard: "2합 5(탐1) (줄바꿈) 경영:3합 7(탐1)",
    examType: "인문 사회 교과 통합형",
    examRange: "국어, 사회, 도덕, 한국사 교육과정",
    scores: [100, 99, 98, 97, 96, 95, 90, 60, 0],
    recruitment: "100",
    links: {
      guide: "https://go.pusan.ac.kr/college_2016/pages/index.asp?p=186&b=B_1_7",
      notice: "https://go.pusan.ac.kr/college_2016/pages/index.asp?p=3&mj=01"
    }
  },
  {
    university: "부산대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) 09:30 ~",
    minimumStandard: "2합 5 (줄바꿈) 의약 : 3합 수포 4",
    examType: "수리논술",
    examRange: "자연: 수학, 수학Ⅰ, 수학Ⅱ, 미적분 (줄바꿈) 의약한: 수학, 수학Ⅰ, 수학Ⅱ, 미적분, 기하",
    scores: [100, 99, 98, 97, 96, 95, 90, 60, 0],
    recruitment: "340",
    links: {
      guide: "https://go.pusan.ac.kr/college_2016/pages/index.asp?p=186&b=B_1_7",
      notice: "https://go.pusan.ac.kr/college_2016/pages/index.asp?p=3&mj=01"
    }
  },
  {
    university: "삼육대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 23일, 24일",
    minimumStandard: "1합 3이내(탐1)",
    examType: "국어 8문항 + 수학 5문항",
    examRange: "국어 : 화법, 작문, 문학, 독서, 문법 (줄바꿈) 수학 : 수학I, 수학II",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "124",
    links: {
      guide: "https://ipsi.syu.ac.kr/2016_syu/pages/index.asp?p=8&mj=01",
      notice: "https://ipsi.syu.ac.kr/2016_syu/pages/index.asp?p=8&mj=01"
    }
  },
  {
    university: "삼육대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 23일, 24일",
    minimumStandard: "1합 3이내(탐1) (줄바꿈) 약 3합 5(과1), 수(미/기)",
    examType: "자연 : 국어 5문항 + 수학 8문항 (줄바꿈) 약학과 : 수학 8문항",
    examRange: "국어 : 화법, 작문, 문학, 독서, 문법 (줄바꿈) 수학 : 수학I, 수학II (약학 미적분 포함)",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "124",
    links: {
      guide: "https://ipsi.syu.ac.kr/2016_syu/pages/index.asp?p=8&mj=01",
      notice: "https://ipsi.syu.ac.kr/2016_syu/pages/index.asp?p=8&mj=01"
    }
  },
  {
    university: "상명대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "10월 30일",
    minimumStandard: "X",
    examType: "약술형 : 국어 8문항 + 수학 2문항",
    examRange: "국어, 문학, 독서, 화법과 작문, 언어와 매체 (줄바꿈) 수학I, 수학II",
    scores: [100, 98, 96, 94, 90, 80, 60, 40, 0],
    recruitment: "85",
    links: {
      guide: "https://admission.smu.ac.kr/_seoul/board/bbs.html?bbsid=seoul_dataroom&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=61691",
      notice: "https://admission.smu.ac.kr/_seoul/iphak/mojip.html?bbsid=seoul_mojib&ctg_cd=susi"
    }
  },
  {
    university: "상명대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "10월 31일",
    minimumStandard: "X",
    examType: "약술형 : 국어 2문항 + 수학 8문항",
    examRange: "국어, 문학, 독서, 화법과 작문, 언어와 매체 (줄바꿈) 수학I, 수학II",
    scores: [100, 98, 96, 94, 90, 80, 60, 40, 0],
    recruitment: "85",
    links: {
      guide: "https://admission.smu.ac.kr/_seoul/board/bbs.html?bbsid=seoul_dataroom&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=61691",
      notice: "https://admission.smu.ac.kr/_seoul/iphak/mojip.html?bbsid=seoul_mojib&ctg_cd=susi"
    }
  },
  {
    university: "서강대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 22일 (줄바꿈) (15:30~)",
    minimumStandard: "3합 7(탐1), 한4",
    examType: "인문/사회과학 관련 제시문과 논제 2문항",
    examRange: "화작, 독서, 언매, 문학, 통사, 한지, 세지, 세계사, (줄바꿈) 동아, 경제, 정법, 사문, 생윤, 윤사",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "171",
    links: {
      guide: "https://admission.sogang.ac.kr/enter/html/rolling/guide.asp",
      notice: "https://admission.sogang.ac.kr/enter/html/rolling/guide.asp"
    }
  },
  {
    university: "서강대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일 (줄바꿈) (15:30~)",
    minimumStandard: "3합 7(탐1), 한4",
    examType: "수리 관련 제시문과 논제 2문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분, 기하",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "171",
    links: {
      guide: "https://admission.sogang.ac.kr/enter/html/rolling/guide.asp",
      notice: "https://admission.sogang.ac.kr/enter/html/rolling/guide.asp"
    }
  },
  {
    university: "서경대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "90/10",
    examDate: "11월 1일",
    minimumStandard: "X",
    examType: "약술형: 국어 4문항 + 수학 4문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "214",
    links: {
      guide: "https://go.skuniv.ac.kr/index.php?mid=rolling_admission_guide",
      notice: "https://go.skuniv.ac.kr/index.php?mid=rolling_admission_guide"
    }
  },
  {
    university: "서경대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "90/10",
    examDate: "11월 1일",
    minimumStandard: "X",
    examType: "약술형: 국어 4문항 + 수학 4문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "214",
    links: {
      guide: "https://go.skuniv.ac.kr/index.php?mid=rolling_admission_guide",
      notice: "https://go.skuniv.ac.kr/index.php?mid=rolling_admission_guide"
    }
  },
  {
    university: "서울과기대",
    category: "자연",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 23일",
    minimumStandard: "X",
    examType: "수리논술(3문항)",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: [300, 295, 290, 280, 270, 260, 220, 170, 0],
    recruitment: "-",
    links: {
      guide: "https://admission.seoultech.ac.kr/cms/FR_CON/index.do?MENU_ID=130",
      notice: "https://admission.seoultech.ac.kr/cms/FR_CON/index.do?MENU_ID=130"
    }
  },
  {
    university: "서울시립대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "10월 3일",
    minimumStandard: "X",
    examType: "수리논술(4문항)",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분, 기하",
    scores: [100, 99, 98, 97, 96, 90, 80, 70, 0],
    recruitment: "-",
    links: {
      guide: "https://admission.uos.ac.kr/admissionNew/html/susi/info.do?menuid=2002001001000000000",
      notice: "https://admission.uos.ac.kr/admissionNew/html/susi/info.do?menuid=2002001001000000000"
    }
  },
  {
    university: "서울여대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 21일",
    minimumStandard: "X",
    examType: "제시문 자료와 도표분석, 견해 제시 2문항",
    examRange: "고등학교 교육과정 범위 내",
    scores: [20, 19, 18, 17, 16, 14, 11, 8, 5],
    recruitment: "-",
    links: {
      guide: "https://admission.swu.ac.kr/",
      notice: "https://admission.swu.ac.kr/"
    }
  },
  {
    university: "서울여대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 21일",
    minimumStandard: "X",
    examType: "수리논술 2~4문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ",
    scores: [20, 19, 18, 17, 16, 14, 11, 8, 5],
    recruitment: "-",
    links: {
      guide: "https://admission.swu.ac.kr/",
      notice: "https://admission.swu.ac.kr/"
    }
  },
  {
    university: "성균관대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일 (줄바꿈) (인문, 글로벌)",
    minimumStandard: "국영수탐2 (줄바꿈) 3합 5~6",
    examType: "인문논술 3문항",
    examRange: "언어형: 국어, 사회(역사/도덕 포함), 한국사",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.skku.edu/admission/html/rolling/question.html",
      notice: "https://admission.skku.edu/admission/html/rolling/guide.html"
    }
  },
  {
    university: "성균관대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 22일 (줄바꿈) (자연, 메디컬)",
    minimumStandard: "국영수탐2 (줄바꿈) 3합 5~6 (줄바꿈) 의예:3합 4(탐2)",
    examType: "수리논술 3문항",
    examRange: "수리형: 수학, 수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.skku.edu/admission/html/rolling/question.html",
      notice: "https://admission.skku.edu/admission/html/rolling/guide.html"
    }
  },
  {
    university: "성신여대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "10월 4일",
    minimumStandard: "2합 7(탐1)",
    examType: "통합 교과형 논술 2문항",
    examRange: "학교 교육과정 범위 내(진로선택과목 제외)",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://ipsi.sungshin.ac.kr/guide/dataroom.htm?bbsid=dataroom&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=34120",
      notice: "https://ipsi.sungshin.ac.kr/guide/recruit.htm?ctg_cd=susi"
    }
  },
  {
    university: "성신여대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "10월 3일",
    minimumStandard: "2합 7(탐1)",
    examType: "수리논술 4문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://ipsi.sungshin.ac.kr/guide/dataroom.htm?bbsid=dataroom&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=34120",
      notice: "https://ipsi.sungshin.ac.kr/guide/recruit.htm?ctg_cd=susi"
    }
  },
  {
    university: "세종대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) 인문(09시~) (줄바꿈) 자유(14시~)",
    minimumStandard: "2합 5(탐1)",
    examType: "인문: 교과서 지문 및 다양한 시각자료 종합평가 (줄바꿈) 자유전공: 통합(시각자료 분석, 해석+수학 융합)",
    examRange: "인문: 국어, 사회(도덕) (줄바꿈) 자유전공: 국어, 사회(역사.도덕), 수학, 수학Ⅰ, 수학Ⅱ",
    scores: [1000, 990, 980, 950, 900, 800, 700, 500, 0],
    recruitment: "344",
    links: {
      guide: "https://ipsi.sejong.ac.kr/sub_page/sub5/0113_view.asp?m_no=4&gotopage=1",
      notice: "https://ipsi.sejong.ac.kr/sub_page/sub1/0101.asp?tab1=1"
    }
  },
  {
    university: "세종대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "70/30",
    examDate: "11월 29일 (줄바꿈) 인공(09시~) (줄바꿈) 자연(14시~)",
    minimumStandard: "2합 5(탐1)",
    examType: "수리논술",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: [1000, 990, 980, 950, 900, 800, 700, 500, 0],
    recruitment: "344",
    links: {
      guide: "https://ipsi.sejong.ac.kr/sub_page/sub5/0113_view.asp?m_no=4&gotopage=1",
      notice: "https://ipsi.sejong.ac.kr/sub_page/sub1/0101.asp?tab1=1"
    }
  },
  {
    university: "수원대",
    category: "인문",
    ratio2027: { essay: 75, record: 25 },
    ratio2026: "80/20",
    examDate: "11월 22일",
    minimumStandard: "X",
    examType: "약술형: 국어 10문항 + 수학 5문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 98.25, 96.5, 94.75, 93, 91.25, 83.75, 80, 75],
    recruitment: "-",
    links: {
      guide: "https://ipsi.suwon.ac.kr/board/notice/read/2899?sf=title&st=%EA%B0%80%EC%9D%B4%EB%93%9C",
      notice: "https://ipsi.suwon.ac.kr/guide/susi"
    }
  },
  {
    university: "수원대",
    category: "자연",
    ratio2027: { essay: 75, record: 25 },
    ratio2026: "80/20",
    examDate: "11월 21일",
    minimumStandard: "X",
    examType: "약술형: 국어 5문항 + 수학 10문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 98.25, 96.5, 94.75, 93, 91.25, 83.75, 80, 75],
    recruitment: "-",
    links: {
      guide: "https://ipsi.suwon.ac.kr/board/notice/read/2899?sf=title&st=%EA%B0%80%EC%9D%B4%EB%93%9C",
      notice: "https://ipsi.suwon.ac.kr/guide/susi"
    }
  },
  {
    university: "숙명여대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 21일(인문) (줄바꿈) 11월 22일(의류)",
    minimumStandard: "2합 5(탐1)",
    examType: "통합 논술형 2문항",
    examRange: "학교 교육과정 범위 내(진로선택 제외)",
    scores: [100, 98.9, 97.8, 96.6, 95.4, 90.4, 85.9, 81.9, 75],
    recruitment: "-",
    links: {
      guide: "https://admission.sookmyung.ac.kr/admission/html/rolling/essay.asp",
      notice: "https://admission.sookmyung.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "숙명여대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 21일 (줄바꿈) (의류학과 제외)",
    minimumStandard: "2합 5(탐1) (줄바꿈) 약학 3합 4(탐1)",
    examType: "수리 논술 3문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: [100, 98.9, 97.8, 96.6, 95.4, 90.4, 85.9, 81.9, 75],
    recruitment: "-",
    links: {
      guide: "https://admission.sookmyung.ac.kr/admission/html/rolling/essay.asp",
      notice: "https://admission.sookmyung.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "숭실대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "80/20",
    examDate: "11월 21일 (줄바꿈) (14:30 ~)",
    minimumStandard: "2합 6(탐1)",
    examType: "인문. 사회 : 제시문 기반 문제 해결 평가 (줄바꿈) 경상 : 도표, 수식 및 그림을 포함한 제시문",
    examRange: "인문사회 : 국어, 사회(역사/도덕 포함), 한국사 공통/일반선택 (줄바꿈) 경상 : 수학, 수학Ⅰ, 사회문화, 경제",
    scores: [2, 1.9, 1.8, 1.7, 1.6, 1.4, 1, 0.6, 0],
    recruitment: "-",
    links: {
      guide: "https://iphak.ssu.ac.kr/board/exam_view.asp?number=127&srchoption=&keyword=&flag=&flag2=1&page_no=1_2_7&page=1",
      notice: "https://iphak.ssu.ac.kr/mojip/req.asp?flag=1&page_no=1_2_2"
    }
  },
  {
    university: "숭실대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "80/20",
    examDate: "11월 21일 (줄바꿈) (09:30 ~)",
    minimumStandard: "2합 6(탐1)",
    examType: "수리논술",
    examRange: "자연 : 수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: [2, 1.9, 1.8, 1.7, 1.6, 1.4, 1, 0.6, 0],
    recruitment: "-",
    links: {
      guide: "https://iphak.ssu.ac.kr/board/exam_view.asp?number=127&srchoption=&keyword=&flag=&flag2=1&page_no=1_2_7&page=1",
      notice: "https://iphak.ssu.ac.kr/mojip/req.asp?flag=1&page_no=1_2_2"
    }
  },
  {
    university: "신한대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 29일",
    minimumStandard: "X",
    examType: "약술형 : 국어 7문항 + 수학 7문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 97.5, 96, 94.5, 91.5, 88.5, 82, 68],
    recruitment: "-",
    links: {
      guide: "https://ipsi.shinhan.ac.kr/ihp/bbs/selectBoardArticle.do?bbsId=BBSMSTR_000000000000&cateId=1&relateImagePath=svis_1&nttId=763",
      notice: "https://ipsi.shinhan.ac.kr/adm/info.do?cateId=1&bbsId=BBSMSTR_000000000051&relateImagePath=svis_1"
    }
  },
  {
    university: "신한대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 29일",
    minimumStandard: "X",
    examType: "약술형 : 국어 7문항 + 수학 7문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 97.5, 96, 94.5, 91.5, 88.5, 82, 68],
    recruitment: "-",
    links: {
      guide: "https://ipsi.shinhan.ac.kr/ihp/bbs/selectBoardArticle.do?bbsId=BBSMSTR_000000000000&cateId=1&relateImagePath=svis_1&nttId=763",
      notice: "https://ipsi.shinhan.ac.kr/adm/info.do?cateId=1&bbsId=BBSMSTR_000000000051&relateImagePath=svis_1"
    }
  },
  {
    university: "아주대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "12월 6일 (줄바꿈) (09:00 ~)",
    minimumStandard: "X",
    examType: "인문/사회분야를 비롯한 다양한 주제의 제시문 (줄바꿈) 독해력, 논리력, 표현력, 통합적 사고력 평가",
    examRange: "국어, 독서, 문학, 통사, 한국사, 한지, 세지, 동사,  (줄바꿈) 세사, 경제, 정법, 사문, 생윤, 윤사",
    scores: [100, 99, 98, 95, 90, 85, 75, 65, 0],
    recruitment: "-",
    links: {
      guide: "https://www.iajou.ac.kr/pasttest/view.php?bn=76465&m_type=SUSI&nPage=1&f=&s=",
      notice: "https://www.iajou.ac.kr/mojib/?m_type=SUSI"
    }
  },
  {
    university: "아주대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "12월 5일(자연,공과) (줄바꿈) 12월 5일(의과 19시) (줄바꿈) 12월 6일(약학)",
    minimumStandard: "X (줄바꿈) 의학:4합 6(탐2) (줄바꿈) 약학:3합 5(탐2)",
    examType: "자연(약학 포함): 수리적 분석력, 응용력, 창의력 (줄바꿈) 의예 : 수리논술+과학논술(생명과학)",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분 (줄바꿈) 의예 : 수학, 수학Ⅰ, 수학Ⅱ, 미적, 생명Ⅰ, 생명Ⅱ",
    scores: [100, 99, 98, 95, 90, 85, 75, 65, 0],
    recruitment: "-",
    links: {
      guide: "https://www.iajou.ac.kr/pasttest/view.php?bn=76465&m_type=SUSI&nPage=1&f=&s=",
      notice: "https://www.iajou.ac.kr/mojib/?m_type=SUSI"
    }
  },
  {
    university: "연세대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "10월 10일",
    minimumStandard: "X",
    examType: "다면 사고형 논술 / 영어 제시문 및 (줄바꿈) 수리 통계 및 과학 제시문 포함될 수 있음.",
    examRange: "국, 영, 사(도덕, 역사) 교육과정 전과목",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.yonsei.ac.kr/seoul/admission/html/counsel/dataView.asp?BBS_NO=3356&s_code=BBS_SUBJECT&s_data=&s_page=1",
      notice: "https://admission.yonsei.ac.kr/seoul/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "연세대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "10월 10일",
    minimumStandard: "X",
    examType: "논리력, 창의력, 종합적 사고능력 등을 (줄바꿈) 평가하기 위한 수리·통합형 논술",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분, 확률과 통계 (줄바꿈) 실용 수학, 기하, 경제 수학, 수학과제 탐구 + 통합과학",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.yonsei.ac.kr/seoul/admission/html/counsel/dataView.asp?BBS_NO=3356&s_code=BBS_SUBJECT&s_data=&s_page=1",
      notice: "https://admission.yonsei.ac.kr/seoul/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "연세대(미래)",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "100",
    examDate: "10월 16일",
    minimumStandard: "X",
    examType: "인문 사회과학적 사고력",
    examRange: "국어, 사회, 확률과 통계",
    scores: [100, 97, 94, 90, 86, 76, 60, 40, 10],
    recruitment: "-",
    links: {
      guide: "https://admission.yonsei.ac.kr/mirae/admission/html/rolling/previousView.asp?BBS_NO=3055&s_code=BBS_SUBJECT&s_data=&s_page=1",
      notice: "https://admission.yonsei.ac.kr/mirae/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "연세대(미래)",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "100",
    examDate: "10월 16일",
    minimumStandard: "X",
    examType: "수리적 사고력",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분, 기하, 확률과 통계",
    scores: [100, 97, 94, 90, 86, 76, 60, 40, 10],
    recruitment: "-",
    links: {
      guide: "https://admission.yonsei.ac.kr/mirae/admission/html/rolling/previousView.asp?BBS_NO=3055&s_code=BBS_SUBJECT&s_data=&s_page=1",
      notice: "https://admission.yonsei.ac.kr/mirae/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "을지대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "10월 16일 (줄바꿈) 10월 17일(보건,사배)",
    minimumStandard: "X",
    examType: "약술형: 국어 7문항 + 수학 7문항",
    examRange: "언어와 매체. 독서(비문학), 문학, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 98, 96, 94, 92, 90, 70, 40, 10],
    recruitment: "-",
    links: {
      guide: "https://admission.eulji.ac.kr/index.html?menuno=2750",
      notice: "https://admission.eulji.ac.kr/index.html?menuno=2750&bbsno=73174&boardno=545&ztag=rO0ABXQAMTxjYWxsIHR5cGU9ImJvYXJkIiBubz0iNTQ1IiBza2luPSJub3RpY2UiPjwvY2FsbD4%3D&siteno=195&act=view"
    }
  },
  {
    university: "을지대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "10월 16일 (줄바꿈) 10월 17일(보건,사배)",
    minimumStandard: "X",
    examType: "약술형: 국어 7문항 + 수학 7문항",
    examRange: "언어와 매체. 독서(비문학), 문학, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 98, 96, 94, 92, 90, 70, 40, 10],
    recruitment: "-",
    links: {
      guide: "https://admission.eulji.ac.kr/index.html?menuno=2750",
      notice: "https://admission.eulji.ac.kr/index.html?menuno=2750&bbsno=73174&boardno=545&ztag=rO0ABXQAMTxjYWxsIHR5cGU9ImJvYXJkIiBubz0iNTQ1IiBza2luPSJub3RpY2UiPjwvY2FsbD4%3D&siteno=195&act=view"
    }
  },
  {
    university: "이화여대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일 (줄바꿈) 인문I (08:30~) (줄바꿈) 인문II (14:20~)",
    minimumStandard: "2합 국포 5(탐1) (줄바꿈) 스크: 3합 5(탐1)",
    examType: "언어논술",
    examRange: "고등학교 전 교육과정",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.ewha.ac.kr/admission/html/rolling/lecture-info.asp",
      notice: "https://admission.ewha.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "이화여대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 29일 (줄바꿈) 자연I (08:30~) (줄바꿈) 자연II (14:20~)",
    minimumStandard: "2합 수포 5(탐1) (줄바꿈) 스크: 3합 5(탐1) (줄바꿈) 의:4합5(탐1), 약:4합6(탐1)",
    examType: "수리논술",
    examRange: "수학, 수학I, 수학II, 확률과통계, 미적분, 기하를 포함한 (줄바꿈) 고등학교 전 교육과정",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://admission.ewha.ac.kr/admission/html/rolling/lecture-info.asp",
      notice: "https://admission.ewha.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "인하대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "70/30",
    examDate: "12월 05일",
    minimumStandard: "X",
    examType: "언어논술(인문학+사회과학)",
    examRange: "국어, 사회(역사/도덕) 한국사 공통 및 일반선택교과",
    scores: [10, 9.6, 9.5, 9.5, 9.4, 9.4, 7.2, 3.6, 0],
    recruitment: "-",
    links: {
      guide: "https://admission.inha.ac.kr/cms/FR_BBS_CON/BoardView.do?pageNo=1&pagePerCnt=15&MENU_ID=110&CONTENTS_NO=&SITE_NO=2&BOARD_SEQ=2&BBS_SEQ=188&P_BBS_SEQ=&SEARCH_SEQ=3&PWD=&SEARCH_FLD=&SEARCH=",
      notice: "https://admission.inha.ac.kr/cms/FR_CON/index.do?MENU_ID=80"
    }
  },
  {
    university: "인하대",
    category: "자연",
    ratio2027: { essay: 82, record: 18 },
    ratio2026: "70/30",
    examDate: "12월 06일",
    minimumStandard: "X (줄바꿈) 의예: 3개 각1(과 2)",
    examType: "수리논술",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분",
    scores: [10, 9.6, 9.5, 9.5, 9.4, 9.4, 7.2, 3.6, 0],
    recruitment: "-",
    links: {
      guide: "https://admission.inha.ac.kr/cms/FR_BBS_CON/BoardView.do?pageNo=1&pagePerCnt=15&MENU_ID=110&CONTENTS_NO=&SITE_NO=2&BOARD_SEQ=2&BBS_SEQ=189&P_BBS_SEQ=&SEARCH_SEQ=3&PWD=&SEARCH_FLD=&SEARCH=",
      notice: "https://admission.inha.ac.kr/cms/FR_CON/index.do?MENU_ID=80"
    }
  },
  {
    university: "중앙대(일반)",
    category: "인문",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 29일",
    minimumStandard: "3합 6(탐1), 한4",
    examType: "인문사회 : 언어논술 3문항 (줄바꿈) 경영경제 : 언어논술 2문항 + 수리논술 1문항",
    examRange: "언어논술: 국어, 사회 공통 과목 및 일반 선택 과목 (줄바꿈) 수리논술: 수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계",
    scores: [10, 9.96, 9.92, 9.88, 9.84, 9.8, 9.6, 8, 4],
    recruitment: "-",
    links: {
      guide: "https://admission.cau.ac.kr/submenu.do?menuurl=LxZUaTFmmSi27DgQxWKW1A%3D%3D&",
      notice: "https://admission.cau.ac.kr/submenu.do?menuurl=fpotGuatDnhsqjCnl16KOw%3d%3d&"
    }
  },
  {
    university: "중앙대(일반)",
    category: "자연",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) (약,의학 14시~)",
    minimumStandard: "3합 6(탐1), 한4 (줄바꿈) 의:4합5(탐2)한4 (줄바꿈) 약:4합5(탐1)한4",
    examType: "수리논술 4문항 (줄바꿈) 약학부, 의학부 : 수리논술 5문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분 (줄바꿈) (의/약학부 : 수학, 수학Ⅰ, 수학Ⅱ, 확통, 미적분, 기하)",
    scores: [10, 9.96, 9.92, 9.88, 9.84, 9.8, 9.6, 8, 4],
    recruitment: "-",
    links: {
      guide: "https://admission.cau.ac.kr/submenu.do?menuurl=LxZUaTFmmSi27DgQxWKW1A%3D%3D&",
      notice: "https://admission.cau.ac.kr/submenu.do?menuurl=fpotGuatDnhsqjCnl16KOw%3d%3d&"
    }
  },
  {
    university: "중앙대(창의)",
    category: "인문",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "10월 11일 (줄바꿈) (10:00 ~)",
    minimumStandard: "X",
    examType: "인문사회 : 언어논술 3문항 (줄바꿈) 경영경제 : 언어논술 2문항 + 수리논술 1문항",
    examRange: "언어논술: 국어, 사회 공통 과목 및 일반 선택 과목 (줄바꿈) 수리논술: 수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계",
    scores: [10, 9.96, 9.92, 9.88, 9.84, 9.8, 9.6, 8, 4],
    recruitment: "-",
    links: {
      guide: "https://admission.cau.ac.kr/submenu.do?menuurl=LxZUaTFmmSi27DgQxWKW1A%3D%3D&",
      notice: "https://admission.cau.ac.kr/submenu.do?menuurl=fpotGuatDnhsqjCnl16KOw%3d%3d&"
    }
  },
  {
    university: "중앙대(창의)",
    category: "자연",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "10월 11일 (줄바꿈) (14:00 ~)",
    minimumStandard: "X",
    examType: "수리논술 6문항 (줄바꿈) 약학부, 의학부 : 수리논술 8문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 미적분 (줄바꿈) (의/약학부 : 수학, 수학Ⅰ, 수학Ⅱ, 미적분, 기하)",
    scores: [10, 9.96, 9.92, 9.88, 9.84, 9.8, 9.6, 8, 4],
    recruitment: "-",
    links: {
      guide: "https://admission.cau.ac.kr/submenu.do?menuurl=LxZUaTFmmSi27DgQxWKW1A%3D%3D&",
      notice: "https://admission.cau.ac.kr/submenu.do?menuurl=fpotGuatDnhsqjCnl16KOw%3d%3d&"
    }
  },
  {
    university: "중앙대(다빈치)",
    category: "자연",
    ratio2027: { essay: 70, record: 30 },
    ratio2026: "70/30",
    examDate: "11월 28일 (줄바꿈) (약,의학 14시~)",
    minimumStandard: "X",
    examType: "수리논술 4문항",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분",
    scores: [10, 9.96, 9.92, 9.88, 9.84, 9.8, 9.6, 8, 4],
    recruitment: "-",
    links: {
      guide: "https://admission.cau.ac.kr/submenu.do?menuurl=LxZUaTFmmSi27DgQxWKW1A%3D%3D&",
      notice: "https://admission.cau.ac.kr/submenu.do?menuurl=fpotGuatDnhsqjCnl16KOw%3d%3d&"
    }
  },
  {
    university: "한국공학대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 22일",
    minimumStandard: "X",
    examType: "수리논술 9문항",
    examRange: "수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 98, 97, 96, 94, 80, 60, 25],
    recruitment: "-",
    links: {
      guide: "https://iphak.tukorea.ac.kr/guide/pds.htm?bbsid=pds&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=12599",
      notice: "https://iphak.tukorea.ac.kr/susi/guide.htm?bbsid=guide&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=13544"
    }
  },
  {
    university: "한국공학대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 22일",
    minimumStandard: "X",
    examType: "수리논술 9문항",
    examRange: "수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 98, 97, 96, 94, 80, 60, 25],
    recruitment: "-",
    links: {
      guide: "https://iphak.tukorea.ac.kr/guide/pds.htm?bbsid=pds&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=12599",
      notice: "https://iphak.tukorea.ac.kr/susi/guide.htm?bbsid=guide&ctg_cd=susi&page=1&skey=&keyword=&mode=view&bltn_seq=13544"
    }
  },
  {
    university: "한국외대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일 (줄바꿈) 11월 29일",
    minimumStandard: "2합 4(탐1)",
    examType: "통합교과형(인문계·사회계)",
    examRange: "고교 교육과정 내",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=340",
      notice: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=650"
    }
  },
  {
    university: "한국외대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 29일 (줄바꿈) Language&AI융합",
    minimumStandard: "2합 4(탐1)",
    examType: "수리논술",
    examRange: "수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=340",
      notice: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=650"
    }
  },
  {
    university: "한국외대(글로벌)",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 28일 (줄바꿈) 11월 29일",
    minimumStandard: "2합 6(탐1)",
    examType: "통합교과형(인문계·사회계)",
    examRange: "고교 교육과정 내",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=340",
      notice: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=650"
    }
  },
  {
    university: "한국외대(글로벌)",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 29일",
    minimumStandard: "2합 6(탐1)",
    examType: "수리논술",
    examRange: "수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=340",
      notice: "https://adms.hufs.ac.kr/cms/FrCon/index.do?MENU_ID=650"
    }
  },
  {
    university: "한국전통문화대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "11월 27일",
    minimumStandard: "X",
    examType: "논술형 3문항",
    examRange: "역사, 문화, 국가유산 등 전공 관련 제시문 연계, 활용",
    scores: [9, 8, 7, 6, 5, 4, 3, 2, 1],
    recruitment: "17",
    links: {
      guide: "https://www.knuh.ac.kr/admission/brd/list.do?mnuBaseId=MNU0000191&topBaseId=MNU0000188&tplSer=17",
      notice: "https://www.knuh.ac.kr/mec/ots/brd/view.do?mnuBaseId=MNU0000189&topBaseId=MNU0000188&tplSer=70&atcSer=1&bltTpyCd=PDFTYPCD"
    }
  },
  {
    university: "한국항공대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일 (줄바꿈) (15:00 ~)",
    minimumStandard: "2합 6(탐1)",
    examType: "언어논술 2문항",
    examRange: "인문, 사회교과",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://ibhak.kau.ac.kr/admission/html/rolling/previous.asp",
      notice: "https://ibhak.kau.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "한국항공대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 21일 (줄바꿈) 공학적성 10시~ (줄바꿈) 이학적성 15시~",
    minimumStandard: "2합 6(탐1)",
    examType: "공학적성 : 공학 수리논술 2문항 (줄바꿈) 이학적성 : 이학 수리논술 2문항",
    examRange: "공학적성 : 수학, 수학Ⅰ, 수학Ⅱ, 미적분 (줄바꿈) 이학적성 : 수학. 수학Ⅰ, 수학Ⅱ,",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://ibhak.kau.ac.kr/admission/html/rolling/previous.asp",
      notice: "https://ibhak.kau.ac.kr/admission/html/rolling/guide.asp"
    }
  },
  {
    university: "한국기술교대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 25일",
    minimumStandard: "X",
    examType: "자료제시형 언어논술 10문항 내외 (줄바꿈) (단문형 지문, 단답/약술형)",
    examRange: "국어, 사회",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://www.koreatech.ac.kr/board.es?mid=a40601000000&bid=0036&act=view&list_no=52383",
      notice: "https://www.koreatech.ac.kr/menu.es?mid=a40101010100"
    }
  },
  {
    university: "한국기술교대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "100",
    examDate: "11월 25일",
    minimumStandard: "X",
    examType: "수리논술 10문항 내외 (줄바꿈) (단문형 지문, 단답/약술형)",
    examRange: "수학Ⅰ, 수학Ⅱ",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://www.koreatech.ac.kr/board.es?mid=a40601000000&bid=0036&act=view&list_no=52383",
      notice: "https://www.koreatech.ac.kr/menu.es?mid=a40101010100"
    }
  },
  {
    university: "한신대",
    category: "인문",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "12월 5일 (줄바꿈) (10:00 ~)",
    minimumStandard: "X",
    examType: "약술형: 국어 10문항 + 수학 5문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 98, 97, 96, 95, 94, 90, 85],
    recruitment: "-",
    links: {
      guide: "https://ent.hs.ac.kr/ipsi/pages/?p=43&b=b_1_8&bn=19321&m=read&nPage=1&cate=%BC%F6%BD%C3&ct=&f=ALL&s=",
      notice: "https://ent.hs.ac.kr/ipsi/pages/?p=2&mj=01"
    }
  },
  {
    university: "한신대",
    category: "자연",
    ratio2027: { essay: 80, record: 20 },
    ratio2026: "80/20",
    examDate: "12월 5일 (줄바꿈) (14:30 ~)",
    minimumStandard: "X",
    examType: "약술형: 국어 5문항 + 수학 10문항",
    examRange: "문학, 독서, 수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 98, 97, 96, 95, 94, 90, 85],
    recruitment: "-",
    links: {
      guide: "https://ent.hs.ac.kr/ipsi/pages/?p=43&b=b_1_8&bn=19321&m=read&nPage=1&cate=%BC%F6%BD%C3&ct=&f=ALL&s=",
      notice: "https://ent.hs.ac.kr/ipsi/pages/?p=2&mj=01"
    }
  },
  {
    university: "한양대",
    category: "인문",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "90/10",
    examDate: "11월 28일 (줄바꿈) 오전:상경 (줄바꿈) 오후:인문사회",
    minimumStandard: "3합 7(탐1)",
    examType: "인문사회 : 인문논술(1문항) (줄바꿈) 상경 : 인문논술(1문항) + 수리논술(1문항)",
    examRange: "인문논술: 수능 국어, 사회탐구 영역과 동일 (줄바꿈) 수리논술: 수학, 수학Ⅰ, 수학Ⅱ, 확룰과 통계, 미적분, 기하",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://go.hanyang.ac.kr/resources/upload_data/pdf/20240503114801523_.pdf",
      notice: "https://go.hanyang.ac.kr/web/mojib/mojib.do?m_type=SUSI"
    }
  },
  {
    university: "한양대",
    category: "자연",
    ratio2027: { essay: 100, record: 0 },
    ratio2026: "90/10",
    examDate: "11월 28일 (줄바꿈) 의예 : 17:00 ~",
    minimumStandard: "3합 7(탐1) (줄바꿈) 의예: 3합 4(탐(2))",
    examType: "수리논술(2문항)",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 확룰과 통계, 미적분, 기하",
    scores: ["-", "-", "-", "-", "-", "-", "-", "-", "-"],
    recruitment: "-",
    links: {
      guide: "https://go.hanyang.ac.kr/resources/upload_data/pdf/20240503114801523_.pdf",
      notice: "https://go.hanyang.ac.kr/web/mojib/mojib.do?m_type=SUSI"
    }
  },
  {
    university: "홍익대",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "10월 4일",
    minimumStandard: "2합 5(탐1), 한4",
    examType: "인문 사회분야 통합교과형 논술",
    examRange: "국어, 화작, 독서, 언매, 문학, 통사, 한지, 세지,  (줄바꿈) 세사, 동사, 경제, 정법, 사문, 생윤, 윤사",
    scores: [100, 99, 97, 94, 90, 85, 60, 30, 0],
    recruitment: "-",
    links: {
      guide: "https://www.hongik.ac.kr/kr/admission/notice-admission.do?mode=view&articleNo=134109&article.offset=0&articleLimit=10",
      notice: "https://www.hongik.ac.kr/kr/admission/recruitment.do"
    }
  },
  {
    university: "홍익대",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "10월 3일",
    minimumStandard: "2합 5(탐1), 한4",
    examType: "수리논술",
    examRange: "수학, 수학Ⅰ, 수학Ⅱ, 확률과 통계, 미적분, 기하",
    scores: [100, 99, 97, 94, 90, 85, 60, 30, 0],
    recruitment: "-",
    links: {
      guide: "https://www.hongik.ac.kr/kr/admission/notice-admission.do?mode=view&articleNo=134109&article.offset=0&articleLimit=10",
      notice: "https://www.hongik.ac.kr/kr/admission/recruitment.do"
    }
  },
  {
    university: "홍익대(세종)",
    category: "인문",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 22일",
    minimumStandard: "1개 4(탐1)",
    examType: "통합교과형",
    examRange: "국어, 화작, 독서, 언매, 문학, 통사, 한지, 세지,  (줄바꿈) 세사, 동사, 경제, 정법, 사문, 생윤, 윤사",
    scores: [100, 99, 97, 94, 90, 85, 60, 30, 0],
    recruitment: "-",
    links: {
      guide: "https://www.hongik.ac.kr/kr/admission/recruitment.do",
      notice: "https://www.hongik.ac.kr/kr/admission/recruitment.do"
    }
  },
  {
    university: "홍익대(세종)",
    category: "자연",
    ratio2027: { essay: 90, record: 10 },
    ratio2026: "90/10",
    examDate: "11월 22일",
    minimumStandard: "1개 4(탐1)",
    examType: "교과서 등을 변형한 수학 7문항",
    examRange: "수학Ⅰ, 수학Ⅱ",
    scores: [100, 99, 97, 94, 90, 85, 60, 30, 0],
    recruitment: "-",
    links: {
      guide: "https://www.hongik.ac.kr/kr/admission/notice-admission.do?mode=view&articleNo=134109&article.offset=0&articleLimit=10",
      notice: "https://www.hongik.ac.kr/kr/admission/recruitment.do"
    }
  }
];
