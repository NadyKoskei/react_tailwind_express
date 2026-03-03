import "../index.css";
import logo from "../assets/images/logo.png";

const Header = () => {
  return (
    <>
      <header className="bg-blue-300 px-1 mb-3 shadow-xl">
        <nav className="flex justify-between container mx-auto items-center flex-col py-5 sm:flex-col md:flex-row ">
          <div className="flex flex-row justify-center items-center gap-2">
            <img src={logo} alt="logo" className="h-10 w-auto"/>
            <p className="text-lg font-bold">CHARITY MINDS</p>
          </div>
          <div className="flex flex-row">
            <ul className="flex gap-4 text-pink-600 ml-auto">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">LogIn</a>
              </li>
              <li>
                <a href="">Dashboard</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
};

export { Header };
