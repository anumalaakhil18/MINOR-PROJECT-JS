# ⚡ JavaScript Minor Projects Collection

A curated showcase of **8 interactive web applications** built from scratch using **Semantic HTML5**, **Vanilla CSS3 (Modern Styling & Layouts)**, and **Core JavaScript (ES6+)**. This collection features projects ranging from utility tools to interactive games and API integrations, highlighting clean logic, responsive user interfaces, and custom browser storage integration.

---

## 📂 Project Directory & Key Highlights

| Project Name | Key Highlights & Attractive Features | Tech Stack / APIs | Source Files |
| :--- | :--- | :--- | :--- |
| **01. Task List CRUD** | Real-time tasks manipulation (Create, Read, Update, Delete) with interactive buttons. | HTML5, CSS3, JS Array Methods | [HTML](PROJECT-1%20TASK%20LIST%20CRUD/INDEX.HTML) / [CSS](PROJECT-1%20TASK%20LIST%20CRUD/STYLE.CSS) / [JS](PROJECT-1%20TASK%20LIST%20CRUD/SCRIPT.JS) |
| **02. Millisecond Stopwatch** | Microsecond accuracy stopwatch with dynamic lap timing logs. | HTML5, CSS3, DOM `setInterval` | [HTML](PROJECT-2%20STOPWATCH/index.html) / [CSS](PROJECT-2%20STOPWATCH/style.css) / [JS](PROJECT-2%20STOPWATCH/script.js) |
| **03. Custom Password Generator** | Password length slider/input, complexity filters, strength checker, clipboard copying, and a persistent vault. | LocalStorage, Regex, Web Clipboard | [HTML](PROJECT-3%20RANDOM%20PASSWORD%20GENERATOR/index.html) / [CSS](PROJECT-3%20RANDOM%20PASSWORD%20GENERATOR/style.css) / [JS](PROJECT-3%20RANDOM%20PASSWORD%20GENERATOR/script.js) |
| **04. Exact Age Calculator** | Computes age in Years, Months, and Days with future-date validation. | HTML5, CSS3, JS Date Engine | [HTML](PROJECT-4%20AGE%20CALCULATOR/INDEX.HTML) / [CSS](PROJECT-4%20AGE%20CALCULATOR/STYLE.CSS) / [JS](PROJECT-4%20AGE%20CALCULATOR/SCRIPT.JS) |
| **05. Rock, Paper, Scissors Game** | User vs. AI gaming application with real-time score keeping. | HTML5, CSS3, DOM Events | [HTML](PROJECT-5%20ROCK%20,PAPER,%20SCISSORS%20GAME/index.html) / [CSS](PROJECT-5%20ROCK%20,PAPER,%20SCISSORS%20GAME/style.css) / [JS](PROJECT-5%20ROCK%20,PAPER,%20SCISSORS%20GAME/script.js) |
| **06. Random Quote Generator** | Beautiful motivational quote player with quote clipboard sharing and LocalStorage list. | HTML5, CSS3, LocalStorage | [HTML](PROJECT-6%20RANDOM%20QUOTE%20GENERATOR/index.html) / [CSS](PROJECT-6%20RANDOM%20QUOTE%20GENERATOR/style.css) / [JS](PROJECT-6%20RANDOM%20QUOTE%20GENERATOR/script.js) |
| **07. Dynamic Image Search Engine** | Clean responsive grid display search system communicating with external APIs. | Unsplash Rest API, Fetch API, Async/Await | [HTML](PROJECT-7%20IMAGE%20SEARCH%20APP/index.html) / [CSS](PROJECT-7%20IMAGE%20SEARCH%20APP/style.css) / [JS](PROJECT-7%20IMAGE%20SEARCH%20APP/script.js) |
| **08. Timed Quiz Application** | High-utility web exam with question countdowns, absolute timer, grade outputs, and complete answer diagnostics. | HTML5, CSS3, Complex JSON objects | [HTML](PROJECT-8%20QUIZ%20APP/index.html) / [CSS](PROJECT-8%20QUIZ%20APP/style.css) / [JS](PROJECT-8%20QUIZ%20APP/script.js) |

---

## 🚀 Deep Dive Into Projects

