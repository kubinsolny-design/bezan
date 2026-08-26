import Image from "next/image";
import Link from "next/link";
import { services } from "@/lib/site";

export default function Home() {
  return (
    <main id="obsah">
      <section className="hero">
        <Image className="hero-image" src="https://www.bezan.cz/images/header.png" alt="Bagr při západu slunce" fill sizes="100vw" priority />
        <div className="hero-shade" />
        <div className="wrap hero-content">
          <p className="kicker light">Stavební firma · Frýdek-Místek · od roku 1995</p>
          <h1>Práce, na kterou<br />je vidět.</h1>
          <p>Od prvního výkopu po hotovou komunikaci. Zemní práce, inženýrské sítě a odpovědné využití stavebního materiálu.</p>
          <div className="button-row"><Link href="/poptavka" className="button">Nezávazně poptat</Link><Link href="/sluzby" className="button ghost">Prohlédnout služby</Link></div>
        </div>
        <div className="hero-index wrap"><span>01</span><span>Výkop</span><i /><span>02</span><span>Realizace</span><i /><span>03</span><span>Hotovo</span></div>
      </section>

      <section className="section intro"><div className="wrap intro-grid"><div><p className="kicker">Co umíme</p><h2>Technika, zkušenost<br />a poctivé řemeslo.</h2></div><div><p className="lead">BEZAN je stavební firma z Frýdku-Místku. Specializujeme se na zemní a výkopové práce, chodníky, zpevněné plochy, kanalizace, odvodnění a inženýrské sítě.</p><Link className="text-link" href="/o-spolecnosti">Poznat naši firmu <span>→</span></Link></div></div></section>

      <section className="services-section"><div className="wrap"><div className="section-head"><div><p className="kicker">Naše služby</p><h2>Pro stavbu.<br />Pro terén. Pro město.</h2></div><p>Každou hlavní službu najdete na vlastní stránce s konkrétním rozsahem prací a přímým kontaktem.</p></div><div className="service-list">{services.map((service, index) => <Link className="service-row" href={`/sluzby/${service.slug}`} key={service.slug}><span className="service-num">0{index + 1}</span><div className="service-thumb"><Image src={service.image} alt="" fill sizes="180px" /></div><div><p>{service.eyebrow}</p><h3>{service.title}</h3></div><span className="service-arrow" aria-hidden="true">↗</span></Link>)}</div></div></section>

      <section className="proof"><div className="wrap proof-grid"><div className="proof-number"><strong>1995</strong><span>rok založení společnosti</span></div><div><p className="kicker light">Místní znalost</p><h2>Ve Frýdku-Místku<br />jsme doma.</h2><p>Provádíme výstavbu a rekonstrukce chodníků, komunikací i sítí. Vlastní recyklační zařízení pomáhá vracet stavební materiály zpět do oběhu.</p><Link href="/reference" className="button ghost">Vybrané realizace</Link></div></div></section>

      <section className="cta"><div className="wrap cta-inner"><div><p className="kicker">Máte projekt?</p><h2>Pojďme ho probrat.</h2></div><div><a href="tel:+420736771517" className="cta-phone">+420 736 771 517</a><Link href="/poptavka" className="button dark">Napsat poptávku</Link></div></div></section>
    </main>
  );
}
