# BiasharaOS — Kenya-first SME Business Operating System

A professional Next.js + Supabase foundation for a multi-tenant SME SaaS. Vercel is the intended deployment platform and GitHub is the source-of-truth repository.

## Included
- Marketing site and commercial positioning
- Supabase Auth login/sign-up
- Protected application shell
- Business control tower dashboard
- POS workspace
- Inventory
- Invoices
- Customers / CRM
- Staff & payroll-ready workspace
- Reports / management intelligence
- Settings + staged integrations
- Platform Control Tower and Administration
- Separate Member Portal
- Multi-tenant Postgres schema with Row Level Security policies
- Audit log foundation

## Intentionally pending
Payment rails (M-PESA/Daraja, cards, bank), SMS, WhatsApp and eTIMS are represented as integration-ready surfaces. Do not insert provider secrets into the frontend. Connect these only after provider credentials, contracts, compliance and webhook requirements are ready.

## Local setup
1. Install Node.js 20+.
2. Create a Supabase project.
3. Copy `.env.example` to `.env.local` and add the Supabase project URL and publishable key.
4. Run `supabase/migrations/001_initial.sql` in the Supabase SQL Editor.
5. `npm install`
6. `npm run dev`
7. Open `http://localhost:3000`.

## Production path
Push this folder to GitHub, import the repository into Vercel, add the two environment variables, and deploy. Keep production secrets in Vercel environment variables and Supabase, never in Git.

## Next engineering phase
- Replace demo dashboard data with Supabase queries.
- Add controlled organization onboarding after signup.
- Add granular permissions and server-side authorization for every mutation.
- Add real POS transaction tables and inventory ledger.
- Add idempotency and reconciliation architecture before payment integration.
- Add automated tests, observability, backups and audit workflows.
