import Link from "next/link";

export default function Home() {
  return <main>
    <header className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
      <div className="text-2xl font-black">Biashara<span className="text-emerald-700">OS</span></div>
      <div className="flex gap-3"><Link className="btn" href="/auth/login">Sign in</Link><Link className="btn btn-primary" href="/auth/signup">Start free</Link></div>
    </header>
    <section className="max-w-7xl mx-auto px-6 py-20">
      <span className="badge">KENYA-FIRST SME OPERATING SYSTEM</span>
      <h1 className="text-5xl md:text-7xl font-black max-w-4xl mt-5 leading-tight">Run your business from one professional control centre.</h1>
      <p className="text-xl text-[#66756e] max-w-2xl mt-6">Sales, stock, customers, invoices, staff and management reporting in one connected workspace.</p>
      <div className="flex gap-3 mt-8"><Link className="btn btn-primary" href="/auth/signup">Create business</Link><Link className="btn" href="/auth/login">Sign in</Link></div>
    </section>
    <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-5">
      {["POS & sales","Inventory & customers","Management control tower"].map(x=><div className="card p-6" key={x}><h2 className="font-black text-xl">{x}</h2><p className="text-[#66756e] mt-2">Built as a single operating system for growing Kenyan SMEs.</p></div>)}
    </section>
  </main>;
}
