import Link from "next/link";

const links = [
  ["Dashboard","/dashboard"],["POS","/pos"],["Inventory","/inventory"],
  ["Customers","/customers"],["Invoices","/invoices"],["Staff","/staff"],
  ["Control Tower","/control-tower"]
];

export function Nav() {
  return <aside className="w-full md:w-64 bg-[#10231c] text-white min-h-screen p-5">
    <div className="text-2xl font-black mb-8">Biashara<span className="text-emerald-300">OS</span></div>
    <nav className="space-y-1">
      {links.map(([label,href]) => <Link key={href} href={href} className="block rounded-xl px-4 py-3 hover:bg-white/10">{label}</Link>)}
    </nav>
    <form action="/auth/signout" method="post" className="mt-8">
      <button className="w-full text-left rounded-xl px-4 py-3 hover:bg-white/10">Sign out</button>
    </form>
  </aside>;
}
