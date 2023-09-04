// meta data
export const metadata = {
  title: "KIN Programs",
  description: "KIN Programs Distribution",

  openGraph: {
    title: "KIN Programs",
    description: "KIN Programs Description",
    url: "KIN Programs url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "url",
        width: 800,
        height: 600,
        alt: "KIN Programs",
      },
      {
        url: "url",
        width: 900,
        height: 800,
        alt: "KIN Programs",
      },

      { url: "url" },
    ],
  },
  twitter: {
    title: "KIN Programs",
    description: " KIN Programs Description",
    images: {
      url: "url",
      alt: "KIN Programs Distribution ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
