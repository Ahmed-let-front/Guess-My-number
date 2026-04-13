# 🎯 Guess My Number – Ultra Optimized Edition

A high-performance, modern logic-guessing game built with **JavaScript (ES6+)** and **Tailwind CSS v4**. This project is engineered for speed and accessibility, achieving a perfect **400/400 score on Google Lighthouse**.

### 🔗 [Live Demo ✨](https://ahmed-let-front.github.io/Guess-My-number/)

---

## 📸 Project Showcase

The following screenshots demonstrate the application interface and the technical audit results:

![Application Interface](https://raw.githubusercontent.com/Ahmed-let-front/Guess-My-number/main/public/site.png)
*Figure 1: The modern, responsive UI built with Tailwind v4.*

![Lighthouse Perfect Score](https://raw.githubusercontent.com/Ahmed-let-front/Guess-My-number/main/public/matrix.png)
*Figure 2: Perfect 400/400 audit report (Performance, Accessibility, Best Practices, SEO).*

---

## 🚀 Key Features

* **Modular Architecture:** Full separation of concerns using ES6 Modules (Logic vs. Execution).
* **Event Handling:** Optimized Keyboard support (Enter key) with smart `removeEventListener` logic to freeze inputs after game termination.
* **Modern Styling:** Built with **Tailwind CSS v4** (`@tailwindcss/vite`), utilizing the new `@theme` engine and native backdrop blurs.
* **Internal Asset Management:** Zero external CDN calls! All fonts and assets are managed internally via npm for maximum speed.
* **UX Micro-interactions:** Smooth scale transitions, focus states, and advanced disabled button handling.

---

## 🏗️ Modular Implementation (Architecture)

The project follows a **Professional Modular Pattern** to ensure clean and maintainable code:

* **`src/script.js` (The Logic Core):** Serves as the **"Brain"** of the app. It manages secret number generation, score tracking, and UI update functions.
* **`src/main.js` (The Entry Point):** The **orchestrator** file. It **imports** the logic from `script.js` and attaches all event listeners.

---

## 📦 Internal Dependency Management (The NPM Way)

This project moves away from external CDNs, opting for a professional **npm-managed workflow** to ensure **Internal Requests** only:

* **Bundled Assets:** All dependencies are installed via **npm** and bundled locally using **Vite**. This eliminates external DNS lookups, resulting in lightning-fast load times.
* **Deterministic Environment:** Using `package.json` to manage scripts like `npm run build` and `npm run deploy`.
* **Tree Shaking:** Vite performs deep analysis to prune unused CSS/JS, creating the smallest possible bundle for production.

---

## 📈 Performance & Quality (Lighthouse 400/400)

* **Performance (100/100):** Internal bundling and zero render-blocking requests.
* **Accessibility (100/100):** Semantic HTML5 and high-contrast color palettes.
* **Best Practices (100/100):** Clean ES Module imports and secure coding patterns.
* **SEO (100/100):** Optimized meta descriptions and header hierarchy.

---

## 🛠️ Local Development

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Ahmed-let-front/Guess-My-number.git](https://github.com/Ahmed-let-front/Guess-My-number.git)
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start dev server:**
    ```bash
    npm run dev
    ```

4.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```

---

Developed with ❤️ by [Ahmed Yasser](https://github.com/Ahmed-let-front)
