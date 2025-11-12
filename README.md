# Plants on Wheels - eCommerce & Service Platform

A complete Next.js eCommerce platform for delivering curated plants and professional gardening services directly to homes and offices across India.

## Features

- **Plant Delivery**: Browse and purchase indoor/outdoor plants
- **Professional Gardening Services**: Book verified gardeners (Maali on Call)
- **Admin Dashboard**: Manage products and enquiries
- **WhatsApp Integration**: Automatic notifications via Twilio
- **Responsive Design**: Mobile-first design with smooth animations
- **Database Integration**: MongoDB with Mongoose
- **State Management**: Zustand for client-side state

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Database**: MongoDB + Mongoose
- **Notifications**: Twilio WhatsApp API
- **State**: Zustand
- **Language**: JavaScript (No TypeScript)

## Project Structure

\`\`\`
/app
  /page.jsx              → Landing page
  /about/page.jsx        → About us
  /products/page.jsx     → Product listing
  /products/[id]/page.jsx → Product details
  /contact/page.jsx      → Contact form
  /enquiry/page.jsx      → Product enquiry
  /admin/products/page.jsx → Manage products
  /admin/upload/page.jsx → Upload new product
  /admin/enquiry/page.jsx → View enquiries
  /api
    /products/route.js   → Product CRUD
    /enquiry/route.js    → Enquiry handling
    /services/route.js   → Services data

/components
  Navbar.jsx
  Footer.jsx
  Hero.jsx
  ProductCard.jsx
  ServiceCard.jsx
  EnquiryForm.jsx
  WhatsAppButton.jsx

/lib
  dbConnect.js           → MongoDB connection
  whatsapp.js            → Twilio setup

/models
  Product.js
  Enquiry.js
  Service.js

/store
  useStore.js            → Zustand store
\`\`\`

## Setup Instructions

### 1. Clone and Install

\`\`\`bash
git clone <repository>
cd plants-on-wheels
npm install
\`\`\`

### 2. Environment Variables

Create `.env.local` in the root directory:

\`\`\`env
# MongoDB
MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/plants-on-wheels

# Twilio WhatsApp
TWILIO_SID=your_twilio_sid
TWILIO_AUTH=your_twilio_auth_token
TWILIO_WHATSAPP_FROM=whatsapp:+14155238886
TWILIO_WHATSAPP_TO=whatsapp:+919354001873
\`\`\`

### 3. Start Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit `http://localhost:3000`

## Database Models

### Product
- name (String)
- description (String)
- type (indoor/outdoor)
- benefits (Array)
- image (String - URL)
- price (Number)
- category (String)
- createdAt, updatedAt

### Enquiry
- name (String)
- email (String)
- phone (String)
- productId (String, optional)
- productName (String, optional)
- message (String)
- type (product/service/general)
- createdAt, updatedAt

### Service
- name (String)
- description (String)
- icon (String)
- image (String, optional)

## Key Pages

**Public Pages:**
- `/` - Landing page with hero, services, featured products
- `/products` - Product catalog with filters
- `/products/[id]` - Individual product details
- `/about` - Company information and values
- `/contact` - Contact form and information
- `/enquiry` - General enquiry form

**Admin Pages:**
- `/admin/products` - Product management
- `/admin/upload` - Add new products
- `/admin/enquiry` - View all enquiries

## API Endpoints

\`\`\`
GET    /api/products         → Fetch all products
POST   /api/products         → Create new product
PUT    /api/products         → Update product
DELETE /api/products         → Delete product

GET    /api/enquiry          → Fetch all enquiries
POST   /api/enquiry          → Create new enquiry
DELETE /api/enquiry/[id]     → Delete enquiry

GET    /api/services         → Fetch all services
\`\`\`

## Features Overview

### 1. Landing Page
- Hero section with CTA
- About & mission statement
- Why We're Needed section
- 8 services grid
- Featured plants showcase
- Call-to-action section
- Animations with Framer Motion

### 2. Products
- Browsable plant catalog
- Filter by indoor/outdoor
- Product detail pages
- Related products
- Enquire Now functionality

### 3. Enquiry System
- Form-based enquiries
- Database storage
- WhatsApp notifications via Twilio
- Admin dashboard viewing

### 4. Admin Portal
- Product management (Add/Delete/Edit)
- Enquiry management
- Product upload form
- Enquiry tracking

### 5. Professional Services
- Service showcase
- Maali (Gardener) information
- Multiple service types
- Corporate gifting options

## Deployment

### Deploy to Vercel

\`\`\`bash
# Push to GitHub
git add .
git commit -m "Initial commit"
git push origin main

# Connect to Vercel
# Import repository and add environment variables
\`\`\`

1. Go to [Vercel Dashboard](https://vercel.com)
2. Click "New Project" → Select GitHub repository
3. Add environment variables in Settings
4. Deploy

## WhatsApp Integration

Enquiries automatically send WhatsApp notifications:

\`\`\`javascript
// lib/whatsapp.js
const message = formatEnquiryMessage(enquiry);
await sendWhatsAppMessage(message);
\`\`\`

Customize the message format in `/lib/whatsapp.js`

## Customization

### Colors
Update Tailwind colors in your components. Currently uses emerald green (#059669) as primary.

### Animations
- Framer Motion animations in components
- CSS animations in globals.css
- Adjust timing in individual component props

### Services
Edit default services in `/api/services/route.js`

## Notes

- All code is JavaScript (no TypeScript)
- Uses App Router (Next.js 15)
- Mobile-first responsive design
- Smooth scroll behavior enabled
- Custom scrollbar styling
- Production-ready with error handling

## Support

For issues or questions:
- Phone: +91 9354001873
- Email: plantsonwheelsind@gmail.com

## License

Private project - All rights reserved

---

**Made with 🌱 for a Greener India**
