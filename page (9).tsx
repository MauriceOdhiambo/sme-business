 "use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email,setEmail]=useState(""); const [password,setPassword]=useState(""); const [error,setError]=useState(""); const router=useRouter();
  async function submit(e:React.FormEvent){e.preventDefault();setError("");const sb=createClient();if(!sb){setError("Supabase is not configured. Add the Vercel environment variables.");return;}const {error}=await sb.auth.signInWithPassword({email,password});if(error){setError(error.message);return;}router.push("/dashboard");router.refresh();}
  return <main className="min-h-screen grid place-items-center p-6"><form onSubmit={submit} className="card p-8 w-full max-w-md"><h1 className="text-3xl font-black">Welcome back</h1><p className="text-[#66756e] mt-2 mb-7">Sign in to your business workspace.</p>
    {error&&<div className="bg-red-50 text-red-700 p-3 rounded-xl mb-4">{error}</div>}
    <label className="label">Email<input className="input" value={email} onChange={e=>setEmail(e.target.value)} type="email" required/></label>
    <label className="label mt-4">Password<input className="input" value={password} onChange={e=>setPassword(e.target.value)} type="password" required/></label>
    <button className="btn btn-primary w-full mt-6">Sign in</button><p className="text-sm mt-5">New business? <Link className="text-emerald-700 font-bold" href="/auth/signup">Create account</Link></p>
  </form></main>;
}
