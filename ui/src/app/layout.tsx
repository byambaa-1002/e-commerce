import "@/styles/globals.css";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/layout/Header";
import { CartProvider } from "./providers";
import { ProductProvider } from "./providers/ProdcutProvider";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <CartProvider>
      <ProductProvider>
        <html lang="en">
          <body className="min-h-screen flex flex-col justify-between bg-[#F7F7F8]">
            <Header />
            {children}
            <Footer />
          </body>
        </html>
      </ProductProvider>
    </CartProvider>
  );
};
export default RootLayout;
