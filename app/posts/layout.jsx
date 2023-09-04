// meta data
export const metadata = {
  title: "KIN Posts ",
  description: "KIN Posts Distribution",

  openGraph: {
    title: "KIN Posts",
    description: "KIN Posts Description",
    url: "KIN Posts url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "url",
        width: 800,
        height: 600,
        alt: "KIN Posts",
      },
      {
        url: "url",
        width: 900,
        height: 800,
        alt: "KIN Posts",
      },

      { url: "url" },
    ],
  },
  twitter: {
    title: "KIN Posts",
    description: "KIN Posts Description",
    images: {
      url: "url",
      alt: "KIN Posts ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
