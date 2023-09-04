"use client";
import Header from "@/components/shared/header/Header";
import "./globals.css";
import { Hind_Siliguri } from "next/font/google";
import Footer from "@/components/shared/footer/Footer";
import "react-photo-view/dist/react-photo-view.css";
import { Provider } from "react-redux";
import store from "@/store/store";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "animate.css/animate.min.css";

const hindSiliguri = Hind_Siliguri({
  subsets: ["bengali"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="owner" content="KIN,A Voluntary Organization" />
        <meta
          name="keywords"
          content="kinsust, kin ,kin school,kin blood donation"
        />
        <meta name="author" content="Md.Rejoyan Islam" />
        <meta property="fb:pages" content="KINSUST" />
        <meta name="copyright" content="KIN,A Voluntary Organization " />
        <meta property="og:type" content="website" />
        <meta property="twitter:title" content="KIN,A Voluntary Organization" />
        <link rel="canonical" href="https://kinsust.org" />
        {/* <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" /> */}
      </head>

      <body
        className={`${hindSiliguri.className} bg-transparent`}
      >
        <Provider store={store}>
          <Header />
          <main >{children}</main>
          <Footer />
        </Provider>
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </body>
    </html>
  );
}
