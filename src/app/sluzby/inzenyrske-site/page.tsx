import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const service = services[1];
export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/sluzby/inzenyrske-site" } };
export default function Page(){return <ServicePage service={service}><h2>Sítě v terénu, který známe</h2><p>Zajišťujeme výkopy kanalizace, pokládku potrubí a kompletní montáže kanalizačních přípojek. Realizujeme nové kanalizační sítě i opravy a přeložky stávajících systémů.</p><h3>Typický rozsah prací</h3><ul><li>výkopy a příprava lože pro potrubí,</li><li>pokládka potrubí a kompletace kanalizačních přípojek,</li><li>nové splaškové a dešťové kanalizace,</li><li>opravy a přeložky stávajících systémů,</li><li>drenážní odvodnění problémových lokalit,</li><li>následné terénní úpravy.</li></ul><div className="note">Konkrétní technické řešení vždy vychází z dokumentace, místních podmínek a požadavků správce sítě.</div></ServicePage>}
