"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  ["/", "Úvod"],
  ["/sluzby", "Služby"],
  ["/reference", "Reference"],
  ["/technika", "Technika"],
  ["/o-spolecnosti", "O společnosti"],
  ["/kontakt", "Kontakt"]
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="site-header">
      <a className="skip-link" href="#obsah">Přejít na obsah</a>
      <div className="utility">
        <div className="wrap utility-inner">
          <span>Stavební firma · Frýdek-Místek</span>
          <div><a href="tel:+420736771517">+420 736 771 517</a><span aria-hidden="true">•</span><a href="mailto:bezan@bezan.cz">bezan@bezan.cz</a></div>
        </div>
      </div>
      <div className="wrap nav-row">
        <Link href="/" className="brand" aria-label="BEZAN – úvodní stránka">
          <Image src="https://www.bezan.cz/images/logo-b.png" alt="BEZAN stavební firma" width={237} height={58} priority />
        </Link>
        <button className="menu-button" aria-expanded={open} aria-controls="hlavni-navigace" onClick={() => setOpen(!open)}>
          <span>Menu</span><i aria-hidden="true" />
        </button>
        <nav id="hlavni-navigace" className={open ? "nav open" : "nav"} aria-label="Hlavní navigace">
          {links.map(([href, label]) => (
            <Link key={href} href={href} className={pathname === href || (href !== "/" && pathname.startsWith(href)) ? "active" : ""} onClick={() => setOpen(false)}>{label}</Link>
          ))}
          <Link href="/poptavka" className="button small" onClick={() => setOpen(false)}>Nezávazná poptávka</Link>
        </nav>
      </div>
    </header>
  );
}
