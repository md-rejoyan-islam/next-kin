// meta data
export const metadata = {
  title: "KIN Social Awareness",
  description: "KIN Social Awareness description.",

  openGraph: {
    title: "KIN Social Awareness",
    description: "KIN Social Awareness Description",
    url: "KIN Social Awareness url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/social.webp",
        width: 800,
        height: 600,
        alt: "KIN Social Awareness",
      },
      {
        url: "/images/wings/social.webp",
        width: 900,
        height: 800,
        alt: "KIN Social Awareness",
      },

      { url: "/images/wings/social.webp" },
    ],
  },
  twitter: {
    title: "KIN Social Awareness",
    description: " KIN Social Awareness Description",
    images: {
      url: "/images/wings/social.webp",
      alt: "KIN Social Awareness ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
