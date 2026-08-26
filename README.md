# BEZAN

Moderní vícestránkový firemní web společnosti BEZAN s.r.o. z Frýdku-Místku.

## Spuštění

```bash
pnpm install
pnpm dev
```

Produkční build:

```bash
pnpm build
pnpm start
```

## Obsah

- Next.js 16 App Router + TypeScript
- samostatné stránky hlavních služeb
- SEO metadata, canonical URL, sitemap, robots a strukturovaná data
- Open Graph obrázek generovaný přes `next/og`
- přesměrování důležitých URL původního webu
- přístupná navigace, mobilní menu a vlastní 404

## Kontaktní formulář

Formulář obsahuje validaci, stav odesílání, potvrzení a honeypot pole. Záměrně zatím neposílá e-maily. Pro produkční odesílání doplňte route handler nebo Server Action a napojte službu typu Resend. Příslušné proměnné jsou uvedené v `.env.example`.

## Obsahové podklady

Texty a firemní údaje vycházejí z původního webu `bezan.cz`. Kompletní seznam techniky, aktuální fotogalerie a novější reference vyžadují potvrzení společnosti.

