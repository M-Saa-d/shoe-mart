import { CartProvider } from "@/app/components/context/CartContext";
import Navbar from "./components/navbar";
import Fotter from "./components/Fotter";
import "bootstrap/dist/css/bootstrap.min.css";
import Fix from "./components/Fix";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastContainer />
        <Fix />
        <Navbar />
        <CartProvider>{children}</CartProvider>
        <Fotter />
      </body>
    </html>
  );
}
