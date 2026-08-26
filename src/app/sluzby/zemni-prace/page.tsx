import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const service = services[0];
export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/sluzby/zemni-prace" } };
export default function Page(){return <ServicePage service={service}><h2>Od přípravy staveniště po finální úpravy</h2><p>Provádíme hrubé i jemné terénní práce na rovných i svažitých pozemcích. Rozsah vždy upřesníme podle místa, přístupu techniky a návazných konstrukcí.</p><div className="card-grid"><div className="info-card"><h3>Výkopy a podloží</h3><p>Výkopy pro inženýrské sítě a rodinné domy, příprava podloží, základové desky a betonáž.</p></div><div className="info-card"><h3>Úpravy terénu</h3><p>Modelování terénu, kultivace povrchu, rovnání a práce po dokončení stavby.</p></div><div className="info-card"><h3>Chodníky a komunikace</h3><p>Výstavba a rekonstrukce chodníků, zpevněných ploch a komunikací.</p></div><div className="info-card"><h3>Rekultivace</h3><p>Rekultivace území po těžbě nebo skládkách a skrývky ornice.</p></div></div><div className="note"><strong>Potřebujete přesnější rozsah?</strong><br/>Pošlete místo realizace, stručný popis a dostupnou dokumentaci. Ozveme se k dalšímu postupu.</div></ServicePage>}
