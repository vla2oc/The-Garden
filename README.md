# 🌿 Digital Garden — Immersive React Experience

![React](https://img.shields.io/badge/React_19-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=for-the-badge&logo=greensock&logoColor=white)
![Tailwind CSS v4](https://img.shields.io/badge/Tailwind_CSS_v4-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Performance](https://img.shields.io/badge/60_FPS-Smooth-success?style=for-the-badge)

> **"I wanted to stop just admiring Awwwards websites and start building one."**

## 📖 About The Project

**Digital Garden** is an experimental, high-performance web application designed to push the boundaries of the modern frontend stack. Built in just 2 weeks as a solo challenge, the goal was to engineer a space that feels organic, fluid, and alive—bridging the gap between creative design and strict engineering performance.

This project is not just a website; it is a technical playground demonstrating how **React 19**'s concurrent features can work in harmony with heavy **GSAP** timelines to create a cinematic, 60fps user experience.

### 🎯 The Mission
To create an "Awwwards-level" interactive story where performance is treated as a core feature, not an afterthought.

---


## ⚙️ Technical Architecture

### 1. The Bleeding-Edge Stack
* **React:** Leveraged the latest concurrent rendering features and hooks to ensure seamless UI updates even under heavy animation loads.
* **Tailwind CSS v4:** Adopting the latest zero-runtime styling engine allowed for rapid paint times and a minimal bundle size, crucial for keeping the main thread free for JS execution.
* **GSAP (GreenSock):** The backbone of the motion design. Used for complex timeline sequencing, scroll-triggered events, and micro-interactions.

### 2. Engineering Challenges & Solutions

#### 🚀 Performance First (60fps Goal)
The biggest challenge was managing micro-interactions without blocking the main thread.
* **Solution:** Strict profiling using Chrome DevTools to minimize layout thrashing.
* **Optimization:** Offloading heavy calculations and ensuring animations are GPU-accelerated (using `transform` and `opacity` exclusively where possible).

#### 🧩 Modular Architecture
* Developed a reusable component system using modern functional programming patterns.
* Separated animation logic from UI rendering to maintain clean, maintainable code.

---

## 🛠️ Installation & Setup

This project uses the latest stable versions of the ecosystem.

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/your-username/digital-garden.git](https://github.com/your-username/digital-garden.git)
    cd digital-garden
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Run the development server**
    ```bash
    npm run dev
    ```

4.  **Build for production**
    ```bash
    npm run build
    ```

---

## 💡 What I Learned

* **Animation Architecture:** Orchestrating complex timelines requires a different mental model than standard state management.
* **Performance Profiling:** "Performance is a feature." Even the most beautiful animation fails if it drops frames on a mid-range device.
* **React 19 Capabilities:** Exploring the new concurrent features gave me a glimpse into the future of smoother React rendering.

---

## 📬 Contact

Project Link: [https://github.com/your-username/digital-garden](https://github.com/your-username/digital-garden)

---

## 📄 License

Distributed under the MIT License.
