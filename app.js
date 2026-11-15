/**
 * NEB Class 12 GPA Calculator
 * Official CDC Nepal Curriculum & Letter Grading Directive 2078 Compliant
 */

// Stream Subject Configurations (CDC Class 12)
const STREAM_PRESETS = {
  science: {
    name: "Science",
    description: "Class 12 Science: Compulsory English (4 CH), Nepali (3 CH), Physics (5 CH), Chemistry (5 CH), Mathematics (5 CH), Biology / Computer Science (5 CH).",
    subjects: [
      { id: "s1", code: "Eng.004", name: "Compulsory English", credit: 4, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "s2", code: "Nep.002", name: "Compulsory Nepali", credit: 3, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "s3", code: "Phy.102", name: "Physics", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "s4", code: "Che.212", name: "Chemistry", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "s5", code: "Mat.216", name: "Mathematics", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { 
        id: "s6", 
        code: "Bio/CS", 
        name: "Biology", 
        credit: 5, 
        theoryMax: 75, 
        practicalMax: 25, 
        isCompulsory: false,
        options: [
          { name: "Biology (Bio.214)", theoryMax: 75, practicalMax: 25 },
          { name: "Computer Science (Com.428)", theoryMax: 50, practicalMax: 50 }
        ]
      }
    ],
    optional7th: { id: "s7", code: "Opt.7th", name: "Optional Subject (e.g. Computer Science / Math)", credit: 5, theoryMax: 50, practicalMax: 50, isCompulsory: false }
  },
  management: {
    name: "Management",
    description: "Class 12 Management: English (4 CH), Nepali (3 CH), Social Studies or Math (5 CH), Accountancy (5 CH), Economics (5 CH), and Elective (5 CH).",
    subjects: [
      { id: "m1", code: "Eng.004", name: "Compulsory English", credit: 4, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "m2", code: "Nep.002", name: "Compulsory Nepali", credit: 3, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { 
        id: "m3", 
        code: "Sol/Mat", 
        name: "Social Studies & Life Skills", 
        credit: 5, 
        theoryMax: 75, 
        practicalMax: 25, 
        isCompulsory: true,
        options: [
          { name: "Social Studies & Life Skills (Sol.006)", theoryMax: 75, practicalMax: 25 },
          { name: "Business Mathematics (Bma.406)", theoryMax: 75, practicalMax: 25 }
        ]
      },
      { id: "m4", code: "Acc.104", name: "Principles of Accounting II", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "m5", code: "Eco.304", name: "Economics", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { 
        id: "m6", 
        code: "Mgt.Elec", 
        name: "Business Studies", 
        credit: 5, 
        theoryMax: 75, 
        practicalMax: 25, 
        isCompulsory: false,
        options: [
          { name: "Business Studies (Bus.216)", theoryMax: 75, practicalMax: 25 },
          { name: "Hotel Management (Hom.440)", theoryMax: 50, practicalMax: 50 },
          { name: "Computer Science (Com.428)", theoryMax: 50, practicalMax: 50 },
          { name: "Marketing (Mkt.310)", theoryMax: 75, practicalMax: 25 }
        ]
      }
    ],
    optional7th: { id: "m7", code: "Opt.7th", name: "Optional 7th (e.g. Tourism / Marketing)", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
  },
  humanities: {
    name: "Humanities",
    description: "Class 12 Humanities: English (4 CH), Nepali (3 CH), Social Studies (5 CH), Sociology (5 CH), Mass Communication (5 CH), Political Science / Major English (5 CH).",
    subjects: [
      { id: "h1", code: "Eng.004", name: "Compulsory English", credit: 4, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "h2", code: "Nep.002", name: "Compulsory Nepali", credit: 3, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "h3", code: "Sol.006", name: "Social Studies & Life Skills", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "h4", code: "Soc.118", name: "Sociology", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "h5", code: "Jrn.322", name: "Mass Communication & Journalism", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "h6", code: "Pol.218", name: "Political Science / Major English", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
    ],
    optional7th: { id: "h7", code: "Opt.7th", name: "Optional Subject (e.g. History / Geography)", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
  },
  law: {
    name: "Law",
    description: "Class 12 Law: English (4 CH), Nepali (3 CH), Social Studies (5 CH), Jurisprudence (5 CH), Nepalese Legal System (5 CH), Constitutional Law (5 CH).",
    subjects: [
      { id: "l1", code: "Eng.004", name: "Compulsory English", credit: 4, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "l2", code: "Nep.002", name: "Compulsory Nepali", credit: 3, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "l3", code: "Sol.006", name: "Social Studies & Life Skills", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "l4", code: "Jur.110", name: "Jurisprudence & Legal Theories", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "l5", code: "Nls.210", name: "Nepalese Legal System", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "l6", code: "Csl.314", name: "Constitutional Law & Procedural Law", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
    ],
    optional7th: { id: "l7", code: "Opt.7th", name: "Optional 7th (e.g. Human Rights / Sociology)", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
  },
  education: {
    name: "Education",
    description: "Class 12 Education: English (4 CH), Nepali (3 CH), Social Studies (5 CH), Child Development (5 CH), Education & Development (5 CH), Pedagogy (5 CH).",
    subjects: [
      { id: "e1", code: "Eng.004", name: "Compulsory English", credit: 4, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "e2", code: "Nep.002", name: "Compulsory Nepali", credit: 3, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "e3", code: "Sol.006", name: "Social Studies & Life Skills", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "e4", code: "Cdl.214", name: "Child Development & Learning", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "e5", code: "Edu.114", name: "Education & Development", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "e6", code: "Ipe.318", name: "Instructional Pedagogy & Evaluation", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
    ],
    optional7th: { id: "e7", code: "Opt.7th", name: "Optional Subject", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
  },
  custom: {
    name: "Custom / Flexible Stream",
    description: "Build your own Class 12 subject combination with custom credit hours and theory/practical marks.",
    subjects: [
      { id: "c1", code: "Eng.004", name: "Compulsory English", credit: 4, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "c2", code: "Nep.002", name: "Compulsory Nepali", credit: 3, theoryMax: 75, practicalMax: 25, isCompulsory: true },
      { id: "c3", code: "Sub.3", name: "Core Subject 3", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "c4", code: "Sub.4", name: "Elective Subject 1", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "c5", code: "Sub.5", name: "Elective Subject 2", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false },
      { id: "c6", code: "Sub.6", name: "Elective Subject 3", credit: 5, theoryMax: 75, practicalMax: 25, isCompulsory: false }
    ],
    optional7th: null
  }
};

// Global App State
let currentStreamKey = "science";
let currentInputMode = "marks"; // 'marks' or 'grades'
let currentSubjects = [];
let has7thSubject = false;
let performanceChart = null;

// Official NEB Grade Point Mapping Table
const GRADE_TABLE = [
  { minPct: 90, grade: "A+", gp: 4.0, remark: "Outstanding", color: "emerald" },
  { minPct: 80, grade: "A", gp: 3.6, remark: "Excellent", color: "blue" },
  { minPct: 70, grade: "B+", gp: 3.2, remark: "Very Good", color: "indigo" },
  { minPct: 60, grade: "B", gp: 2.8, remark: "Good", color: "cyan" },
  { minPct: 50, grade: "C+", gp: 2.4, remark: "Satisfactory", color: "yellow" },
  { minPct: 40, grade: "C", gp: 2.0, remark: "Acceptable", color: "amber" },
  { minPct: 35, grade: "D", gp: 1.6, remark: "Basic", color: "orange" },
  { minPct: 0,  grade: "NG", gp: 0.0, remark: "Not Graded", color: "rose" }
];

/**
 * Returns letter grade, grade point, and remark based on percentage
 * Enforces the strict 35% passing mark rule.
 */
function getGradeFromPercentage(percentage) {
  if (percentage === null || isNaN(percentage)) {
    return { grade: "-", gp: 0, remark: "-", color: "slate" };
  }
  if (percentage < 35) {
    return { grade: "NG", gp: 0.0, remark: "Not Graded", color: "rose" };
  }
  for (const row of GRADE_TABLE) {
    if (percentage >= row.minPct) {
      return row;
    }
  }
  return { grade: "NG", gp: 0.0, remark: "Not Graded", color: "rose" };
}

/**
 * Maps letter grade string to grade point
 */
function getGradePointFromLetter(gradeStr) {
  const match = GRADE_TABLE.find(r => r.grade === gradeStr);
  return match ? match.gp : 0.0;
}

/**
 * Maps final cumulative GPA to overall letter grade and remark
 */
function getOverallGradeFromGPA(gpa) {
  if (gpa >= 3.61) return { grade: "A+", remark: "Outstanding" };
  if (gpa >= 3.21) return { grade: "A", remark: "Excellent" };
  if (gpa >= 2.81) return { grade: "B+", remark: "Very Good" };
  if (gpa >= 2.41) return { grade: "B", remark: "Good" };
  if (gpa >= 2.01) return { grade: "C+", remark: "Satisfactory" };
  if (gpa >= 1.61) return { grade: "C", remark: "Acceptable" };
  if (gpa >= 0.01) return { grade: "D", remark: "Basic" };
  return { grade: "NG", remark: "Not Graded" };
}

// Initialize Application
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  loadStream("science");
  setupEventListeners();
  setupFAQ();
  setupTargetSlider();
  calculateAll();
});

/**
 * Setup Event Listeners
 */
function setupEventListeners() {
  // Stream tab switcher
  document.querySelectorAll(".stream-tab").forEach(tab => {
    tab.addEventListener("click", (e) => {
      const stream = e.currentTarget.dataset.stream;
      if (stream !== currentStreamKey) {
        document.querySelectorAll(".stream-tab").forEach(t => {
          t.classList.remove("active-stream");
          t.setAttribute("aria-selected", "false");
        });
        e.currentTarget.classList.add("active-stream");
        e.currentTarget.setAttribute("aria-selected", "true");
        loadStream(stream);
      }
    });
  });

  // Mode buttons (Marks vs Grades)
  const btnMarks = document.getElementById("mode-marks");
  const btnGrades = document.getElementById("mode-grades");

  btnMarks.addEventListener("click", () => {
    if (currentInputMode !== "marks") {
      currentInputMode = "marks";
      btnMarks.className = "px-3 py-1.5 rounded-md text-xs font-bold bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-sm transition-all cursor-pointer flex items-center gap-1.5";
      btnGrades.className = "px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer flex items-center gap-1.5";
      renderSubjectCards();
      calculateAll();
    }
  });

  btnGrades.addEventListener("click", () => {
    if (currentInputMode !== "grades") {
      currentInputMode = "grades";
      btnGrades.className = "px-3 py-1.5 rounded-md text-xs font-bold bg-white dark:bg-slate-700 text-blue-700 dark:text-blue-300 shadow-sm transition-all cursor-pointer flex items-center gap-1.5";
      btnMarks.className = "px-3 py-1.5 rounded-md text-xs font-medium text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer flex items-center gap-1.5";
      renderSubjectCards();
      calculateAll();
    }
  });

  // Toggle 7th Subject button
  const btnToggle7th = document.getElementById("btn-toggle-7th-subject");
  if (btnToggle7th) {
    btnToggle7th.addEventListener("click", () => {
      const streamData = STREAM_PRESETS[currentStreamKey];
      if (!has7thSubject && streamData.optional7th) {
        currentSubjects.push({ ...streamData.optional7th });
        has7thSubject = true;
        btnToggle7th.innerText = "✕ Remove 7th Subject";
        btnToggle7th.classList.replace("text-blue-600", "text-rose-600");
      } else {
        currentSubjects = currentSubjects.filter(s => s.id !== "s7" && s.id !== "m7" && s.id !== "h7" && s.id !== "l7" && s.id !== "e7");
        has7thSubject = false;
        btnToggle7th.innerText = "+ Add Optional 7th Subject";
        btnToggle7th.classList.replace("text-rose-600", "text-blue-600");
      }
      renderSubjectCards();
      calculateAll();
    });
  }

  // Add Custom Subject Button (For Custom Stream)
  const btnAddCustom = document.getElementById("btn-add-subject");
  const customModal = document.getElementById("custom-subject-modal");
  const closeCustomModal = document.getElementById("close-custom-modal");
  const btnCancelCustom = document.getElementById("btn-cancel-add-custom");
  const btnConfirmCustom = document.getElementById("btn-confirm-add-custom");

  if (btnAddCustom) {
    btnAddCustom.addEventListener("click", () => {
      customModal.classList.remove("hidden");
      document.getElementById("custom-sub-name").value = "";
      document.getElementById("custom-sub-name").focus();
    });
  }

  [closeCustomModal, btnCancelCustom].forEach(btn => {
    if (btn) btn.addEventListener("click", () => customModal.classList.add("hidden"));
  });

  if (btnConfirmCustom) {
    btnConfirmCustom.addEventListener("click", () => {
      const name = document.getElementById("custom-sub-name").value.trim() || `Subject ${currentSubjects.length + 1}`;
      const ch = parseFloat(document.getElementById("custom-sub-ch").value) || 5;
      const scheme = document.getElementById("custom-sub-scheme").value;
      
      let theoryMax = 75, practicalMax = 25;
      if (scheme === "50-50") {
        theoryMax = 50; practicalMax = 50;
      } else if (scheme === "100-0") {
        theoryMax = 100; practicalMax = 0;
      }

      const newId = `custom_${Date.now()}`;
      currentSubjects.push({
        id: newId,
        code: `Sub.${currentSubjects.length + 1}`,
        name: name,
        credit: ch,
        theoryMax: theoryMax,
        practicalMax: practicalMax,
        isCompulsory: false
      });

      customModal.classList.add("hidden");
      renderSubjectCards();
      calculateAll();
    });
  }

  // Reset All
  document.getElementById("btn-reset-all").addEventListener("click", () => {
    if (confirm("Reset all marks and inputs to blank?")) {
      currentSubjects.forEach(s => {
        delete s.theoryMarks;
        delete s.practicalMarks;
        delete s.selectedGrade;
      });
      renderSubjectCards();
      calculateAll();
    }
  });

  // Sample Presets Dropdown
  const presetBtn = document.getElementById("preset-btn");
  const presetMenu = document.getElementById("preset-menu");
  presetBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    presetMenu.classList.toggle("hidden");
  });
  document.addEventListener("click", () => presetMenu.classList.add("hidden"));

  document.querySelectorAll(".preset-option").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const presetType = e.currentTarget.dataset.preset;
      applyPreset(presetType);
      presetMenu.classList.add("hidden");
    });
  });

  // Print Transcript Modal & Action
  const printModal = document.getElementById("print-modal");
  const btnPrintTop = document.getElementById("btn-print-top");
  const btnPrintCard = document.getElementById("btn-print-transcript");
  const closePrintModal = document.getElementById("close-print-modal");
  const cancelPrintModal = document.getElementById("modal-cancel-print");
  const confirmPrintModal = document.getElementById("modal-confirm-print");

  const openPrintModal = () => {
    printModal.classList.remove("hidden");
    document.getElementById("modal-student-name").focus();
  };

  if (btnPrintTop) btnPrintTop.addEventListener("click", openPrintModal);
  if (btnPrintCard) btnPrintCard.addEventListener("click", openPrintModal);
  [closePrintModal, cancelPrintModal].forEach(b => {
    if (b) b.addEventListener("click", () => printModal.classList.add("hidden"));
  });

  if (confirmPrintModal) {
    confirmPrintModal.addEventListener("click", () => {
      const studentName = document.getElementById("modal-student-name").value.trim() || "Not Specified";
      const symbolNo = document.getElementById("modal-symbol-no").value.trim() || "N/A";
      const schoolName = document.getElementById("modal-school-name").value.trim() || "Class 12 Institution, Nepal";

      document.getElementById("print-student-name").textContent = studentName;
      document.getElementById("print-symbol-no").textContent = symbolNo;
      document.getElementById("print-school-name").textContent = schoolName;
      document.getElementById("print-stream-name").textContent = STREAM_PRESETS[currentStreamKey].name;

      printModal.classList.add("hidden");
      populatePrintTable();
      setTimeout(() => {
        window.print();
      }, 200);
    });
  }

  // Copy Summary
  document.getElementById("btn-copy-summary").addEventListener("click", copySummaryToClipboard);
  document.getElementById("btn-share-result").addEventListener("click", shareResult);

  // Performance Chart Toggle
  const toggleChartBtn = document.getElementById("toggle-chart-btn");
  const chartContainer = document.getElementById("chart-container");
  const chartCaret = document.getElementById("chart-caret");

  toggleChartBtn.addEventListener("click", () => {
    const isHidden = chartContainer.classList.contains("hidden");
    if (isHidden) {
      chartContainer.classList.remove("hidden");
      chartCaret.classList.add("rotate-180");
      updatePerformanceChart();
    } else {
      chartContainer.classList.add("hidden");
      chartCaret.classList.remove("rotate-180");
    }
  });

  // Grading Criteria Button Scroll
  document.getElementById("btn-quick-guide").addEventListener("click", () => {
    window.scrollTo({
      top: document.querySelector("section.mt-8").offsetTop - 70,
      behavior: "smooth"
    });
  });
}

/**
 * Load Stream Configuration
 */
function loadStream(streamKey) {
  currentStreamKey = streamKey;
  const config = STREAM_PRESETS[streamKey];
  has7thSubject = false;

  // Deep clone subjects to avoid modifying preset defaults
  currentSubjects = JSON.parse(JSON.stringify(config.subjects));

  // Update stream description banner
  document.getElementById("stream-desc-text").textContent = config.description;

  // Custom add button container toggle
  const customContainer = document.getElementById("custom-add-btn-container");
  const optionalAddWrapper = document.getElementById("optional-add-wrapper");

  if (streamKey === "custom") {
    customContainer.classList.remove("hidden");
    optionalAddWrapper.classList.add("hidden");
  } else {
    customContainer.classList.add("hidden");
    optionalAddWrapper.classList.remove("hidden");
    const btnToggle7th = document.getElementById("btn-toggle-7th-subject");
    if (btnToggle7th) {
      btnToggle7th.innerText = "+ Add Optional 7th Subject";
      btnToggle7th.className = "px-3 py-1.5 rounded-lg bg-white dark:bg-slate-800 hover:bg-blue-50 dark:hover:bg-slate-700 text-blue-600 dark:text-blue-400 font-bold border border-slate-200 dark:border-slate-700 shadow-sm transition-all cursor-pointer";
    }
  }

  // Preload default demo marks for first impression
  applyPreset("topper", false);
  renderSubjectCards();
  calculateAll();
}

/**
 * Render All Subject Cards
 */
function renderSubjectCards() {
  const container = document.getElementById("subjects-container");
  container.innerHTML = "";

  currentSubjects.forEach((subject, index) => {
    const card = document.createElement("div");
    card.className = "subject-card bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800 transition-all";
    card.id = `subject-card-${subject.id}`;

    // Subject Header
    const isCustom = currentStreamKey === "custom";
    const headerHtml = `
      <div class="flex items-start justify-between gap-3 mb-3 border-b border-slate-100 dark:border-slate-800/80 pb-2">
        <div>
          <div class="flex items-center gap-2 flex-wrap">
            <span class="font-heading font-bold text-sm text-slate-900 dark:text-white">
              ${subject.name}
            </span>
            ${subject.code ? `<span class="px-1.5 py-0.5 rounded text-[10px] font-mono font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400">${subject.code}</span>` : ""}
            <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-700 dark:bg-blue-950/60 dark:text-blue-300 border border-blue-200 dark:border-blue-900">
              ${subject.credit} Credit Hours
            </span>
          </div>
          <span class="text-[11px] text-slate-400">
            Full Marks: ${subject.theoryMax} Theory / ${subject.practicalMax} Practical (Total ${subject.theoryMax + subject.practicalMax})
          </span>
        </div>

        <div class="flex items-center gap-2 shrink-0">
          <div id="badge-${subject.id}" class="px-2.5 py-1 rounded-md text-xs font-bold bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-300">
            -
          </div>
          ${isCustom ? `
            <button class="btn-delete-subject text-rose-500 hover:text-rose-700 dark:hover:text-rose-400 p-1 cursor-pointer" data-id="${subject.id}" title="Remove Subject">
              <i class="ph-bold ph-trash text-base" aria-hidden="true"></i>
            </button>
          ` : ""}
        </div>
      </div>
    `;

    // Input Body (Marks Mode vs Grade Mode)
    let bodyHtml = "";

    if (currentInputMode === "marks") {
      const minThPass = (subject.theoryMax * 0.35).toFixed(1);
      const minPrPass = (subject.practicalMax * 0.35).toFixed(1);

      bodyHtml = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <!-- Theory Component -->
          <div>
            <div class="flex items-center justify-between text-xs mb-1">
              <label for="th-${subject.id}" class="font-semibold text-slate-700 dark:text-slate-300">
                Theory Exam (Max: ${subject.theoryMax})
              </label>
              <span class="text-[10px] text-slate-400">Min Pass: <strong>${minThPass}</strong></span>
            </div>
            <div class="relative">
              <input 
                id="th-${subject.id}" 
                type="number" 
                min="0" 
                max="${subject.theoryMax}" 
                step="0.5"
                placeholder="0 - ${subject.theoryMax}" 
                value="${subject.theoryMarks !== undefined ? subject.theoryMarks : ''}"
                class="th-input w-full px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500 transition-all"
                data-id="${subject.id}"
                data-max="${subject.theoryMax}"
              >
              <span id="th-status-${subject.id}" class="absolute right-2.5 top-2 text-[11px] font-bold"></span>
            </div>
          </div>

          <!-- Practical / Internal Component -->
          ${subject.practicalMax > 0 ? `
            <div>
              <div class="flex items-center justify-between text-xs mb-1">
                <label for="pr-${subject.id}" class="font-semibold text-slate-700 dark:text-slate-300">
                  Practical / Internal (Max: ${subject.practicalMax})
                </label>
                <span class="text-[10px] text-slate-400">Min Pass: <strong>${minPrPass}</strong></span>
              </div>
              <div class="relative">
                <input 
                  id="pr-${subject.id}" 
                  type="number" 
                  min="0" 
                  max="${subject.practicalMax}" 
                  step="0.5"
                  placeholder="0 - ${subject.practicalMax}" 
                  value="${subject.practicalMarks !== undefined ? subject.practicalMarks : ''}"
                  class="pr-input w-full px-3 py-2 text-xs font-semibold rounded-lg border border-slate-300 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-800 text-slate-900 dark:text-white focus:bg-white dark:focus:bg-slate-900 focus:ring-2 focus:ring-blue-500 transition-all"
                  data-id="${subject.id}"
                  data-max="${subject.practicalMax}"
                >
                <span id="pr-status-${subject.id}" class="absolute right-2.5 top-2 text-[11px] font-bold"></span>
              </div>
            </div>
          ` : `
            <div class="flex items-center text-xs text-slate-400 italic pt-6">
              100% Theory Subject (No practical component)
            </div>
          `}
        </div>

        <!-- Subject Bottom Quick Summary -->
        <div class="mt-2.5 pt-2 border-t border-slate-100 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
          <div id="sub-details-${subject.id}">
            Enter marks to view theory & practical grade breakdown
          </div>
          <div id="sub-qp-${subject.id}" class="font-bold text-slate-700 dark:text-slate-300">
            QP: 0.00
          </div>
        </div>
      `;
    } else {
      // Letter Grades Only Mode
      const grades = ["A+", "A", "B+", "B", "C+", "C", "D", "NG"];
      const currentSelected = subject.selectedGrade || "A";

      bodyHtml = `
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 items-center">
          <div>
            <label for="sel-grade-${subject.id}" class="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Select Final Letter Grade:
            </label>
            <select id="sel-grade-${subject.id}" class="grade-select w-full px-3 py-2 text-xs font-bold rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-900 dark:text-white focus:ring-2 focus:ring-blue-500" data-id="${subject.id}">
              ${grades.map(g => `<option value="${g}" ${g === currentSelected ? 'selected' : ''}>${g} (${getGradePointFromLetter(g)} GP)</option>`).join("")}
            </select>
          </div>
          <div class="text-xs text-slate-500 dark:text-slate-400 pt-3">
            <span id="grade-mode-desc-${subject.id}">Credit Hours: ${subject.credit} • Quality Points: ${(subject.credit * getGradePointFromLetter(currentSelected)).toFixed(2)}</span>
          </div>
        </div>
      `;
    }

    card.innerHTML = headerHtml + bodyHtml;
    container.appendChild(card);
  });

  // Attach card event listeners
  if (currentInputMode === "marks") {
    container.querySelectorAll(".th-input").forEach(input => {
      input.addEventListener("input", onMarksInput);
    });
    container.querySelectorAll(".pr-input").forEach(input => {
      input.addEventListener("input", onMarksInput);
    });
  } else {
    container.querySelectorAll(".grade-select").forEach(select => {
      select.addEventListener("change", onGradeSelect);
    });
  }

  // Delete subject buttons for custom stream
  container.querySelectorAll(".btn-delete-subject").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = e.currentTarget.dataset.id;
      currentSubjects = currentSubjects.filter(s => s.id !== id);
      renderSubjectCards();
      calculateAll();
    });
  });
}

/**
 * Handle Marks Input Changes
 */
function onMarksInput(e) {
  const subjectId = e.target.dataset.id;
  const subject = currentSubjects.find(s => s.id === subjectId);
  if (!subject) return;

  const thEl = document.getElementById(`th-${subjectId}`);
  const prEl = document.getElementById(`pr-${subjectId}`);

  let thVal = thEl && thEl.value !== "" ? parseFloat(thEl.value) : undefined;
  let prVal = prEl && prEl.value !== "" ? parseFloat(prEl.value) : undefined;

  // Max clamp validation
  if (thVal !== undefined && thVal > subject.theoryMax) {
    thVal = subject.theoryMax;
    thEl.value = thVal;
  }
  if (thVal !== undefined && thVal < 0) {
    thVal = 0;
    thEl.value = 0;
  }

  if (prVal !== undefined && prVal > subject.practicalMax) {
    prVal = subject.practicalMax;
    prEl.value = prVal;
  }
  if (prVal !== undefined && prVal < 0) {
    prVal = 0;
    prEl.value = 0;
  }

  subject.theoryMarks = thVal;
  subject.practicalMarks = prVal;

  calculateAll();
}

/**
 * Handle Direct Grade Select Changes
 */
function onGradeSelect(e) {
  const subjectId = e.target.dataset.id;
  const grade = e.target.value;
  const subject = currentSubjects.find(s => s.id === subjectId);
  if (!subject) return;

  subject.selectedGrade = grade;
  calculateAll();
}

/**
 * Core NEB GPA Calculation Engine
 */
function calculateAll() {
  let totalQualityPoints = 0;
  let totalCredits = 0;
  let totalMarksObtained = 0;
  let totalFullMarks = 0;
  let hasNG = false;
  let ngCount = 0;
  const chartLabels = [];
  const chartGps = [];

  currentSubjects.forEach(subject => {
    const card = document.getElementById(`subject-card-${subject.id}`);
    const badge = document.getElementById(`badge-${subject.id}`);
    const subDetails = document.getElementById(`sub-details-${subject.id}`);
    const subQp = document.getElementById(`sub-qp-${subject.id}`);
    const thStatus = document.getElementById(`th-status-${subject.id}`);
    const prStatus = document.getElementById(`pr-status-${subject.id}`);

    let subjectGrade = "NG";
    let subjectGp = 0.0;
    let isSubNg = false;
    let thGradeObj = { grade: "-", gp: 0 };
    let prGradeObj = { grade: "-", gp: 0 };

    if (currentInputMode === "marks") {
      const thMarks = subject.theoryMarks !== undefined ? subject.theoryMarks : 0;
      const prMarks = subject.practicalMarks !== undefined ? subject.practicalMarks : (subject.practicalMax === 0 ? 0 : 0);

      const thMax = subject.theoryMax;
      const prMax = subject.practicalMax;

      const thPct = thMax > 0 ? (thMarks / thMax) * 100 : 100;
      const prPct = prMax > 0 ? (prMarks / prMax) * 100 : 100;

      thGradeObj = getGradeFromPercentage(thPct);
      prGradeObj = prMax > 0 ? getGradeFromPercentage(prPct) : { grade: "-", gp: 0 };

      // Theory inline indicator
      if (thStatus) {
        if (thGradeObj.grade === "NG") {
          thStatus.textContent = "NG";
          thStatus.className = "absolute right-2.5 top-2 text-[11px] font-bold text-rose-500";
        } else {
          thStatus.textContent = thGradeObj.grade;
          thStatus.className = "absolute right-2.5 top-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400";
        }
      }

      // Practical inline indicator
      if (prStatus && prMax > 0) {
        if (prGradeObj.grade === "NG") {
          prStatus.textContent = "NG";
          prStatus.className = "absolute right-2.5 top-2 text-[11px] font-bold text-rose-500";
        } else {
          prStatus.textContent = prGradeObj.grade;
          prStatus.className = "absolute right-2.5 top-2 text-[11px] font-bold text-emerald-600 dark:text-emerald-400";
        }
      }

      // 35% Passing Rule: If either theory or practical is NG, subject is NG!
      if (thGradeObj.grade === "NG" || (prMax > 0 && prGradeObj.grade === "NG")) {
        isSubNg = true;
        hasNG = true;
        ngCount++;
        subjectGrade = "NG";
        subjectGp = 0.0;
      } else {
        // Both components passed: calculate weighted subject grade point
        const thWeight = thMax / (thMax + prMax);
        const prWeight = prMax / (thMax + prMax);
        subjectGp = (thGradeObj.gp * thWeight) + (prGradeObj.gp * prWeight);

        // Subject combined percentage
        const combinedPct = ((thMarks + prMarks) / (thMax + prMax)) * 100;
        subjectGrade = getGradeFromPercentage(combinedPct).grade;
      }

      totalMarksObtained += (thMarks + prMarks);
      totalFullMarks += (thMax + prMax);

      // Card bottom summary
      if (subDetails) {
        if (isSubNg) {
          subDetails.innerHTML = `<span class="text-rose-600 dark:text-rose-400 font-bold">Failed 35% pass rule: ${thGradeObj.grade === 'NG' ? 'Theory NG ' : ''}${prGradeObj.grade === 'NG' ? 'Practical NG' : ''}</span>`;
        } else {
          subDetails.innerHTML = `Theory: <strong>${thGradeObj.grade}</strong> (${thMarks}/${thMax}) • Practical: <strong>${prGradeObj.grade}</strong> (${prMarks}/${prMax})`;
        }
      }

    } else {
      // Grades Only Mode
      subjectGrade = subject.selectedGrade || "A";
      subjectGp = getGradePointFromLetter(subjectGrade);
      if (subjectGrade === "NG") {
        isSubNg = true;
        hasNG = true;
        ngCount++;
      }
      const descEl = document.getElementById(`grade-mode-desc-${subject.id}`);
      if (descEl) {
        descEl.textContent = `Credit Hours: ${subject.credit} • Quality Points: ${(subject.credit * subjectGp).toFixed(2)}`;
      }
    }

    const qp = subject.credit * subjectGp;
    totalQualityPoints += qp;
    totalCredits += subject.credit;

    // Attach to subject object for print rendering
    subject.finalGrade = subjectGrade;
    subject.finalGp = subjectGp;
    subject.thGrade = thGradeObj.grade;
    subject.prGrade = prGradeObj.grade;
    subject.qualityPoints = qp;

    // Update Subject Badge & Border
    if (badge) {
      badge.textContent = `${subjectGrade} (${subjectGp.toFixed(2)})`;
      if (isSubNg) {
        badge.className = "px-2.5 py-1 rounded-md text-xs font-bold bg-rose-100 text-rose-800 dark:bg-rose-950 dark:text-rose-300";
        if (card) card.classList.add("has-ng-border");
      } else {
        badge.className = "px-2.5 py-1 rounded-md text-xs font-bold bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300";
        if (card) card.classList.remove("has-ng-border");
      }
    }

    if (subQp) {
      subQp.textContent = `QP: ${qp.toFixed(2)}`;
    }

    chartLabels.push(subject.name.split(" ")[0]);
    chartGps.push(parseFloat(subjectGp.toFixed(2)));
  });

  // Calculate Cumulative GPA
  const finalGPA = totalCredits > 0 ? (totalQualityPoints / totalCredits) : 0;
  const overallGradeInfo = getOverallGradeFromGPA(finalGPA);

  // Update UI Elements
  const gpaDisplay = document.getElementById("final-gpa-display");
  const gradeBadge = document.getElementById("final-grade-badge");
  const remarkText = document.getElementById("final-remark-text");
  const statusPill = document.getElementById("result-status-pill");
  const ngAlertBox = document.getElementById("ng-alert-box");
  const ngAlertDesc = document.getElementById("ng-alert-desc");

  gpaDisplay.textContent = finalGPA.toFixed(2);

  if (hasNG) {
    statusPill.className = "px-2.5 py-1 text-xs font-bold rounded-full bg-rose-100 text-rose-800 dark:bg-rose-950/80 dark:text-rose-300 border border-rose-300 dark:border-rose-800 flex items-center gap-1";
    statusPill.innerHTML = `<i class="ph-bold ph-warning-circle text-xs" aria-hidden="true"></i> NON-GRADED (NG)`;

    gradeBadge.textContent = "NG";
    gradeBadge.className = "px-3 py-1 rounded-lg text-sm font-extrabold bg-rose-600 text-white shadow-sm";
    remarkText.textContent = "Non-Graded";

    ngAlertBox.classList.remove("hidden");
    if (ngCount <= 2) {
      ngAlertDesc.innerHTML = `You received <strong>NG in ${ngCount} subject(s)</strong>. Under NEB rules, you are <strong>eligible for the immediate supplementary (chance) examination</strong>!`;
    } else {
      ngAlertDesc.innerHTML = `You received <strong>NG in ${ngCount} subjects</strong>. As per NEB directive, you must appear in the regular examination next year.`;
    }
  } else {
    statusPill.className = "px-2.5 py-1 text-xs font-bold rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border border-emerald-300 dark:border-emerald-800 flex items-center gap-1";
    statusPill.innerHTML = `<i class="ph-bold ph-check text-xs" aria-hidden="true"></i> PASSED`;

    gradeBadge.textContent = overallGradeInfo.grade;
    gradeBadge.className = "px-3 py-1 rounded-lg text-sm font-extrabold bg-blue-600 text-white shadow-sm";
    remarkText.textContent = overallGradeInfo.remark;

    ngAlertBox.classList.add("hidden");

    // Trigger celebration confetti for high achievers (>= 3.60)
    if (finalGPA >= 3.60 && !hasNG) {
      triggerConfetti();
    }
  }

  // Key Metrics
  const approxPct = (finalGPA * 25).toFixed(2);
  document.getElementById("approx-pct-display").textContent = `${approxPct}%`;

  if (currentInputMode === "marks") {
    const marksPct = totalFullMarks > 0 ? ((totalMarksObtained / totalFullMarks) * 100).toFixed(1) : 0;
    document.getElementById("total-marks-display").textContent = `${totalMarksObtained} / ${totalFullMarks}`;
    document.getElementById("marks-pct-display").textContent = `(${marksPct}% scored)`;
  } else {
    document.getElementById("total-marks-display").textContent = "N/A (Grade Mode)";
    document.getElementById("marks-pct-display").textContent = "Select Detailed Marks mode";
  }

  document.getElementById("total-credits-display").textContent = `${totalCredits.toFixed(1)} CH`;
  document.getElementById("total-qp-display").textContent = totalQualityPoints.toFixed(2);

  // Update chart data
  updateChartData(chartLabels, chartGps);
}

/**
 * Update Chart.js Performance Chart
 */
function updateChartData(labels, data) {
  if (!performanceChart) return;
  performanceChart.data.labels = labels;
  performanceChart.data.datasets[0].data = data;
  performanceChart.update();
}

function updatePerformanceChart() {
  const ctx = document.getElementById("performanceChart");
  if (!ctx) return;

  if (performanceChart) {
    performanceChart.destroy();
  }

  const isDark = document.documentElement.classList.contains("dark");
  const textColor = isDark ? "#94a3b8" : "#475569";
  const gridColor = isDark ? "#334155" : "#e2e8f0";

  const labels = currentSubjects.map(s => s.name.split(" ")[0]);
  const data = currentSubjects.map(s => s.finalGp || 0);

  performanceChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: labels,
      datasets: [{
        label: "Grade Point (GP)",
        data: data,
        backgroundColor: "rgba(37, 99, 235, 0.75)",
        borderColor: "rgba(37, 99, 235, 1)",
        borderWidth: 1.5,
        borderRadius: 6
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          min: 0,
          max: 4.0,
          ticks: { color: textColor, stepSize: 1.0 },
          grid: { color: gridColor }
        },
        x: {
          ticks: { color: textColor, font: { size: 10 } },
          grid: { display: false }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: (ctx) => `Grade Point: ${ctx.raw} / 4.0`
          }
        }
      }
    }
  });
}

/**
 * Apply Demo Presets (Topper, Average, Borderline, NG Demo)
 */
function applyPreset(presetType, recalculate = true) {
  currentSubjects.forEach((subject) => {
    let thMarks = 0;
    let prMarks = 0;

    if (presetType === "topper") {
      thMarks = Math.round(subject.theoryMax * 0.88);
      prMarks = Math.round(subject.practicalMax * 0.96);
      subject.selectedGrade = "A+";
    } else if (presetType === "average") {
      thMarks = Math.round(subject.theoryMax * 0.68);
      prMarks = Math.round(subject.practicalMax * 0.88);
      subject.selectedGrade = "B+";
    } else if (presetType === "borderline") {
      thMarks = Math.round(subject.theoryMax * 0.38);
      prMarks = Math.round(subject.practicalMax * 0.50);
      subject.selectedGrade = "D";
    } else if (presetType === "ng-demo") {
      // Purposefully fail one subject in theory (< 35%)
      if (subject.id === "s3" || subject.id === "m4" || subject.id === "h4" || subject.id === currentSubjects[2].id) {
        thMarks = Math.round(subject.theoryMax * 0.22); // NG!
        prMarks = Math.round(subject.practicalMax * 0.85);
        subject.selectedGrade = "NG";
      } else {
        thMarks = Math.round(subject.theoryMax * 0.75);
        prMarks = Math.round(subject.practicalMax * 0.90);
        subject.selectedGrade = "A";
      }
    }

    subject.theoryMarks = thMarks;
    subject.practicalMarks = prMarks;
  });

  if (recalculate) {
    renderSubjectCards();
    calculateAll();
  }
}

/**
 * Target GPA Simulator Slider
 */
function setupTargetSlider() {
  const slider = document.getElementById("target-gpa-slider");
  const valueDisplay = document.getElementById("target-gpa-value");
  const explanation = document.getElementById("target-gpa-explanation");

  if (!slider) return;

  slider.addEventListener("input", (e) => {
    const target = parseFloat(e.target.value);
    const gradeObj = getOverallGradeFromGPA(target);
    valueDisplay.textContent = `${target.toFixed(2)} (${gradeObj.grade})`;

    if (target >= 3.8) {
      explanation.textContent = "To achieve an Outstanding 3.80+ GPA, you need 85% - 95% marks in all subjects and must not get lower than an 'A' in any paper.";
    } else if (target >= 3.6) {
      explanation.textContent = "To secure an A+ distinction (3.60+), aim for an average of 80% to 85% across all 6 subjects, with minimum 60/75 in theory.";
    } else if (target >= 3.2) {
      explanation.textContent = "For an 'A' grade (3.20+), target between 70% and 80% marks (approx. 52/75 theory and 22/25 practical).";
    } else if (target >= 2.8) {
      explanation.textContent = "For a 'B+' First Division (2.80+), you need 60% to 70% marks across theory and practicals.";
    } else {
      explanation.textContent = "To comfortably clear the exams, secure at least 30/75 in theory and 15/25 in practicals for each subject.";
    }
  });
}

/**
 * Populate Printable Grade Sheet Table
 */
function populatePrintTable() {
  const tbody = document.getElementById("print-table-body");
  tbody.innerHTML = "";

  let totalCh = 0;
  let totalQp = 0;
  let hasNG = false;

  currentSubjects.forEach((sub, i) => {
    const tr = document.createElement("tr");
    const isNg = sub.finalGrade === "NG";
    if (isNg) hasNG = true;

    totalCh += sub.credit;
    totalQp += (sub.qualityPoints || 0);

    tr.innerHTML = `
      <td class="border border-slate-400 p-2 text-center">${i + 1}</td>
      <td class="border border-slate-400 p-2 font-semibold">${sub.name} ${sub.code ? `(${sub.code})` : ''}</td>
      <td class="border border-slate-400 p-2 text-center">${sub.credit.toFixed(1)}</td>
      <td class="border border-slate-400 p-2 text-center">${sub.thGrade || '-'}</td>
      <td class="border border-slate-400 p-2 text-center">${sub.practicalMax > 0 ? (sub.prGrade || '-') : 'N/A'}</td>
      <td class="border border-slate-400 p-2 text-center font-bold ${isNg ? 'text-red-600' : ''}">${sub.finalGrade}</td>
      <td class="border border-slate-400 p-2 text-center">${sub.finalGp ? sub.finalGp.toFixed(2) : '0.00'}</td>
      <td class="border border-slate-400 p-2 text-center">${sub.qualityPoints ? sub.qualityPoints.toFixed(2) : '0.00'}</td>
    `;
    tbody.appendChild(tr);
  });

  document.getElementById("print-total-ch").textContent = totalCh.toFixed(1);
  document.getElementById("print-total-qp").textContent = totalQp.toFixed(2);

  const finalGPA = totalCh > 0 ? (totalQp / totalCh).toFixed(2) : "0.00";
  document.getElementById("print-final-gpa").textContent = finalGPA;

  if (hasNG) {
    document.getElementById("print-final-grade").textContent = "NG (Not Graded)";
    document.getElementById("print-final-status").textContent = "NON-GRADED (RETAKE REQUIRED)";
    document.getElementById("print-final-status").className = "font-extrabold text-2xl text-red-600 mt-1";
  } else {
    const gradeObj = getOverallGradeFromGPA(parseFloat(finalGPA));
    document.getElementById("print-final-grade").textContent = `${gradeObj.grade} (${gradeObj.remark})`;
    document.getElementById("print-final-status").textContent = "PASSED";
    document.getElementById("print-final-status").className = "font-extrabold text-2xl text-emerald-700 mt-1";
  }
}

/**
 * Copy Summary to Clipboard
 */
function copySummaryToClipboard() {
  const gpa = document.getElementById("final-gpa-display").textContent.trim();
  const grade = document.getElementById("final-grade-badge").textContent.trim();
  const status = document.getElementById("result-status-pill").innerText.trim();
  const stream = STREAM_PRESETS[currentStreamKey].name;

  let summary = `📋 NEB Class 12 Result Summary (${stream} Stream)\n`;
  summary += `----------------------------------------\n`;
  summary += `• Grade Point Average (GPA): ${gpa} / 4.0\n`;
  summary += `• Letter Grade: ${grade}\n`;
  summary += `• Result Status: ${status}\n`;
  summary += `• Total Credit Hours: ${document.getElementById("total-credits-display").textContent.trim()}\n`;
  summary += `• Approx. Percentage: ${document.getElementById("approx-pct-display").textContent.trim()}\n\n`;
  summary += `Subject Breakdown:\n`;

  currentSubjects.forEach(s => {
    summary += `- ${s.name}: ${s.finalGrade || '-'} (${(s.finalGp || 0).toFixed(2)} GP, ${s.credit} CH)\n`;
  });

  summary += `\nCalculated using NEB Class 12 GPA Calculator.`;

  navigator.clipboard.writeText(summary).then(() => {
    const btnText = document.getElementById("copy-btn-text");
    btnText.textContent = "Copied! ✓";
    setTimeout(() => {
      btnText.textContent = "Copy Summary";
    }, 2000);
  }).catch(() => {
    alert("Copied to clipboard!");
  });
}

/**
 * Share Result
 */
function shareResult() {
  const gpa = document.getElementById("final-gpa-display").textContent.trim();
  const title = `My NEB Class 12 GPA: ${gpa}`;
  const text = `I calculated my Class 12 NEB GPA (${STREAM_PRESETS[currentStreamKey].name} Stream): ${gpa} GPA! Check yours now.`;

  if (navigator.share) {
    navigator.share({
      title: title,
      text: text,
      url: window.location.href
    }).catch(() => {});
  } else {
    copySummaryToClipboard();
    alert("Result copied to clipboard! You can paste and share it anywhere.");
  }
}

/**
 * Confetti Celebration for high scores
 */
let lastConfettiTime = 0;
function triggerConfetti() {
  const now = Date.now();
  if (now - lastConfettiTime < 5000) return; // Debounce 5s
  lastConfettiTime = now;

  if (typeof confetti === "function") {
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

/**
 * FAQ Accordion Toggle
 */
function setupFAQ() {
  document.querySelectorAll(".faq-btn").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const content = e.currentTarget.nextElementSibling;
      const icon = e.currentTarget.querySelector(".faq-icon");
      const isHidden = content.classList.contains("hidden");

      if (isHidden) {
        content.classList.remove("hidden");
        icon.classList.replace("ph-plus", "ph-minus");
      } else {
        content.classList.add("hidden");
        icon.classList.replace("ph-minus", "ph-plus");
      }
    });
  });
}

/**
 * Dark / Light Theme Handler
 */
function initTheme() {
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");

  const savedTheme = localStorage.getItem("neb_theme") || 
    (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark");
    themeIcon.classList.replace("ph-moon", "ph-sun");
  } else {
    document.documentElement.classList.remove("dark");
    themeIcon.classList.replace("ph-sun", "ph-moon");
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.documentElement.classList.toggle("dark");
    localStorage.setItem("neb_theme", isDark ? "dark" : "light");

    if (isDark) {
      themeIcon.classList.replace("ph-moon", "ph-sun");
    } else {
      themeIcon.classList.replace("ph-sun", "ph-moon");
    }

    // Refresh chart if open
    if (performanceChart) {
      updatePerformanceChart();
    }
  });
}
