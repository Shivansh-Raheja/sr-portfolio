# Shivansh Raheja - Portfolio Website

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional layout with subtle animations
- **Responsive**: Optimized for all device sizes
- **Performance**: Built with Next.js for optimal performance
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Animations**: Smooth transitions powered by Framer Motion

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles
│   ├── layout.tsx           # Root layout
│   └── page.tsx             # Home page
├── components/
│   ├── Navbar.tsx           # Navigation component
│   ├── Hero.tsx             # Hero section
│   ├── Skills.tsx           # Skills section
│   ├── Experience.tsx       # Experience timeline
│   ├── Projects.tsx         # Projects showcase
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer component
├── public/                  # Static assets
└── ...config files
```

## Customization

### Personal Information
Update the following files with your information:
- `components/Hero.tsx` - Name, title, tagline
- `components/Experience.tsx` - Work experience
- `components/Projects.tsx` - Project details
- `components/Contact.tsx` - Contact information

### Styling
- Modify `tailwind.config.js` for color schemes
- Update `app/globals.css` for custom styles
- Adjust component styles in individual component files

### Content
- Replace placeholder content with your actual information
- Update social media links
- Add your project screenshots and details

## Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms
- **Netlify**: Build command: `npm run build`, Publish directory: `.next`
- **AWS Amplify**: Build command: `npm run build`
- **Railway**: Automatic detection of Next.js

## Performance

This portfolio is optimized for:
- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Excellent performance
- **SEO**: Search engine optimized
- **Accessibility**: WCAG 2.1 compliant

## License

This project is open source and available under the [MIT License](LICENSE).

## Contact

- **Email**: shivansh@example.com
- **LinkedIn**: [linkedin.com/in/shivanshraheja](https://linkedin.com/in/shivanshraheja)
- **GitHub**: [github.com/shivanshraheja](https://github.com/shivanshraheja)
