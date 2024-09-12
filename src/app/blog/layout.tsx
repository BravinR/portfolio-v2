import { Footer } from "@/components/Footer";
import NavBar from "@/components/NavBar";

export default function BlogLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {children}
      <Footer />
    </section>
  );
}
