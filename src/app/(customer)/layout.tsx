import Footer from "@/src/components/Footer";
import Navbar from "@/src/components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar />
      <div className="min-h-screen">{children}</div>
      <ToastContainer position="bottom-right" theme="dark" autoClose={3000} />
      <Footer />
    </div>
  );
}
