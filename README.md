# 🎯 Guess My Number – Ultra Optimized Edition

A high-performance, modern logic-guessing game built with **JavaScript (ES6+)** and **Tailwind CSS v4**. This project is engineered for speed and accessibility, achieving a perfect **400/400 score on Google Lighthouse**.

### 🔗 [Live Demo ✨]([https://ahmed-let-front.github.io/Guess-My-number/](https://ahmed-let-front.github.io/Guess-My-number/))

---

## 📸 Project Showcase

The following screenshots demonstrate the application interface and the technical audit results:

![Application Interface](https://raw.githubusercontent.com/Ahmed-let-front/Guess-My-number/main/public/site.png)
_Figure 1: The modern, responsive UI built with Tailwind v4._

![Lighthouse Perfect Score](https://raw.githubusercontent.com/Ahmed-let-front/Guess-My-number/main/public/matrix.png)
_Figure 2: Perfect 400/400 audit report (Performance, Accessibility, Best Practices, SEO)._

---

## 🎓 Origin & Jonas Schmedtmann Course

This project is a modular and deeply optimized version of the challenge found in the **Jonas Schmedtmann JavaScript Course on Udemy**.

While the fundamental game logic originates from the course, **I have completely re-engineered the project** to transform it from a simple tutorial exercise into a professional-grade application. My enhancements include:

- **Advanced Architecture:** Refactoring code into ES6 modules.
- **Modern Tooling:** Moving from basic HTML/CSS to **Vite** and **Tailwind CSS v4**.
- **Performance:** Optimizing every asset to reach a 100% Lighthouse score.

---

## 🚀 Key Features

- **Modular Architecture:** Full separation of concerns using ES6 Modules (Logic vs. Execution).
- **Event Handling:** Optimized Keyboard support (Enter key) with smart `removeEventListener` logic to freeze inputs after game termination.
- **Modern Styling:** Built with **Tailwind CSS v4** (`@tailwindcss/vite`), utilizing the new `@theme` engine and native backdrop blurs.
- **Internal Asset Management:** Zero external CDN calls! All fonts are managed internally via npm for maximum speed.
- **UX Micro-interactions:** Smooth scale transitions, focus states, and advanced disabled button handling.

---

## 📦 Internal Dependency Management (The NPM Way)

This project moves away from external CDNs, opting for a professional **npm-managed workflow**:

- **Automated Build Workflow:** Utilizing `predeploy` scripts to ensure that `npm run build` is executed automatically before every deployment.
- **Bundled Assets:** All dependencies are installed via **npm** and bundled locally using **Vite** for lightning-fast load times.
- **Tree Shaking:** Vite performs deep analysis to prune unused code, creating the smallest possible bundle.

---

## 📈 Performance & Quality (Lighthouse 400/400)

- **Performance (100/100):** Internal bundling and zero render-blocking requests.
- **Accessibility (100/100):** Full semantic HTML5 and high-contrast color palettes.
- **Best Practices (100/100):** Clean ES Module imports and secure coding patterns.
- **SEO (100/100):** Optimized meta descriptions and header hierarchy.

---

## 🛠️ Installation & Setup

1.  **Install Dependencies:**
    ```bash
    npm install
    ```
2.  **Development & Testing:**
    ```bash
    npm run dev
    ```
3.  **Connect to GitHub:**
    Link your local repository to the remote GitHub repository.

    ```bash
    git remote add origin [https://github com/Ahmed-let-front/Guess-My-number.git](https://github.com/Ahmed-let-front/Guess-My-number.git)
    ```

4.  **Production Deployment:**
    ```bash
    npm run deploy
    ```

---

**Developed with** ❤️ by [Ahmed Yasser](https://github.com/Ahmed-let-front)
