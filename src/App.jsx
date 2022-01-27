import logo from "./profilee2.png";
import logo2 from "./profilee.png";
import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillFacebook,
} from "react-icons/ai";
import "./App.css";
import { useTranslation } from "react-i18next";
import { Suspense } from "react";
import { Link } from "react-router-dom";

function Welcome() {
  const { t, i18n } = useTranslation("welcome");

  function changeToSpanish() {
    i18n.changeLanguage("es");
  }
  function changeToEnglish() {
    i18n.changeLanguage("en");
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className="cuadro">
          <div className="card">
            <img className="logo" src={logo} alt="profile1" />
            <img className="img-top" src={logo2} alt="profile2" />
          </div>
          <p className="name">Carlos Sarmiento</p>

          <p className="intro">
            Desarrollador Web / Freelancer / Creador / Crypto Inversor{" "}
          </p>
          <div className="buttons">
            <ul>
              
              <li>
                <Link to="/">
                  <p> Blog Crypto</p>
                </Link>
              </li>
             
              <li>
                <Link to="/">
                  <p>Dogecoin Shop</p>
                </Link>
              </li>
              <li>
                <Link to="/">
                  <p>ETC project</p>
                </Link>
              </li>
              <li>
                <a href="https://www.youtube.com/channel/UC589dkKtdqNUsQLnWsT6ong">
                  <p>Canal MMA</p>
                </a>
              </li>
            </ul>
            <div></div>
          </div>

          <div className="donate">
            <p>Sigueme en redes sociales</p>
            <div className="social">
              <a href="https://twitter.com/sarmiente_">
                <AiFillTwitterCircle />
              </a>
              <a href="https://instagram.com/sarmiente">
                <AiFillInstagram />
              </a>
              <a href="https://www.facebook.com/Sarmiente">
                <AiFillFacebook />
              </a>
            </div>
            <br />

            <a
              target="__blank"
              className="donate-with-crypto"
              href="https://commerce.coinbase.com/checkout/24e84555-afce-4f09-bbeb-10b634deb485"
            >
              Comprame una cerveza! <span>🍺</span>
            </a>
            <script src="https://commerce.coinbase.com/v1/checkout.js?version=201807"></script>
          </div>
        </div>
      </header>
    </div>
  );
}

function App() {
  return (
    <Suspense fallback="Cargando pagina">
      <Welcome />
    </Suspense>
  );
}

export default App;
