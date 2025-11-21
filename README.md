# Neurema Flow

Neurema Flow is a full-stack application for the Neurema BrainStorm product. It combines a polished Next.js 15 frontend with a Strapi CMS backend, featuring dual authentication (Strapi + Firebase) and Google Sign-In.

## What's inside
- **Next.js 15 + React 19** with the App Router and TypeScript for type safety.
- **Strapi CMS backend** for content management and authentication.
- **Dual authentication** system combining Strapi and Firebase.
- **Google Sign-In** integration for seamless social login.
- **Custom hero + sign-in modal** with an interactive shader-driven Orb background.
- **React Bits Orb background** powered by shadcn/react-bits + OGL.
- **Static supporting pages** (`/about-us`, `/terms-and-conditions`, `/pricing`).
- **Environment-based configuration** with `.env.local` for secrets.

## Repository layout
```
.
├── README.md              # This overview
├── .gitignore             # Consolidated ignore rules
├── documentation/         # Additional docs and guides
├── frontend/              # Next.js application
│   ├── .env.local         # Environment variables (gitignored)
│   ├── .env.example       # Template for env vars
│   ├── src/
│   │   ├── app/           # App Router routes
│   │   ├── components/    # React components
│   │   └── lib/           # Firebase & Strapi clients
│   └── package.json
└── backend/               # Strapi CMS
    ├── config/            # Strapi configuration
    ├── src/               # API routes and content types
    └── package.json
```

## Getting started

### Prerequisites
- Node.js 18+ and npm

### 1. Clone and install dependencies
```bash
# Install frontend dependencies
cd frontend
npm install

# Install backend dependencies
cd ../backend
npm install
```

### 2. Configure environment variables
Copy the example env file and fill in your Firebase credentials:
```bash
cd frontend
cp .env.example .env.local
```

Edit `frontend/.env.local` with your Firebase config:
```env
NEXT_PUBLIC_STRAPI_URL=http://localhost:1337
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_auth_domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_storage_bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id
```

### 3. Run the application

#### Start the backend (Terminal 1):
```bash
cd backend
npm run develop
```
The Strapi admin panel will be available at `http://localhost:1337/admin`.

#### Start the frontend (Terminal 2):
```bash
cd frontend
npm run dev
```
Visit `http://localhost:3000` to see the application.

## Features

### Authentication
- **Email/Password login**: Users can sign up and log in with email and password.
- **Google Sign-In**: One-click authentication via Google OAuth.
- **Dual sync**: User accounts are automatically synchronized between Strapi and Firebase.

### Frontend Pages
- `/` – Hero page with interactive Orb and sign-in modal
- `/about-us` – About page
- `/terms-and-conditions` – Terms and privacy policy
- `/pricing` – Plan selection page

## Available scripts

### Frontend
- `npm run dev` – Start dev server with hot reload
- `npm run build` – Create optimized production build
- `npm run start` – Serve production build
- `npm run lint` – Run ESLint

### Backend
- `npm run develop` – Start Strapi in development mode
- `npm run build` – Build Strapi admin panel
- `npm run start` – Start Strapi in production mode

## Production deployment

### Frontend
```bash
cd frontend
npm run build
npm run start
```
Deploy to Vercel, Netlify, or any Next.js-compatible platform.

### Backend
```bash
cd backend
npm run build
npm run start
```
Deploy to any Node.js hosting platform. Update `NEXT_PUBLIC_STRAPI_URL` in frontend to point to your production Strapi URL.

## Environment variables

### Frontend (`frontend/.env.local`)
All frontend environment variables must be prefixed with `NEXT_PUBLIC_` to be accessible in the browser:

- `NEXT_PUBLIC_STRAPI_URL` – Strapi backend URL
- `NEXT_PUBLIC_FIREBASE_API_KEY` – Firebase API key
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` – Firebase auth domain
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID` – Firebase project ID
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` – Firebase storage bucket
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` – Firebase messaging sender ID
- `NEXT_PUBLIC_FIREBASE_APP_ID` – Firebase app ID

### Backend (`backend/.env`)
Strapi automatically generates JWT secrets and database configuration.

## Security notes

- ✅ `.env.local` is gitignored to protect secrets
- ✅ `.env.example` is committed as a template for team collaboration
- ⚠️ Never commit actual API keys or secrets to version control
- ⚠️ Update Firebase security rules for production use

## Documentation
For more detailed information, see the [`documentation/`](./documentation/) folder.

## Contributing
1. Create a new branch for your feature
2. Make your changes
3. Test both frontend and backend
4. Submit a pull request