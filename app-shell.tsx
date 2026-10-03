import { Nav } from "./nav";

export function AppShell({ children }: { children: React.ReactNode }) {
  return <div className="min-h-screen md:flex"><Nav/><main className="flex-1 p-5 md:p-8 max-w-[1600px]">{children}</main></div>;
}

export function PageHeader({ title, description, action }: {title:string;description?:string;action?:React.ReactNode}) {
  return <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-7">
    <div><h1 className="text-3xl font-black">{title}</h1>{description && <p className="text-[#66756e] mt-1">{description}</p>}</div>
    {action}
  </div>;
}
