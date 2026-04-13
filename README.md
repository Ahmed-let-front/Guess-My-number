# 🎯 Guess My Number – Ultra Optimized Edition

A high-performance, modern logic-guessing game built with **JavaScript (ES6+)** and **Tailwind CSS v4**. This project is engineered for speed and accessibility, achieving a perfect **400/400 score on Google Lighthouse**.

### 🔗 [Live Demo ✨](https://ahmed-let-front.github.io/Guess-My-number/)

---

## 📸 Performance Preview

![Application Interface & Lighthouse Audit](https://raw.githubusercontent.com/Ahmed-let-front/Guess-My-number/main/image_29b203.png)
*Figure 1: Full system audit showing 100/100 across all categories.*

---

## 🚀 Key Features

* **Modular Architecture:** Full separation of concerns using ES6 Modules (Logic vs. Execution).
* **Event Handling:** Optimized Keyboard support (Enter key) with smart `removeEventListener` logic to freeze inputs after game termination.
* **Modern Styling:** Built with **Tailwind CSS v4** (`@tailwindcss/vite`), utilizing the new `@theme` engine and native backdrop blurs.
* **Internal Asset Management:** Zero external CDN calls! All fonts (Roboto & Press Start 2P) are managed internally via npm for maximum speed.
* **UX Micro-interactions:** Smooth scale transitions, focus states, and advanced disabled button handling.

---

## 🏗️ Modular Implementation (Architecture)

The project follows a **Professional Modular Pattern** to ensure clean and maintainable code:

* **`src/script.js` (The Logic Core):** Serves as the **"Brain"** of the app. It manages secret number generation, score tracking, and UI update functions.
* **`src/main.js` (The Entry Point):** The **orchestrator** file. It **imports** the logic from `script.js` and attaches all event listeners.

> **Why this matters?** This structure prevents "Spaghetti Code" and mimics the modern workflow used in professional environments like React or Vue.

---

## 📦 Internal Dependency Management (The NPM Way)

This project moves away from external CDNs, opting for a professional **npm-managed workflow** to ensure **Internal Requests** only:

* **Bundled Assets:** All dependencies are installed via **npm** and bundled locally using **Vite**. This eliminates external DNS lookups, resulting in lightning-fast load times.
* **Deterministic Environment:** Using `package.json` to manage scripts like `npm run build` and `npm run deploy`, ensuring the project is stable and reproducible.
* **Tree Shaking:** Vite performs deep analysis to prune unused CSS/JS, creating the smallest possible bundle for production.

---

## 📈 Performance & Quality (Lighthouse 400/400)

This project is meticulously optimized to hit the perfect score:

* **Performance (100/100):** Achieved through internal bundling and zero render-blocking requests.
* **Accessibility (100/100):** Full semantic HTML5 structure and high-contrast color palettes.
* **Best Practices (100/100):** Clean ES Module imports and secure coding patterns.
* **SEO (100/100):** Optimized meta descriptions and semantic header hierarchy.

---

## 🛠️ Local Development

To run this project on your machine, follow these steps:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Ahmed-let-front/Guess-My-number.git](https://github.com/Ahmed-let-front/Guess-My-number.git)
    ```

2.  **Install internal dependencies:**
    ```bash
    npm install
    ```

3.  **Start development server:**
    ```bash
    npm run dev
    ```

4.  **Deploy to GitHub Pages:**
    ```bash
    npm run deploy
    ```

---

Developed with ❤️ by [Ahmed Yasser](https://github.com/Ahmed-let-front)
