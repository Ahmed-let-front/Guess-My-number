# 🎯 Guess My Number – Ultra Optimized Edition

A high-performance, modern logic-guessing game built with **JavaScript (ES6+)** and **Tailwind CSS v4**. This project is engineered for speed and accessibility, achieving a perfect **400/400 score on Google Lighthouse**.

### 🔗 [Live Demo ✨](https://ahmed-let-front.github.io/Guess-My-number/)

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

## 🛠️ Technical Evolution (Refactoring & Clean Code)

In the latest update, I transitioned the codebase from a functional-only state to a **Maintainable & Scalable Architecture** by applying professional software engineering principles:

### 1. Centralized DOM Registry (The `elements` Object)

Instead of scattered DOM queries throughout the code, I implemented a centralized `elements` object. This creates a **Single Source of Truth** for all UI interactions, making the code cleaner and easier to maintain.

### 2. Open/Closed Principle (OCP)

The game logic is now **Open for extension but Closed for modification**. By decoupling the **Game Rules** (stored in a `GAME_MESSAGES` mapping) from the **Execution Engine** (`checkGuessStatus`), new difficulty levels or rules can be added without altering the core logic.

### 3. Separation of Concerns (Logic vs. UI)

- **Pure Logic:** The `checkGuessStatus` function is now a "Pure Function". It takes raw data and returns a status signal without touching the DOM, making it highly testable.
- **Centralized UI Controller:** I implemented a `updateUiStyle` helper to manage all CSS modifications, ensuring visual consistency across the application.

### 4. Advanced State Management

- **IsPlaying Guard:** Introduced a state-driven control mechanism to freeze game logic once a win or loss occurs.
- **Magic Strings Elimination:** All UI feedback is managed via a dictionary object to prevent typos and enable centralized updates.

---

## 🚀 Key Features

- **Modular Architecture:** Full separation of concerns using ES6 Modules.
- **Event Handling:** Optimized Keyboard support (Enter key) with smart `removeEventListener` logic.
- **Modern Styling:** Built with **Tailwind CSS v4**, utilizing the new `@theme` engine and native backdrop blurs.
- **Internal Asset Management:** Zero external CDN calls! All fonts are managed internally for maximum speed.

---

## 📦 Internal Dependency Management (The NPM Way)

This project moves away from external CDNs, opting for a professional **npm-managed workflow**:

- **Automated Build Workflow:** Utilizing `predeploy` scripts to ensure that `npm run build` is executed automatically before every deployment.
- **Tree Shaking:** Vite performs deep analysis to prune unused code, creating the smallest possible bundle for lightning-fast load times.

---

## 📈 Performance & Quality (Lighthouse 400/400)

- **Performance (100/100):** Internal bundling and zero render-blocking requests.
- **Accessibility (100/100):** Full semantic HTML5 and high-contrast color palettes.
- **Best Practices (100/100):** Clean ES Module imports and secure coding patterns.
- **SEO (100/100):** Optimized meta descriptions and header hierarchy.

---

## 🛠️ Installation & Setup

1. **Install Dependencies:**
   ```bash
   npm install
   ```
2. **Development & Testing:**
   ```bash
   npm run dev
   ```
3. **Connect to GitHub:**
   ```bash
   git remote add origin [https://github.com/Ahmed-let-front/Guess-My-number.git](https://github.com/Ahmed-let-front/Guess-My-number.git)
   ```
4. **Production Deployment:**
   ```bash
   npm run deploy
   ```

---

\*\*Developed with ❤️ by [Ahmed yasser](https://www.google.com/search?q=https://github.com/Ahmed-let-front)
