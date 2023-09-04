import { useSelector } from "react-redux";

export async function generateMetadata({ params }) {
    
  return {
    title: params.slug,
    description: "KIN Winter Cloth Distribution",

    openGraph: {
      title: "KIN Winter Cloth Distribution",
      description: "KIN Winter Cloth Distribution Description",
      url: "blood url",
      type: "website",
      siteName: "KIN,A Voluntary Organization",
      locale: "bn_BD",
      images: [
        {
          url: "/images/wings/winter.webp",
          width: 800,
          height: 600,
          alt: "KIN Winter Cloth Distribution",
        },
        {
          url: "/images/wings/winter.webp",
          width: 900,
          height: 800,
          alt: "KIN Winter Cloth Distribution",
        },

        { url: "/images/wings/winter.webp" },
      ],
    },
    twitter: {
      title: "KIN Winter Cloth Distribution",
      description: " KIN Winter Cloth Distribution Description",
      images: {
        url: "/images/wings/winter.webp",
        alt: "KIN Winter Cloth Distribution ",
      },
    },
  };
}

export default function layout({ children }) {
  return(children);
}

