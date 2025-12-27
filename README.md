# Vivek Pandey - Interactive 3D Portfolio

Welcome to my personal interactive 3D portfolio! This project showcases my skills, projects, and professional background in an immersive web-based 3D environment built with **Three.js** and **WebGL**.

## 🚀 Overview

Unlike traditional flat portfolios, this site offers a gamified experience where visitors navigate a 3D world to explore my work. It features realistic physics-based movement, 3D text rendering, interactive billboards, and a dynamic camera system.

**Live Demo:** [vivek.technewity.com](https://vivek.technewity.com)

## ✨ Key Features

-   **Immersive 3D World**: Fully interactive scene rendered in real-time using WebGL.
-   **Physics Engine**: Integrated **Ammo.js** for realistic collision detection and object interaction.
-   **Interactive Elements**:
    -   **Projects Gallery**: Floating billboards showcasing key projects (Jarvis, DameChess, Engineering Hub).
    -   **Skills Floor**: A dedicated section displaying my technical stack on the ground.
    -   **Contact Hub**: 3D text and interactive boxes for email, GitHub, and LinkedIn.
-   **Dynamic Camera**: Smooth camera tracking with mouse-based perspective shifts.
-   **Responsive Performance**: Optimized for various screen sizes with custom shaders for visual effects.

## 🛠️ Tech Stack

-   **Core**: [Three.js](https://threejs.org/) (3D Graphics), WebGL
-   **Physics**: [Ammo.js](https://github.com/kripken/ammo.js/) (Bullet Physics port)
-   **Languages**: JavaScript (ES6+), HTML5, CSS3
-   **Build Tools**: [Webpack](https://webpack.js.org/), Babel
-   **Styling**: Custom GLSL Shaders, CSS

## 💻 Getting Started

Follow these instructions to set up the project locally on your machine.

### Prerequisites

-   [Node.js](https://nodejs.org/) (v14 or higher recommended)
-   npm (Node Package Manager)

### Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Vpandey-tech/vivek-pandey-portfolio.git
    cd vivek-pandey-portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

### Running Locally

Start the development server with hot-reloading:

```bash
npm run dev
```

The site will be available at `http://localhost:8080`.

### Building for Production

To create an optimized production build:

```bash
npm run build
```

This generates a `build/` folder containing the bundled assets ready for deployment.

## 🎮 Navigation Controls

-   **Arrow Keys**: Move the ball (player) around the scene.
-   **Mouse**: Move the cursor to slightly rotate the camera view for better angles.
-   **Click**: Interact with project billboards (opens links/videos) and contact boxes.

## 🌐 Deployment

This project is configured for static hosting. You can deploy it easily on platforms like **Vercel** or **Netlify**.

**Vercel Deployment:**
1.  Import the repository into Vercel.
2.  Set the `Output Directory` to `.` (root) or rely on `npm run build` if configured.
3.  Add your custom domain (e.g., `vivek.technewity.com`).

*(See `DEPLOYMENT_GUIDE.md` for detailed instructions.)*

## 📬 Contact

**Vivek Pandey**  
-   **Role**: Full Stack Developer & AI Engineer
-   **Location**: Mumbai, Maharashtra
-   **Email**: [vp983351@gmail.com](mailto:vp983351@gmail.com)
-   **LinkedIn**: [Vivek Pandey](https://linkedin.com/in/vivek-pandey-90058b252)
-   **GitHub**: [Vpandey-tech](https://github.com/Vpandey-tech)
