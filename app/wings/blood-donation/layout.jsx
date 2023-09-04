// meta data
export const metadata = {
  title: "KIN Blood",
  description:
    "The name of this organization is KIN, which means relative.Calamities have no specific time to appear and when it comes peoples seek the shelter. For the shelter they goes to their close relatives.",

  openGraph: {
    title: "KIN Blood",
    description: "Blood Description",
    url: "blood url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/logo/logo_white.png",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/logo/logo_white.png",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/logo/logo_white.png" },
    ],
  },
  twitter: {
    title: "KIN Blood Donation",
    description: " Blood Description",
    images: {
      url: "/images/logo/logo_white.png",
      alt: "KIN Blood ",
    },
  },
};

export default function layout({ children }) {
  return children;
}
