# Abhiram Kumar - Interactive Developer Portfolio

A spatial, motion-led portfolio presenting my professional experience, technical capabilities, and selected software projects.

Built with React, Three.js, Framer Motion, and Tailwind CSS, the site combines a cinematic visual system with accessible, responsive, and performance-conscious interactions.

[View Live Portfolio](https://portfolio-abhiram.vercel.app/)

## Highlights

- Interactive 3D hero scene built with React Three Fiber
- Cursor-responsive portrait with perspective tilt and holographic lighting
- Reusable 3D depth interactions across cards and project panels
- Professional experience timeline with measurable achievements
- Complete seven-project catalog with live and source-code links
- Responsive navigation and layouts for desktop and mobile
- Reduced-motion support for improved accessibility
- Lazy-loaded Three.js scene to reduce the initial JavaScript bundle
- Custom `AK` brand favicon
- Downloadable resume and direct email contact actions

## Portfolio Sections

| Section | Content |
| --- | --- |
| Hero | Introduction, professional metrics, social links, resume, and interactive portrait |
| Profile | Development philosophy, technical approach, and key facts |
| Experience | SDE-1 and MERN internship experience, achievements, education, and certifications |
| Capabilities | Frontend, backend, cloud, database, and engineering toolkits |
| Projects | Four featured case studies and a complete project archive |
| Contact | Direct email action and copy-to-clipboard interaction |

## Featured Projects

- **SkillSwap** - Full-stack peer-learning platform with role-based access, bookings, and real-time chat
- **DevConnect** - GitHub developer discovery interface
- **Secure Auth** - JWT and Google OAuth authentication system
- **Drowsiness Detection** - Real-time computer-vision safety system
- **Portfolio Website** - Interactive spatial developer portfolio
- **Medi Chatbot** - NLP-based medicine suggestion chatbot
- **Fertilizer Shop Management** - Inventory and billing desktop application

## Technology Stack

**Core**

- React 19
- Vite 6
- Tailwind CSS 4
- JavaScript

**Motion and 3D**

- Three.js
- React Three Fiber
- Drei
- Framer Motion

**Interface**

- React Icons
- Custom CSS animations
- Responsive and reduced-motion behavior

**Deployment**

- Vercel

## Local Development

### Prerequisites

- Node.js 18 or newer
- npm

### Setup

```bash
git clone https://github.com/Abhiram9898/portfolio-abhiram.git
cd portfolio-abhiram
npm install
npm run dev
```

The development server will print the local URL in the terminal.

### Available Commands

```bash
npm run dev      # Start the Vite development server
npm run build    # Create a production build
npm run preview  # Preview the production build locally
npm run lint     # Run ESLint
```

## Project Structure

```text
portfolio-abhiram/
|-- public/
|   |-- Abhiram_SDE1.pdf
|   `-- favicon.svg
|-- src/
|   |-- assets/
|   |   `-- Abhiram.jpg
|   |-- components/
|   |   |-- About.jsx
|   |   |-- Contact.jsx
|   |   |-- DepthCard.jsx
|   |   |-- Experience.jsx
|   |   |-- Footer.jsx
|   |   |-- Home.jsx
|   |   |-- NavBar.jsx
|   |   |-- Projects.jsx
|   |   |-- Skills.jsx
|   |   `-- SpatialScene.jsx
|   |-- App.jsx
|   |-- index.css
|   `-- main.jsx
|-- index.html
|-- package.json
`-- vite.config.js
```

## Interaction Architecture

- `SpatialScene.jsx` contains the lazy-loaded React Three Fiber hero scene.
- `DepthCard.jsx` provides reusable cursor-responsive perspective and lighting effects.
- `Home.jsx` manages the interactive portrait, hero messaging, and professional metrics.
- `index.css` defines the shared visual system, animations, responsive rules, and reduced-motion fallbacks.

## Performance and Accessibility

- The Three.js scene is loaded separately from the initial application bundle.
- Pointer-based 3D effects are disabled for touch interaction.
- Reduced-motion preferences disable continuous and perspective animations.
- Semantic sections, accessible labels, and descriptive links are used throughout.

## Contact

- Email: [abhiramkumar2000@gmail.com](mailto:abhiramkumar2000@gmail.com)
- LinkedIn: [abhiram-kumar9898](https://linkedin.com/in/abhiram-kumar9898)
- GitHub: [Abhiram9898](https://github.com/Abhiram9898)

## License

This portfolio and its source code are available for learning and inspiration. Please do not reuse the personal content, branding, or identity assets as your own.

Designed and developed by Abhiram Kumar.
