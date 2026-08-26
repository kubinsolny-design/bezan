import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = { title: "Nezávazná poptávka", description: "Popište stavební práce, zemní práce, přípojku nebo požadovaný materiál. BEZAN, Frýdek-Místek.", alternates: { canonical: "/poptavka" } };
export default function Page(){return <main id="obsah"><section className="page-hero"><div className="wrap"><p className="kicker">První krok</p><h1>Nezávazná poptávka</h1><p className="lead content-narrow">Napište, co potřebujete, kde se práce nachází a jaký je očekávaný termín. Pro rychlé řešení volejte +420 736 771 517.</p></div></section><section className="section"><div className="wrap content-narrow"><ContactForm /></div></section></main>}
