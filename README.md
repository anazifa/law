# LAWCO - Legal Services Marketplace

A modern, secure, and user-friendly platform connecting legal service seekers with law firms.

## Features

- 🔐 Secure authentication system
- 🌐 Cross-browser compatibility (Chrome, Safari, Firefox, Edge)
- 📱 Responsive design for all screen sizes
- 🎨 Modern and intuitive UI
- ⚡ Optimized performance
- 🔍 SEO-friendly
- ♿ Accessibility compliant

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- JWT Authentication
- Docker

## Prerequisites

- Node.js 20.x or later
- npm 10.x or later
- Docker (optional)

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/lawco.git
   cd lawco
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file:
   ```bash
   cp .env.example .env.local
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

## Production Deployment

### Option 1: Traditional Deployment

1. Build the application:
   ```bash
   npm run build
   ```

2. Start the production server:
   ```bash
   npm start
   ```

### Option 2: Docker Deployment

1. Build and run with Docker Compose:
   ```bash
   docker-compose up -d
   ```

### Option 3: Cloud Platform Deployment

The application is compatible with:
- Vercel
- AWS
- Google Cloud
- Azure
- Digital Ocean

#### Vercel Deployment (Recommended)

1. Install Vercel CLI:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

## Environment Variables

Create a `.env.production` file with these variables:

```env
# Authentication
JWT_SECRET=your-production-secret-key
JWT_EXPIRY=24h

# API Configuration
NEXT_PUBLIC_API_URL=https://your-api-domain.com
NODE_ENV=production

# Security
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-nextauth-secret
```

## Browser Support

- Chrome (latest 2 versions)
- Safari (latest 2 versions)
- Firefox (latest 2 versions)
- Edge (latest 2 versions)

## Performance Optimization

The application includes:
- Code splitting
- Image optimization
- CSS minification
- Tree shaking
- Lazy loading
- Caching strategies

## Security Measures

- JWT-based authentication
- CSRF protection
- XSS prevention
- Rate limiting
- Secure headers
- Cookie security

## Monitoring and Analytics

Consider setting up:
- Google Analytics
- Error tracking (e.g., Sentry)
- Performance monitoring (e.g., New Relic)
- Log management (e.g., LogRocket)

## Support

For support, email support@lawco.com or open an issue in the repository.

## License

MIT License - see LICENSE file for details 