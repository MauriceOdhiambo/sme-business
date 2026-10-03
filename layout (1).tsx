import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { AppShell } from "@/components/app-shell";

export default async function ProtectedLayout({children}:{children:React.ReactNode}) {
  const sb=await createClient();
  if(!sb) return <div className="min-h-screen grid place-items-center p-6"><div className="card p-8 max-w-xl"><h1 className="text-2xl font-black">Supabase configuration required</h1><p className="text-[#66756e] mt-2">Set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in Vercel, then redeploy.</p></div></div>;
  const {data:{user}}=await sb.auth.getUser();
  if(!user) redirect("/auth/login");
  return <AppShell>{children}</AppShell>;
}
