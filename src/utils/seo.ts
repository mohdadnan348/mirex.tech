import { Metadata } from "next";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  noIndex?: boolean;
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage = "https://mirextech.in/og-image.jpg",
  noIndex = false,
}: SEOProps): Metadata {
  const url = `https://mirextech.in${path}`;
  const fullTitle = `${title} | MirexTech - AI-Powered Software & Web Agency`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: url,
    },
    metadataBase: new URL("https://mirextech.in"),
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: "MirexTech",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: !noIndex,
      follow: !noIndex,
    },
  };
}
