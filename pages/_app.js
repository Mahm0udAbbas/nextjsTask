import { StickyNavbar } from "@/components/navbar/MyNavBar";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <StickyNavbar />
      <Component {...pageProps} />;
    </>
  );
}
