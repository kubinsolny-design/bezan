import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { services } from "@/lib/site";

const service = services[3];
export const metadata: Metadata = { title: service.title, description: service.description, alternates: { canonical: "/sluzby/ubytovani" } };
export default function Page(){return <ServicePage service={service}><h2>Chatová osada u přehrady Olešná</h2><p>Chatová osada se nachází na okraji Frýdku-Místku v rekreačním areálu přehrady Olešná v podhůří Beskyd. V provozu je celoročně.</p><h3>Vybavení a kapacita</h3><ul><li>2lůžkové, 3lůžkové a 4lůžkové chatky a jedna 5lůžková chatka,</li><li>vlastní sprchový kout a WC,</li><li>malá kuchyňka s dvouplotýnkovým vařičem,</li><li>základní vybavení: talíře, příbory a sklenice.</li></ul><p>V sousedství se nachází aquapark, sportovní areál a trasy vhodné pro cyklistiku i in-line bruslení.</p><div className="note"><strong>Informace a rezervace</strong><br/><a href="tel:+420731414391">+420 731 414 391</a> · <a href="mailto:ubytovani@bezan.cz">ubytovani@bezan.cz</a> · <a href="https://www.ubytovani-olesna.cz">ubytovani-olesna.cz</a></div></ServicePage>}
