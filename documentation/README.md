# Neurema Flow Frontend Documentation

## Routes

- `/` – marketing hero with Orb background and sign-in modal.
- `/about-us` – static about page using the shared info layout.
- `/terms-and-conditions` – static privacy/terms content using the same layout.
- `/pricing` – plan selection page for Personal vs Business tiers.

---

## Pricing page (`/pricing`)

**File:** `frontend/src/app/pricing/page.tsx`

The pricing page is a client component (`"use client"`) so it can manage the Personal/Business toggle on the client without extra round trips.

- Header & nav reuse the home page layout via `page.module.css` so the logo, routes (Get Started, Storm, Pricing), and SIGN IN button stay visually consistent.
- The main content is implemented in `pricing.module.css` and mirrors the attached design:
  - Heading: **Upgrade your plan**.
  - Toggle pill with two options: **Personal** and **Business**.
  - Two cards rendered from data: **Effective Learning** and **Exam Crunch**.

Cards are fully data‑driven; no copy is hard‑coded in the JSX.

---

## Pricing data model

**File:** `frontend/src/lib/pricing.ts`

```ts
export type PricingTier = "personal" | "business";

export interface PricingPlan {
  id: string;            // stable identifier for backend mapping
  tier: PricingTier;     // personal | business
  name: string;          // display title, e.g. "Effective Learning"
  price: number;         // numeric amount in INR (e.g. 199)
  currency: "INR";       // currency code
  unit: string;          // e.g. "exam"
  billingNote: string;   // extra copy like "Valid until the set exam date"
  ctaLabel: string;      // button label, e.g. "Get Effective"
  features: string[];    // bullet points shown under each card
}

export const pricingPlansByTier: Record<PricingTier, PricingPlan[]> = { ... };
```

The pricing page imports `pricingPlansByTier` and filters plans by the active tier. To attach a backend later, you only need to replace the `pricingPlansByTier` constant with data fetched from an API while keeping the `PricingPlan` shape.

---

## Attaching a backend endpoint later

The simplest contract for a backend is:

- **Endpoint:** `GET /api/pricing`
- **Response:**

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
      "features": ["Use our latest neuro-sync engine v.e.1", "Access the neuroadaptive effective revision platform", "Get full access to all activities", "Access the built-in active learning support system", "Analyse real-time topic memory locations"]
    }
  ],
  "business": [...]
}
```

On the frontend you could swap the static import for a data call:

```ts
const [plansByTier, setPlansByTier] = useState<PricingPlansByTier | null>(null);

useEffect(() => {
  fetch("/api/pricing")
    .then((res) => res.json())
    .then((json) => setPlansByTier(json));
}, []);
```

As long as the payload matches `Record<PricingTier, PricingPlan[]>`, the UI code in `page.tsx` does not need to change.

---

## Updating copy and prices

- **Plan text / features / CTAs:** edit `pricingPlansByTier` in `frontend/src/lib/pricing.ts`.
- **Layout / colors:** adjust styles in `frontend/src/app/pricing/pricing.module.css`.
- **Nav routes:** update the `navLinks` array in `frontend/src/app/page.tsx` (and the copied header in `frontend/src/app/pricing/page.tsx` if you diverge later).

This separation keeps content, data shape, and presentation independent so you can evolve the backend API without rewriting the UI.
