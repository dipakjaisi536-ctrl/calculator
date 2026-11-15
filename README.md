# NEB Class 12 GPA Calculator (Nepal)

An accurate, modern web application designed for students of Nepal's National Examinations Board (NEB) to calculate their **Class 12 Grade Point Average (GPA)** according to the latest **Curriculum Development Centre (CDC) Letter Grading Directive (2078 / 2081)**.

🌐 **Live Demo:** [https://dipakjaisi536-ctrl.github.io/calculator/](https://dipakjaisi536-ctrl.github.io/calculator/)

---

## 🌟 Key Features

1. **Complete Stream Support**:
   - 🔬 **Science Stream**: Compulsory English, Compulsory Nepali, Physics, Chemistry, Mathematics, Biology / Computer Science.
   - 📊 **Management Stream**: Compulsory English, Compulsory Nepali, Social Studies / Business Math, Accountancy, Economics, Business Studies / Hotel Management / Computer Science / Marketing.
   - 📚 **Humanities Stream**: Compulsory English, Compulsory Nepali, Social Studies, Sociology, Mass Communication, Political Science / Major English.
   - ⚖️ **Law Stream**: Compulsory English, Compulsory Nepali, Social Studies, Jurisprudence & Legal Theories, Nepalese Legal System, Constitutional Law.
   - 🎓 **Education Stream**: Compulsory English, Compulsory Nepali, Social Studies, Child Development, Education & Development, Instructional Pedagogy.
   - ⚙️ **Custom / Flexible Stream**: Dynamic builder to add any custom subjects with custom credit hours (e.g. 3, 4, 5 CH) and theory/practical marks breakdown.

2. **Official NEB Letter Grading Directive (2078) Compliance**:
   - **Individual 35% Component Pass Check**: Enforces the mandatory CDC rule where students must score at least **35% in Theory** (e.g., 26.3 / 75 or 17.5 / 50) and **35% in Practical** (8.8 / 25 or 17.5 / 50).
   - **Non-Graded (NG) Detection**: Flags Non-Graded subjects and provides actionable advice on whether the student is eligible for the immediate supplementary (chance) examination (1 or 2 NG subjects).
   - **Weighted Credit-Hour Calculation**: Uses exact CDC credit hours for each subject to compute the accurate cumulative GPA.

3. **Dual Input Modes**:
   - **Detailed Marks Mode**: Input marks for theory (out of 75/50) and practical (out of 25/50) with live validation and pass threshold alerts.
   - **Letter Grades Mode**: Quickly select letter grades (`A+`, `A`, `B+`, `B`, `C+`, `C`, `D`, `NG`) from intuitive dropdowns.

4. **Rich Interactive Tools**:
   - **Target GPA Simulator**: Interactive slider showing what average marks or performance is needed to achieve a target GPA (e.g., 3.65).
   - **Visual Performance Chart**: Visualizes subject-by-subject grade points.
   - **Printable Official Grade Sheet**: One-click printable transcript formatted like the official NEB grade sheet (clean A4 layout, student name, symbol number, and college name).
   - **Dark & Light Mode**: Seamless theme switching with persistent memory.
   - **Sample Presets**: Quick demonstration data for Toppers (3.85 GPA), Average (3.15 GPA), Borderline Pass (2.10 GPA), and Theory NG Demo.

---

## 📐 NEB Class 12 Grading System & Formula

### Grading Scale Table

| Marks Percentage Interval | Letter Grade | Grade Point (GP) | Remarks |
| :--- | :---: | :---: | :--- |
| **90% to 100%** | A+ | 4.0 | Outstanding |
| **80% to <90%** | A | 3.6 | Excellent |
| **70% to <80%** | B+ | 3.2 | Very Good |
| **60% to <70%** | B | 2.8 | Good |
| **50% to <60%** | C+ | 2.4 | Satisfactory |
| **40% to <50%** | C | 2.0 | Acceptable |
| **35% to <40%** | D | 1.6 | Basic |
| **Below 35%** | **NG** | 0.0 | Not Graded (Fail / Retake) |

### Formula

$$\text{Final GPA} = \frac{\sum (\text{Credit Hours} \times \text{Subject Grade Point})}{\text{Total Credit Hours}}$$

$$\text{Approximate Percentage} = \text{GPA} \times 25$$

---

## 🚀 Getting Started

No build tools or servers are required! Simply open `index.html` directly in any web browser.

```bash
# Clone the repository
git clone https://github.com/dipakjaisi536-ctrl/calculator.git

# Navigate to project folder
cd calculator

# Open index.html in your browser
start index.html   # On Windows
open index.html    # On macOS
xdg-open index.html # On Linux
```

---

## 🛠️ Tech Stack

- **HTML5 & Vanilla JavaScript**: Fast, zero runtime overhead, 100% offline capable.
- **Tailwind CSS (CDN)**: Modern responsive design system following Swiss/Minimalist design principles.
- **Phosphor Icons**: Crisp vector icons.
- **Chart.js**: Subject performance visualization.
- **Canvas-Confetti**: High-score celebration effects.

---

## 📄 License

MIT License. Designed with care for students in Nepal.
