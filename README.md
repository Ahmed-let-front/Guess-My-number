# 🎯 Guess My Number – Ultra Optimized Edition

A high-performance, modern logic-guessing game built with **JavaScript (ES6+)** and **Tailwind CSS v4**. This project is engineered for speed and accessibility, achieving a perfect **400/400 score on Google Lighthouse**.

![Lighthouse Score](https://img.shields.io/badge/Lighthouse-400%2F400-brightgreen?style=for-the-badge&logo=googlechrome)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## 🚀 Key Features

- **Modular Architecture:** Full separation of concerns using ES6 Modules.
- **Event Handling:** Optimized Keyboard support (Enter key) with smart `removeEventListener` logic to freeze inputs after game termination.
- **Modern Styling:** Built with **Tailwind CSS v4**, utilizing the new `@theme` engine, CSS variables, and native backdrop blurs.
- **Responsive Design:** Fully fluid UI using `clamp()` and mobile-first utility classes for a perfect experience on all screens.
- **UX Micro-interactions:** Smooth scale transitions, focus states, and advanced disabled button handling using Tailwind's `disabled` variants.

---

## 🏗️ Modular Implementation (Architecture)

The project follows a **Professional Modular Pattern** to ensure clean and maintainable code:

- **`script.js` (The Logic Core):** This file serves as the **"Brain"** of the app. It manages the secret number generation, score tracking, highscore persistence, and UI update functions.
- **`main.js` (The Entry Point):** This is the **orchestrator** file. It **imports** the logic from `script.js` and attaches all event listeners (Click & Keydown).

> **Why this matters?** This structure prevents "Spaghetti Code" and mimics the workflow used in professional environments like React or Vue.

---

## 📦 Internal Dependency Management (The NPM Way)

This project moves away from external CDNs, opting for a professional **npm-managed workflow**:

- **Internal Requests:** All dependencies (Tailwind v4, Fonts, Libraries) are installed via **npm** and bundled locally using **Vite**. This significantly reduces external DNS lookups and HTTP requests, resulting in lightning-fast load times.
- **Deterministic Environment:** Using `package.json` to manage scripts like `npm run build` and `npm run deploy`, ensuring the project is reproducible and stable.
- **Optimized Bundling:** Vite performs **Tree Shaking** to prune unused CSS/JS, creating the smallest possible footprint for production.

---

## 📈 Performance & Quality (Lighthouse 400/400)

This project is meticulously optimized to hit the perfect score:

- **Performance (100/100):** Achieved through internal asset bundling, minimal DOM manipulation, and zero render-blocking external requests.
- **Accessibility (100/100):** Full semantic HTML5 structure, proper ARIA labels for inputs, and high-contrast color palettes.
- **Best Practices (100/100):** Clean ES Module imports, secure coding patterns, and modern JavaScript syntax.
- **SEO (100/100):** Optimized meta descriptions and semantic header hierarchy.

---

## 🛠️ Local Development

To run this project on your machine, follow these steps:

1.  **Clone the repository:**

    ```bash
    git clone [https://github.com/Ahmed-let-front/guess-my-number.git](https://github.com/Ahmed-let-front/guess-my-number.git)
    ```

2.  **Install internal dependencies:**

    ```bash
    npm install
    ```

3.  **Start development server:**

    ```bash
    npm run dev
    ```

4.  **Build for production:**

    ```bash
    npm run build
    ```

5.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```

---

Developed with ❤️ by [Ahmed Yasser](https://github.com/Ahmed-let-front)
