import Link from "next/link";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer-grid">
        <div>
          <p className="footer-brand">BEZAN</p>
          <p>Stavební práce, inženýrské sítě a recyklace materiálu ve Frýdku-Místku.</p>
        </div>
        <div>
          <p className="footer-title">Kontakt</p>
          <a href={`tel:${site.phone.replace(/\s/g, "")}`}>{site.phone}</a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
          <span>{site.address}</span>
        </div>
        <div>
          <p className="footer-title">Rychlé odkazy</p>
          <Link href="/sluzby">Služby</Link>
          <Link href="/reference">Reference</Link>
          <Link href="/poptavka">Poptávka</Link>
        </div>
        <div>
          <p className="footer-title">Provozní doba</p>
          <span>{site.hours}</span>
          <span>IČ {site.ico}</span>
          <span>Datová schránka {site.dataBox}</span>
        </div>
      </div>
      <div className="wrap footer-bottom"><span>© {new Date().getFullYear()} BEZAN s.r.o.</span><span>DIČ {site.dic}</span></div>
    </footer>
  );
}
