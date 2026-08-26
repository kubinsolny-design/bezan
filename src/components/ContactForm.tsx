"use client";

import { FormEvent, useState } from "react";

export function ContactForm() {
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setState("sending");
    window.setTimeout(() => setState("done"), 700);
  }

  if (state === "done") {
    return <div className="form-success" role="status"><strong>Poptávka je připravena.</strong><p>Ukázkový formulář zatím neposílá e-maily. Pro okamžitý kontakt volejte +420 736 771 517 nebo napište na bezan@bezan.cz.</p><button className="text-button" onClick={() => setState("idle")}>Vyplnit znovu</button></div>;
  }

  return (
    <form className="contact-form" onSubmit={submit}>
      <div className="form-grid">
        <label>Jméno a příjmení<input name="name" autoComplete="name" required /></label>
        <label>Telefon nebo e-mail<input name="contact" autoComplete="tel" required /></label>
        <label>Typ poptávky<select name="service" defaultValue="" required><option value="" disabled>Vyberte službu</option><option>Zemní a výkopové práce</option><option>Kanalizace, vodovody a odvodnění</option><option>Stavební odpad a recyklát</option><option>Jiná stavební práce</option></select></label>
        <label>Místo realizace<input name="location" autoComplete="street-address" /></label>
      </div>
      <label>Popis požadavku<textarea name="message" rows={5} required /></label>
      <label className="honeypot" aria-hidden="true">Web<input name="website" tabIndex={-1} autoComplete="off" /></label>
      <label className="consent"><input type="checkbox" required /> <span>Souhlasím se zpracováním údajů pro vyřízení této poptávky.</span></label>
      <p className="form-note">Formulář je připraven k napojení na e-mailovou službu; v této verzi zprávu neodesílá.</p>
      <button className="button" type="submit" disabled={state === "sending"}>{state === "sending" ? "Kontroluji…" : "Připravit poptávku"}</button>
    </form>
  );
}
