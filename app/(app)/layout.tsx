import {createClient} from '@/lib/supabase/server';import {redirect} from 'next/navigation';import {AppShell} from '@/components/app-shell';
export default async function Layout({children}:{children:React.ReactNode}){const supabase=await createClient();const {data:{claims}}=await supabase.auth.getClaims();if(!claims)redirect('/auth/login');return <AppShell>{children}</AppShell>}
