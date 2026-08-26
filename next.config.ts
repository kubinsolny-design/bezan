import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: "https", hostname: "www.bezan.cz", pathname: "/images/**" }]
  },
  async redirects() {
    return [
      { source: "/cz/0317-nase-sluzby.html", destination: "/sluzby", permanent: true },
      { source: "/cz/0328-terenni-vykopove-a-zemni-prace.html", destination: "/sluzby/zemni-prace", permanent: true },
      { source: "/cz/0329-kanalizace-vodovody-a-odvodneni.html", destination: "/sluzby/inzenyrske-site", permanent: true },
      { source: "/cz/0339-ulozeni-stavebniho-odpadu-a-prodej-recyklatu.html", destination: "/sluzby/recyklace", permanent: true },
      { source: "/cz/0338-ubytovani-v-chatkach.html", destination: "/sluzby/ubytovani", permanent: true },
      { source: "/cz/0915-reference.html", destination: "/reference", permanent: true },
      { source: "/cz/0336-technika.html", destination: "/technika", permanent: true },
      { source: "/cz/0332-kontakt.html", destination: "/kontakt", permanent: true }
    ];
  }
};

export default nextConfig;
