import "../index.css";
import { Footer } from "../components/footer.jsx";
import { Header } from "../components/header.jsx";
import { DashBoard } from "../components/dashboard.jsx";

function AdminPage() {
  return (
    <>
      <Header />
      <DashBoard />
      <Footer />
    </>
  );
}

export { AdminPage };
