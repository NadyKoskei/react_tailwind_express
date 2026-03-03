
import "../index.css";
import { Footer } from "../components/footer.jsx";
import { Header } from "../components/header.jsx";
import { RegForm } from "../components/register.jsx";

function RegisterPage() {
  return (
    <>
<Header />
<RegForm />
<Footer />
    </>
  );
}

export {RegisterPage} ;