### 📝 1. Task List CRUD
* **The Main Attraction:** A robust, zero-database task management application. Unlike standard tasks lists, it supports **in-place updating** where editing a task populates the input field and seamlessly transforms the insertion action button to a confirmation update action.
* **Core Features:**
  - Strict input validation preventing blank tasks.
  - Live data rendering utilizing DOM manipulation.
  - Interactive edit states modifying state lists in place.

---

### ⏱️ 2. Stopwatch
* **The Main Attraction:** High precision timer tracking milliseconds (`1/100th` of a second), seconds, minutes, and hours. It features a **smart lap system** that captures snapshots of time on-the-fly without interrupting the running clock.
* **Core Functions:**
  - Intuitive controls: Start, Pause, Resume, Reset, and Lap.
  - Dynamic lap logging showing clear timing splits.
  - Clean digital display layout.

---

### 🔑 3. Random Password Generator & Vault
* **The Main Attraction:** A security-focused password generation dashboard. Not only does it configure variable lengths (4-50) and characters, but it also parses passwords against an **algorithmic strength checking engine** (evaluating entropy dynamically) and saves custom label tags directly to an **offline local storage vault**.
* **Core Functions:**
  - Customizable switches for uppercase, lowercase, numbers, and symbols.
  - Dynamic password strength meter (Weak, Medium, Strong).
  - Built-in clipboard copying.
  - Searchable local password dashboard with timestamp logs and single-deletion mechanics.

---

### 📅 4. Exact Age Calculator
* **The Main Attraction:** A high-precision age calculator. It accounts for leap years, variable days in months (e.g. 28, 30, 31 day lengths of preceding months), and calculates your exact age in **years, months, and days**.
* **Core Functions:**
  - Interactive Date Picker layout.
  - Future-date prevention validation checks with elegant warning cues.
  - Precise calendar math calculations.

---

### ✊ 5. Rock, Paper, Scissors Game
* **The Main Attraction:** A classic gaming playground featuring dynamic User vs. Artificial Intelligence (AI) logic. It provides **real-time score trackers** for both the user and computer alongside interactive gameplay responses.
* **Core Functions:**
  - Clickable move layout.
  - Quick computer decision-making using random indices.
  - Reset board function to restart the scoreboards.

---

### 💬 6. Random Quote Generator
* **The Main Attraction:** A motivational dashboard with a curation of positive quotes. Users can copy the quotes instantly and compile a **favorites collection list** that persists across tab refreshes using local storage.
* **Core Functions:**
  - Random indexing generator.
  - Single-click quote + author copy to clipboard.
  - Persistent favorite bookmark list with dynamic list removing features.

---

### 🔍 7. Unsplash Image Search App
* **The Main Attraction:** An image portal connected to the live **Unsplash API**. It queries Unsplash databases asynchronously, loads beautiful high-resolution image cards, and integrates an **infinite paginated scroll capability** via a dynamic "Load More" button.
* **Core Functions:**
  - Asynchronous networking with JSON parsing.
  - Responsive image grid gallery layout.
  - External redirects to primary Unsplash publisher links.
  - Visual load indicator and network error indicators.

---

### 🧠 8. Timed Quiz Application
* **The Main Attraction:** An advanced examination console. It hosts multi-choice testing supported by an **overall timer and a per-question clock**. Upon completion, it computes a grade (A+ down to F), displays custom performance feedback, and renders a **comprehensive diagnostics sheet** highlighting time taken per question, chosen vs correct answers, and concise topic explanations.
* **Core Functions:**
  - Multi-timer logic tracks overall test time and individual question times.
  - Animated option selection states.
  - Complex post-test review console detailing full question evaluations.

---

## 🛠️ Getting Started Locally

Since all projects are built using clean, client-side technologies (HTML, CSS, JS), you can run any of these projects without any compilation or external servers.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/anumalaakhil18/MINOR-PROJECT-JS.git
   cd MINOR-PROJECT-JS
   ```
2. **Open in Browser:**
   - Double-click `index.html` within any project directory, or:
   - Use an editor extension like VS Code's **Live Server** to run them on a local hot-reloading host.

## 💻 Tech Stack Highlights
- **HTML5:** Semantic architecture.
- **CSS3:** Flexible Grid & Flexbox containers, responsive typography, modern color palettes.
- **JavaScript:** ES6 features (Arrow functions, Template literals, Destructuring, Async/Await), `fetch` API, DOM events, and LocalStorage APIs.
