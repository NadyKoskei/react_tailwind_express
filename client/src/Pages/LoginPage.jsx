
import "../index.css";
import { Footer } from "../components/footer.jsx";
import { Header } from "../components/header.jsx";
import { LogForm } from "../components/login.jsx";

function LoginPage() {
  return (
    <>
<Header />
<LogForm />
<Footer />
    </>
  );
}

export {LoginPage} ;