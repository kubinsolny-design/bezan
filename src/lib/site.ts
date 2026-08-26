export const site = {
  name: "BEZAN s.r.o.",
  legalName: "BEZAN s.r.o.",
  description: "Zemní a výkopové práce, inženýrské sítě, recyklace stavebního odpadu a další stavební služby ve Frýdku-Místku.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://bezan-web-hehu.vercel.app",
  address: "Dlouhá 491, 738 01 Frýdek-Místek",
  phone: "+420 736 771 517",
  phoneWaste: "+420 731 414 392",
  email: "bezan@bezan.cz",
  dataBox: "pfkrjfq",
  ico: "61945552",
  dic: "CZ61945552",
  hours: "Po–Pá 6:30–15:00"
};

export const services = [
  {
    slug: "zemni-prace",
    title: "Zemní a výkopové práce",
    eyebrow: "Od hrubého výkopu po finální terén",
    description: "Terénní úpravy rovných i svažitých ploch, výkopy pro inženýrské sítě, příprava podloží a základových desek i rekonstrukce chodníků.",
    image: "https://www.bezan.cz/images/img8.jpg"
  },
  {
    slug: "inzenyrske-site",
    title: "Kanalizace, vodovody a odvodnění",
    eyebrow: "Kompletní montáže a opravy sítí",
    description: "Výkopy, pokládka potrubí, kanalizační přípojky, nové kanalizační sítě, přeložky a drenážní odvodnění problémových lokalit.",
    image: "https://www.bezan.cz/images/img2.png"
  },
  {
    slug: "recyklace",
    title: "Stavební odpad a recyklát",
    eyebrow: "Uložení, recyklace a prodej materiálu",
    description: "Příjem vybraného stavebního a demoličního odpadu, prodej recyklovaných materiálů, tříděné zeminy a vážení vozidel do 60 tun.",
    image: "https://www.bezan.cz/images/sut.jpg"
  },
  {
    slug: "ubytovani",
    title: "Chatová osada Olešná",
    eyebrow: "Celoroční ubytování pod Beskydami",
    description: "Chatky s vlastním sociálním zařízením a kuchyňkou v rekreačním areálu přehrady Olešná ve Frýdku-Místku.",
    image: "https://www.bezan.cz/images/header.png"
  }
] as const;
