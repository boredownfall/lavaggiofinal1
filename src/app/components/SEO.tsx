import { useEffect } from "react";

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
}

export function SEO({
  title = "Lavaggio - Защита автомобиля полиуретановой пленкой PPF в Москве",
  description = "Премиальная студия защиты автомобилей в Москве. Полная оклейка и защита зон риска полиуретановой пленкой PPF. Гарантия 5 лет. Звоните: +7 (916) 036-89-01",
  keywords = "оклейка автомобиля пленкой, защитная пленка ppf, полиуретановая пленка москва, защита кузова автомобиля, антигравийная пленка, оклейка авто москва, детейлинг москва"
}: SEOProps) {
  useEffect(() => {
    document.title = title;

    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
      metaKeywords.setAttribute("content", keywords);
    } else {
      const meta = document.createElement("meta");
      meta.name = "keywords";
      meta.content = keywords;
      document.head.appendChild(meta);
    }

    const metaOgTitle = document.querySelector('meta[property="og:title"]');
    if (metaOgTitle) {
      metaOgTitle.setAttribute("content", title);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:title");
      meta.content = title;
      document.head.appendChild(meta);
    }

    const metaOgDescription = document.querySelector('meta[property="og:description"]');
    if (metaOgDescription) {
      metaOgDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:description");
      meta.content = description;
      document.head.appendChild(meta);
    }

    const metaOgType = document.querySelector('meta[property="og:type"]');
    if (!metaOgType) {
      const meta = document.createElement("meta");
      meta.setAttribute("property", "og:type");
      meta.content = "website";
      document.head.appendChild(meta);
    }

    const linkPreconnect = document.querySelector('link[rel="preconnect"][href="https://images.unsplash.com"]');
    if (!linkPreconnect) {
      const link = document.createElement("link");
      link.rel = "preconnect";
      link.href = "https://images.unsplash.com";
      document.head.appendChild(link);
    }
  }, [title, description, keywords]);

  return null;
}
