import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";

export async function POST() {
  const sb=await createClient();
  if(sb) await sb.auth.signOut();
  redirect("/auth/login");
}
