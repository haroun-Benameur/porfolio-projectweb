# Modern Portfolio Website

A modern, responsive portfolio website built with React.js and Tailwind CSS. Features a dark theme, smooth animations, and a clean design.

## Features

- 🎨 Modern and clean design
- 🌙 Dark theme
- 📱 Fully responsive
- ⚡ Fast and optimized performance
- 🎭 Smooth animations with Framer Motion
- 📝 Easy to customize and extend

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Customization

### Personal Information

1. Update the content in the following components:
   - `Hero.jsx`: Update your name and introduction
   - `About.jsx`: Modify the about section and skills
   - `Projects.jsx`: Add your own projects
   - `Contact.jsx`: Update contact information
   - `Footer.jsx`: Update social links and copyright information

### Styling

1. Colors: Edit the color scheme in `tailwind.config.js`
2. Typography: Modify font families in `tailwind.config.js`
3. Components: Customize component styles in their respective files

### Adding Projects

To add a new project, update the `projects` array in `Projects.jsx`:

```javascript
const projects = [
  {
    title: 'Your Project Title',
    description: 'Project description',
    image: 'path/to/image',
    technologies: ['React', 'Node.js', etc.],
    github: 'github-url',
    live: 'live-demo-url',
  },
  // Add more projects...
]
```

## Building for Production

To create a production build:

```bash
npm run build
```

The build files will be in the `dist` directory.

## Technologies Used

- React.js
- Tailwind CSS
- Framer Motion
- React Router
- Heroicons

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- Design inspired by modern portfolio websites
- Icons from [Heroicons](https://heroicons.com/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
