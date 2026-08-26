import type { MetadataRoute } from "next";
import { services, site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const routes=["","/sluzby","/o-spolecnosti","/reference","/technika","/kontakt","/poptavka",...services.map(s=>`/sluzby/${s.slug}`)]; return routes.map((route)=>({url:`${site.url}${route}`,lastModified:new Date(),changeFrequency:route===""?"monthly":"yearly",priority:route===""?1:.7})); }
