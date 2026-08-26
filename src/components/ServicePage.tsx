import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

type Service = (typeof services)[number];

export function ServicePage({ service, children }: { service: Service; children: React.ReactNode }) {
  return (
    <main id="obsah">
      <section className="page-hero">
        <div className="wrap page-hero-grid">
          <div><p className="kicker">{service.eyebrow}</p><h1>{service.title}</h1><p className="lead">{service.description}</p><div className="button-row"><Link href="/poptavka" className="button">Poptat službu</Link><a className="button secondary" href="tel:+420736771517">Zavolat</a></div></div>
          <div className="page-visual"><Image src={service.image} alt="" fill sizes="(max-width: 800px) 100vw, 42vw" priority /></div>
        </div>
      </section>
      <section className="section"><div className="wrap content-narrow">{children}</div></section>
      <section className="related"><div className="wrap"><p className="kicker">Další služby</p><div className="related-links">{services.filter((item) => item.slug !== service.slug).map((item) => <Link key={item.slug} href={`/sluzby/${item.slug}`}>{item.title}<span aria-hidden="true">→</span></Link>)}</div></div></section>
    </main>
  );
}
