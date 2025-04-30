import { CartProvider } from "@/app/components/context/CartContext";
import Navbar from "./components/navbar";
import Fotter from "./components/Fotter";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Fix from "./components/Fix";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Fix />
        <Navbar />
        <CartProvider>{children}</CartProvider>
        <Fotter />
      </body>
    </html>
  );
}
