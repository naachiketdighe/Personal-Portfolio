# Solarpunk Personal Portfolio Website

![Solarpunk Portfolio Banner](/placeholder.svg?height=300&width=800)

A modern, responsive personal portfolio website with a solarpunk aesthetic, featuring a greenish-blue color palette, organic design elements, and a focus on sustainability themes.

## 🌿 Live Demo

Visit the live website: [naachoes.vercel.app](https://naachoes.vercel.app)

## ✨ Features

- **Responsive Design**: Fully responsive layout that works on all devices
- **Interactive UI**: Smooth transitions and interactive elements
- **Solarpunk Aesthetic**: Nature-inspired design with floating elements and organic shapes
- **Dark Theme**: Soothing dark theme with teal, cyan, and amber accents
- **Portfolio Showcase**: Detailed showcase of experiences and achievements
- **Admin Authentication**: Protected admin features for content management
- **Image Upload**: Ability to add and manage images for showcase items
- **Local Storage**: Client-side persistence for user preferences and content

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Components**: [shadcn/ui](https://ui.shadcn.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **State Management**: React Context API
- **Authentication**: Custom client-side auth system
- **Image Handling**: Canvas API for compression
- **Deployment**: [Vercel](https://vercel.com/)

## 📋 Prerequisites

- Node.js 18.x or later
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/yourusername/solarpunk-portfolio.git
   cd solarpunk-portfolio
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   \`\`\`

3. Run the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

\`\`\`
solarpunk-portfolio/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── globals.css       # Global styles
│   └── showcase/         # Showcase section
│       └── [id]/         # Dynamic showcase item pages
├── components/           # React components
│   ├── ui/               # UI components from shadcn
│   └── admin-login.tsx   # Admin authentication component
├── context/              # React Context providers
│   └── auth-context.tsx  # Authentication context
├── lib/                  # Utility functions
│   └── utils.ts          # Helper utilities
├── public/               # Static assets
├── tailwind.config.js    # Tailwind configuration
└── tsconfig.json         # TypeScript configuration
\`\`\`

## 🧩 Main Sections

1. **Home**: Introduction and hero section
2. **About Me**: Personal background and interests
3. **Skills**: Technical and professional skills
4. **Projects**: Portfolio of completed and in-progress projects
5. **Year Review**: Timeline of achievements and milestones
6. **Showcase**: Detailed portfolio items with images and descriptions
7. **Contact**: Contact information and form

## 🔒 Admin Features

The site includes an admin panel accessible via the "Admin" button in the bottom right corner. Default password: `naachoes123` (for demo purposes only).

Admin features include:
- Adding and removing images from showcase items
- Managing content (in a production environment)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Design inspiration from solarpunk aesthetic and sustainable design principles
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)

---

Built with 💚 by Nachiket Dighe
