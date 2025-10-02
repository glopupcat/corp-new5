import { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function SiteLayout({ children }: PropsWithChildren) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
