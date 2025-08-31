# DUYLANG Portfolio

A modern, responsive portfolio website built with Next.js 15, shadcn/ui, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS v4 with shadcn/ui components
- **UI Components**: Radix UI primitives
- **Animations**: Framer Motion
- **TypeScript**: Full type safety
- **Icons**: Lucide React
- **Package Manager**: pnpm

## ✨ Features

- **Responsive Design**: Optimized for all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Smooth Animations**: Framer Motion powered interactions
- **Modern UI**: shadcn/ui components with clean design
- **SEO Optimized**: Next.js optimization features
- **Fast Loading**: Turbopack for development and optimized builds
- **Type Safe**: Full TypeScript implementation

## 🏃‍♂️ Quick Start

### Prerequisites

- Node.js 18+
- pnpm (recommended) or npm

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd myportfolio

# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css         # Global styles and Tailwind
│   ├── layout.tsx          # Root layout
│   └── page.tsx            # Home page
├── components/
│   ├── ui/                 # shadcn/ui components
│   ├── layout/             # Layout components
│   │   └── navigation.tsx  # Navigation bar
│   └── sections/           # Page sections
│       ├── hero-section.tsx
│       ├── experience-section.tsx
│       ├── skills-section.tsx
│       └── contact-section.tsx
├── lib/
│   └── utils.ts            # Utility functions
└── assets/                 # Static assets
```

## 🎨 Customization

### Colors

The portfolio uses a neutral color scheme that can be customized in `globals.css`:

### Content

Update your personal information in:

- `src/components/sections/hero-section.tsx` - About information
- `src/components/sections/experience-section.tsx` - Work experience
- `src/components/sections/skills-section.tsx` - Skills and technologies
- `src/components/sections/contact-section.tsx` - Contact links

### Avatar

Replace `public/avatar.svg` with your own profile image.

## 🚀 Deployment

This portfolio is optimized for deployment on:

- **Vercel** (Recommended): Connect your GitHub repository
- **Netlify**: Drag and drop the `dist` folder
- **GitHub Pages**: Build and deploy to gh-pages branch

### Environment Variables

Create a `.env.local` file for any environment-specific variables:

```env
# Example
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

## 📱 Sections Overview

### Hero Section

- Professional introduction
- Animated profile avatar
- Key skills highlight

### Experience Section

- Work history with companies
- Position titles and dates
- Current/past job indicators

### Skills Section

- Categorized technology skills
- Interactive skill cards
- Animated skill showcase

### Contact Section

- Social media links
- Professional contact information
- Location information

## 🛠 Development

### Adding New Sections

1. Create a new component in `src/components/sections/`
2. Import and add to `src/app/page.tsx`
3. Add navigation link in `src/components/layout/navigation.tsx`

### Adding New UI Components

```bash
# Add shadcn/ui components
npx shadcn@latest add [component-name]
```

## 📋 Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint
- `pnpm lint:fix` - Fix ESLint issues

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful components
- [Radix UI](https://www.radix-ui.com/) for accessible primitives
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Lucide](https://lucide.dev/) for the icon set

---

Built with ❤️ by DUYLANG
