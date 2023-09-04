// meta data
export const metadata = {
  title: "KIN Executive Committee",
  description: "school description",

  openGraph: {
    title: "KIN Executive Committee",
    description: "KIN Executive Committee Description",
    url: "KIN Executive Committee url",
    type: "website",
    siteName: "KIN,A Voluntary Organization",
    locale: "bn_BD",
    images: [
      {
        url: "/images/wings/blood.jpg",
        width: 800,
        height: 600,
        alt: "KIN Blood Image",
      },
      {
        url: "/images/wings/blood.jpg",
        width: 900,
        height: 800,
        alt: "KIN Blood Image",
      },

      { url: "/images/wings/blood.jpg" },
    ],
  },
  twitter: {
    title: "KIN Executive Committee",
    description: " School Description",
    images: {
      url: "/images/wings/blood.jpg",
      alt: "KIN Executive Committee ",
    },
  },
};

export default function layout({ children }) {
  return <div>{children}</div>;
}
