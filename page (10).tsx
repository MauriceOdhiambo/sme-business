 "use client";
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Signup() {
  const [name,setName]=useState("");const [email,setEmail]=useState("");const [password,setPassword]=useState("");const [business,setBusiness]=useState("");const [error,setError]=useState("");const router=useRouter();
  async function submit(e:React.FormEvent){e.preventDefault();setError("");const sb=createClient();if(!sb){setError("Supabase is not configured. Add the Vercel environment variables.");return;}
    const {data,error}=await sb.auth.signUp({email,password,options:{data:{full_name:name,business_name:business}}});
    if(error){setError(error.message);return;}
    if(data.session) router.push("/dashboard"); else setError("Account created. Check your email to confirm your account, then sign in.");
  }
  return <main className="min-h-screen grid place-items-center p-6"><form onSubmit={submit} className="card p-8 w-full max-w-lg"><h1 className="text-3xl font-black">Create your business</h1><p className="text-[#66756e] mt-2 mb-7">Start with the operating foundation. Payments and external integrations can be connected later.</p>
    {error&&<div className="bg-red-50 text-red-700 p-3 rounded-xl mb-4">{error}</div>}
    <label className="label">Your name<input className="input" value={name} onChange={e=>setName(e.target.value)} required/></label>
    <label className="label mt-4">Business name<input className="input" value={business} onChange={e=>setBusiness(e.target.value)} required/></label>
    <label className="label mt-4">Email<input className="input" type="email" value={email} onChange={e=>setEmail(e.target.value)} required/></label>
    <label className="label mt-4">Password<input className="input" type="password" minLength={8} value={password} onChange={e=>setPassword(e.target.value)} required/></label>
    <button className="btn btn-primary w-full mt-6">Create account</button><p className="text-sm mt-5">Already registered? <Link className="text-emerald-700 font-bold" href="/auth/login">Sign in</Link></p>
  </form></main>;
}
