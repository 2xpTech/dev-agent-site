# Dev Agent Marketing Site

A sleek, minimal marketing site built with Astro and Tailwind CSS for Dev Agent - AI automation for modern stacks.

## Features

- Dark, futuristic design with low-contrast aesthetics
- Responsive layout optimized for all devices
- Smooth scrolling navigation
- Mobile-friendly menu
- Accessible components with proper focus states
- Contact form with client-side validation
- Optimized performance with minimal JavaScript

## Tech Stack

- **Astro** - Static site generator
- **Tailwind CSS** - Utility-first CSS framework
- **TypeScript** - Type safety for better development experience

## Installation

1. Navigate to the project directory:
   ```bash
   cd dev-agent-site
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Development

Start the development server:

```bash
npm run dev
```

The site will be available at `http://localhost:4321`

## Build

Build for production:

```bash
npm run build
```

The built files will be in the `dist/` directory.

## Preview

Preview the production build locally:

```bash
npm run preview
```

## Project Structure

```
dev-agent-site/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Clients.astro
│   │   ├── Contact.astro
│   │   ├── Header.astro
│   │   ├── Hero.astro
│   │   └── Services.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── package.json
└── README.md
```

## Customization

### Colors
Edit the custom color palette in `tailwind.config.mjs` to match your brand.

### Content
Update the text content in the component files located in `src/components/`.

### Styles
Global styles can be modified in `src/styles/global.css`.

## License

MIT