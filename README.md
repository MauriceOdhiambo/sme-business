# BiasharaOS

Professional Kenya-first SME business operating system.

## Stack
- Next.js 16
- React 19
- TypeScript
- Tailwind CSS
- Supabase Auth + PostgreSQL + RLS
- Vercel
- GitHub

## Local setup

1. Copy `.env.example` to `.env.local`.
2. Add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
3. In Supabase SQL Editor, run `supabase/schema.sql`.
4. `npm install`
5. `npm run build`
6. `npm run dev`

## Vercel

Add the same two environment variables under Project Settings > Environment Variables.

Never expose a Supabase service-role key in the browser.

## Current modules

- Public landing page
- Authentication
- Business onboarding
- Multi-tenant organizations
- RLS
- Dashboard
- POS
- Inventory
- Customers
- Invoices
- Staff
- Control Tower
- Audit foundation

Payment, banking, eTIMS, SMS, WhatsApp and lending integrations remain intentionally pending.
