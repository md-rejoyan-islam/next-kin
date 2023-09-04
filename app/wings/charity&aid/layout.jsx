// meta data
// meta data
export const metadata = {
  title: "KIN Charity & Aid",
  description: "Charity description",

  openGraph: {
    title: "KIN Charity & Aid",
    description: "KIN Charity & Aid Description",
    url: "KIN Charity & Aid url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/charity.webp",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/wings/charity.webp",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/wings/charity.webp" },
    ],
  },
  twitter: {
    title: "KIN Charity & Aid",
    description: " KIN Charity & Aid Description",
    images: {
      url: "/images/wings/charity.webp",
      alt: "KIN Charity & Aid",
    },
  },
};

export default function layout({ children }) {
  return children;
}
