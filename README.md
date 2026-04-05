# Rashed Zaman Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Features a clean design with dark mode support, animations, and sections for showcasing projects, blogs, case studies, and professional experience.

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form + Zod
- **Theme**: next-themes (Dark/Light mode)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/jmrashed/jmrashed.github.io.git

# Navigate to project directory
cd jmrashed.github.io

# Install dependencies
npm install
```

### Environment Variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Configure your environment variables in `.env.local`:

```env
NEXT_PUBLIC_BASE_PATH=https://jmrashed.github.io
# Add your API keys if needed
```

### Development

```bash
# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the project.

### Build for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## Available Scripts

| Command                | Description               |
| ---------------------- | ------------------------- |
| `npm run dev`          | Start development server  |
| `npm run build`        | Build for production      |
| `npm run start`        | Start production server   |
| `npm run lint`         | Run ESLint                |
| `npm run lint:fix`     | Fix ESLint issues         |
| `npm run format`       | Format code with Prettier |
| `npm run format:check` | Check code formatting     |

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── api/               # API routes
│   ├── blogs/             # Blog pages
│   ├── case-studies/      # Case studies pages
│   ├── projects/          # Projects pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── layout/           # Layout components (Navbar, Footer)
│   ├── sections/         # Page sections (Hero, Projects, etc.)
│   └── ui/               # Reusable UI components
├── lib/                   # Utility functions and data
├── public/               # Static assets
│   └── data/             # JSON data files
├── types/                # TypeScript type definitions
└── types/                # Configuration files
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the repository on [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure the build
4. Add your environment variables in Vercel dashboard
5. Deploy!

### GitHub Pages

Since this uses Next.js App Router, Vercel is recommended. For GitHub Pages, you'll need to add `output: 'export'` in `next.config.ts`.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please read our [Contributing Guidelines](CONTRIBUTING.md) first.

## Code of Conduct

Please read our [Code of Conduct](CODE_OF_CONDUCT.md) to keep our community approachable and respectable.
