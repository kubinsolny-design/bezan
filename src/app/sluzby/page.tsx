import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export const metadata: Metadata = { title: "Stavební služby", description: "Zemní práce, kanalizace, vodovody, odvodnění, recyklace stavebního odpadu a ubytování u Olešné.", alternates: { canonical: "/sluzby" } };

export default function ServicesPage() {
  return <main id="obsah"><section className="page-hero"><div className="wrap"><p className="kicker">Kompletní přehled</p><h1>Naše služby</h1><p className="lead content-narrow">Stavební práce řešíme prakticky a s návazností jednotlivých kroků. Vyberte oblast, kterou potřebujete, nebo nám rovnou popište svůj projekt.</p></div></section><section className="section"><div className="wrap service-list">{services.map((service,index)=><Link className="service-row" href={`/sluzby/${service.slug}`} key={service.slug}><span className="service-num">0{index+1}</span><div className="service-thumb"><Image src={service.image} alt="" fill sizes="180px" /></div><div><p>{service.eyebrow}</p><h2>{service.title}</h2><span>{service.description}</span></div><span className="service-arrow" aria-hidden="true">↗</span></Link>)}</div></section></main>;
}
