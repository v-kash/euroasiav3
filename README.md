# Euroasia Aquatic Pvt Ltd - Website

**Making Compliance Effortless**

A full-stack Next.js 14 website for Euroasia Aquatic Pvt Ltd, a business consulting company specializing in certifications, compliance, tenders, digital marketing, and tax advisory.

## Tech Stack

- **Framework:** Next.js 14 (App Router, JSX)
- **Styling:** Tailwind CSS v3
- **Database:** MySQL 8 with Sequelize v6
- **Authentication:** next-auth v4
- **Rich Text Editor:** @uiw/react-md-editor
- **Animations:** Framer Motion
- **Icons:** react-icons (Feather Icons)

## Getting Started

### Prerequisites

- Node.js 18+
- MySQL 8
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd euroasiav2
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.local.example .env.local
```

Edit `.env.local` with your configuration:
```
DATABASE_URL=mysql://user:password@localhost:3306/euroasia_db
NEXTAUTH_SECRET=your_random_secret_here
NEXTAUTH_URL=http://localhost:3000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=info@euroasias.com
SMTP_PASS=your_app_password
ADMIN_EMAIL=admin@euroasias.com
NEXT_PUBLIC_SITE_URL=https://www.euroasias.com
```

4. Create the MySQL database:
```sql
CREATE DATABASE euroasia_db;
```

5. Run the development server:
```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000)

### Creating Admin User

Run this script to create an admin user:

```javascript
const bcrypt = require('bcryptjs');

// Generate hash for your password
const hash = bcrypt.hashSync('your_password', 10);
console.log(hash);

// Then insert into database:
// INSERT INTO admins (email, passwordHash, name, createdAt, updatedAt)
// VALUES ('admin@euroasias.com', '<hash>', 'Admin', NOW(), NOW());
```

## Project Structure

```
├── app/
│   ├── layout.jsx              # Root layout
│   ├── page.jsx                # Homepage
│   ├── about/                  # About page
│   ├── services/               # Service pages
│   ├── blog/                   # Blog pages
│   ├── contact/                # Contact page
│   ├── admin/                  # Admin panel
│   └── api/                    # API routes
├── components/
│   ├── layout/                 # Navbar, Footer, WhatsApp
│   ├── home/                   # Homepage sections
│   ├── shared/                 # Reusable components
│   ├── blog/                   # Blog components
│   ├── contact/                # Contact form
│   ├── services/               # Service template
│   └── admin/                  # Admin components
├── lib/
│   ├── db.js                   # Database connection
│   ├── auth.js                 # Auth configuration
│   └── models/                 # Sequelize models
├── public/                     # Static assets
└── styles/                     # Global styles
```

## Features

### Public Pages
- Homepage with 12 sections
- About page
- 6 service detail pages
- Blog listing with search and filters
- Blog detail with markdown rendering
- Contact form with email notifications

### Admin Panel
- Protected routes with authentication
- Dashboard with stats
- Blog management (CRUD)
- Leads management
- Export to CSV

## Deployment

### Vercel (Recommended)
```bash
npm run build
vercel deploy
```

### VPS with PM2
```bash
npm run build
pm2 start npm --name "euroasia" -- start
```

## SEO

- Dynamic metadata for all pages
- JSON-LD structured data
- Dynamic sitemap generation
- robots.txt configuration

## License

Proprietary - All rights reserved.

## Contact

**Euroasia Aquatic Pvt Ltd**
- Address: 105–107, Athena Avenue, Gota, Ahmedabad, Gujarat – 382481
- Phone: +91-9898921290
- Email: info@euroasias.com
- WhatsApp: +91-9898921290
