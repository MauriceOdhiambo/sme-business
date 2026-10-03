import { createClient } from "@/lib/supabase/server";
import { PageHeader } from "@/components/app-shell";
import Link from "next/link";

export default async function Dashboard(){
 const sb=await createClient(); if(!sb) return null;
 const [{data:products},{data:sales},{data:invoices},{data:customers}]=await Promise.all([
  sb.from("products").select("id,stock_quantity,reorder_level"),
  sb.from("sales").select("id,total,created_at").order("created_at",{ascending:false}).limit(10),
  sb.from("invoices").select("id,total,status"),
  sb.from("customers").select("id")
 ]);
 const salesTotal=(sales??[]).reduce((a,x)=>a+Number(x.total),0);
 const outstanding=(invoices??[]).filter(x=>x.status!=="paid").reduce((a,x)=>a+Number(x.total),0);
 const low=(products??[]).filter(x=>Number(x.stock_quantity)<=Number(x.reorder_level)).length;
 const cards=[["Sales today",`KES ${salesTotal.toLocaleString()}`],["Outstanding invoices",`KES ${outstanding.toLocaleString()}`],["Customers",String(customers?.length??0)],["Low stock",String(low)]];
 return <><PageHeader title="Business dashboard" description="Your live operating view." action={<Link className="btn btn-primary" href="/pos">Open POS</Link>}/>
 <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4">{cards.map(([a,b])=><div className="card p-5" key={a}><div className="text-sm text-[#66756e]">{a}</div><div className="text-3xl font-black mt-2">{b}</div></div>)}</div>
 <div className="card p-6 mt-6"><h2 className="font-black text-xl">Recent sales</h2><div className="overflow-x-auto mt-3"><table><thead><tr><th>Reference</th><th>Amount</th><th>Date</th></tr></thead><tbody>{(sales??[]).map(x=><tr key={x.id}><td>{x.id.slice(0,8)}</td><td>KES {Number(x.total).toLocaleString()}</td><td>{new Date(x.created_at).toLocaleString()}</td></tr>)}</tbody></table></div></div></>;
}
