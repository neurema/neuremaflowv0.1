# Neurema Flow Documentation

## Table of Contents
- [Architecture](#architecture)
- [Frontend Routes](#frontend-routes)
- [Authentication](#authentication)
- [Backend API](#backend-api)
- [Environment Variables](#environment-variables)
- [Pricing Implementation](#pricing-implementation)

---

## Architecture

Neurema Flow is a full-stack application with:

- **Frontend**: Next.js 15 (App Router) with React 19
- **Backend**: Strapi CMS v5
- **Authentication**: Dual system (Strapi + Firebase)
- **Database**: SQLite (development) - can be configured for PostgreSQL/MySQL in production

### Communication Flow
```
User Browser
    ↓
Next.js Frontend (port 3000)
    ↓
    ├─→ Strapi Backend (port 1337) - User data & content
    └─→ Firebase - Authentication & real-time features
```

---

## Frontend Routes

- `/` – Marketing hero with Orb background and sign-in modal
- `/about-us` – Static about page
- `/terms-and-conditions` – Static privacy/terms content
- `/pricing` – Plan selection page (Personal vs Business tiers)

All routes use the shared layout from `page.module.css` for consistent navigation and styling.

---

## Authentication

### Dual Authentication System

Neurema uses **dual authentication** to leverage both Strapi's content management and Firebase's real-time capabilities:

1. **Strapi** - Primary source of truth for user accounts
2. **Firebase** - Handles authentication state and Google OAuth

### Login Flow

#### Email/Password:
1. User enters email and password
2. Attempt login to Strapi via `/api/auth/local`
3. If Strapi login succeeds, attempt Firebase login
4. If Firebase user doesn't exist, create Firebase account
5. If Strapi login fails, attempt registration in both systems

#### Google Sign-In:
1. User clicks "Sign in with Google"
2. Firebase handles Google OAuth popup
3. Extract email and Firebase UID
4. Generate password: `google-auth-${uid}`
5. Register/login to Strapi with generated password
6. User is authenticated in both systems

### Implementation Files

- **Frontend Client Libraries**:
  - `frontend/src/lib/firebase.ts` - Firebase initialization and GoogleAuthProvider
  - `frontend/src/lib/strapi.ts` - Strapi API client (login/register)

- **Authentication Logic**:
  - `frontend/src/app/page.tsx` - `handleSubmit()` and `handleGoogleLogin()` functions

### Security Notes

⚠️ **Social Login Strategy**: When users sign in with Google, we don't have access to their actual password. The system generates a secure password (`google-auth-${firebaseUid}`) to create a corresponding Strapi account. This password is never shown to the user.

---

## Backend API

### Strapi Endpoints

#### Authentication
- `POST /api/auth/local` - Login with email/password
- `POST /api/auth/local/register` - Register new user

**Request Body** (both endpoints):
```json
{
  "identifier": "user@example.com",  // email (login only)
  "username": "user@example.com",     // register only
  "email": "user@example.com",        // register only
  "password": "secure_password"
}
```

**Response** (success):
```json
{
  "jwt": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": 1,
    "username": "user@example.com",
    "email": "user@example.com"
  }
}
```

### Admin Panel
Access the Strapi admin at `http://localhost:1337/admin` to:
- Manage users
- Create content types
- Configure permissions
- View API documentation

---

## Environment Variables

### Frontend (`frontend/.env.local`)

All client-side environment variables must use the `NEXT_PUBLIC_` prefix:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_STRAPI_URL` | Strapi backend URL | `http://localhost:1337` |
| `NEXT_PUBLIC_FIREBASE_API_KEY` | Firebase API key | `AIzaSy...` |
| `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN` | Firebase auth domain | `project.firebaseapp.com` |
| `NEXT_PUBLIC_FIREBASE_PROJECT_ID` | Firebase project ID | `my-project` |
| `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET` | Firebase storage bucket | `project.appspot.com` |
| `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID` | Firebase sender ID | `123456789` |
| `NEXT_PUBLIC_FIREBASE_APP_ID` | Firebase app ID | `1:123:web:abc` |

### Backend (`backend/.env`)

Strapi auto-generates these during initialization:
- `JWT_SECRET` - Secret for signing JWT tokens
- `DATABASE_*` - Database connection settings

---

## Pricing Implementation

### Pricing Page (`/pricing`)

**File:** `frontend/src/app/pricing/page.tsx`

The pricing page is a client component that manages the Personal/Business toggle.

- Header & nav reuse home page styles for consistency
- Toggle pill switches between **Personal** and **Business** tiers
- Cards are fully data-driven (no hardcoded copy in JSX)

### Pricing Data Model

**File:** `frontend/src/lib/pricing.ts`

```typescript
export type PricingTier = "personal" | "business";

export interface PricingPlan {
  id: string;            // Stable identifier for backend mapping
  tier: PricingTier;     // personal | business
  name: string;          // Display title, e.g. "Effective Learning"
  price: number;         // Numeric amount in INR (e.g. 199)
  currency: "INR";       // Currency code
  unit: string;          // e.g. "exam"
  billingNote: string;   // e.g. "Valid until the set exam date"
  ctaLabel: string;      // Button label, e.g. "Get Effective"
  features: string[];    // Feature bullet points
}

export const pricingPlansByTier: Record<PricingTier, PricingPlan[]> = { ... };
```

### Backend Integration (Future)

To connect pricing to a backend API:

**Endpoint:** `GET /api/pricing`

**Response:**
```json
{
  "personal": [
    {
      "id": "effective-learning",
      "tier": "personal",
      "name": "Effective Learning",
      "price": 199,
      "currency": "INR",
      "unit": "exam",
      "billingNote": "Valid until the set exam date",
      "ctaLabel": "Get Effective",
      "features": [...]
    }
  ],
  "business": [...]
}
```

**Frontend Update:**
```typescript
const [plansByTier, setPlansByTier] = useState<PricingPlansByTier | null>(null);

useEffect(() => {
  fetch("/api/pricing")
    .then((res) => res.json())
    .then((json) => setPlansByTier(json));
}, []);
```

As long as the response matches `Record<PricingTier, PricingPlan[]>`, the UI code remains unchanged.

### Updating Content

- **Plan text/features/CTAs**: Edit `pricingPlansByTier` in `frontend/src/lib/pricing.ts`
- **Layout/colors**: Adjust `frontend/src/app/pricing/pricing.module.css`
- **Nav routes**: Update `navLinks` in `frontend/src/app/page.tsx`

---

## Development Workflow

### Starting Fresh

1. **Install dependencies**:
   ```bash
   # Frontend
   cd frontend && npm install
   
   # Backend
   cd ../backend && npm install
   ```

2. **Configure environment**:
   ```bash
   cd frontend
   cp .env.example .env.local
   # Edit .env.local with your Firebase config
   ```

3. **Run both servers**:
   ```bash
   # Terminal 1 - Backend
   cd backend && npm run develop
   
   # Terminal 2 - Frontend
   cd frontend && npm run dev
   ```

4. **Create Strapi admin** (first time only):
   - Visit `http://localhost:1337/admin`
   - Create your first administrator account

### Making Changes

- **Frontend code**: Hot reload is enabled, changes appear instantly
- **Backend config**: Restart Strapi after config changes
- **Database changes**: Strapi auto-generates migrations

### Production Build

```bash
# Frontend
cd frontend
npm run build
npm run start

# Backend
cd backend
npm run build
NODE_ENV=production npm run start
```

---

## Troubleshooting

### Google Login redirecting to Strapi admin
- Ensure the "Sign in with Google" button has `type="button"` (not `type="submit"`)
- Check browser console for errors

### Environment variables not loading
- Restart the dev server after changing `.env.local`
- Verify variable names start with `NEXT_PUBLIC_`
- Check `.env.local` is in the `frontend/` directory

### Strapi connection failed
- Ensure Strapi is running on port 1337
- Check `NEXT_PUBLIC_STRAPI_URL` in `.env.local`
- Verify Strapi admin panel is accessible

### Firebase auth errors
- Verify all Firebase config values are correct
- Check Firebase console for project settings
- Ensure Google Sign-In is enabled in Firebase Authentication

---

## Additional Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [Strapi Documentation](https://docs.strapi.io)
- [Firebase Documentation](https://firebase.google.com/docs)
