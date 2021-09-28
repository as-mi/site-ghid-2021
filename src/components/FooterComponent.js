// // Import FontAwesomeIcons
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faFacebookSquare } from "@fortawesome/free-solid-svg-icons";

// Import Assets
import FBicon from "../assets/footer/facebook.svg";
import Instagramicon from "../assets/footer/instagram.svg";
import Linkedinicon from "../assets/footer/linkedin.svg";

const FooterComponent = () => {
  return (
    <footer className="footer">
      <section className="footer__contact">
        <div className="footer__contact__left">
          <h1>ASMI</h1>

          <a href="https://www.facebook.com/asmi.ub" target="_blank" rel="noreferrer">
            <img
              className="footer__contact__left__img"
              src={FBicon}
              alt="facebook"
            ></img>
          </a>
          <a href="https://www.instagram.com/asmi.ub/?hl=ro" target="_blank" rel="noreferrer">
            <img
              className="footer__contact__left__img"
              src={Instagramicon}
              alt="instagram"
            ></img>
          </a>
          <a href="https://www.linkedin.com/company/asmi-ub" target="_blank" rel="noreferrer">
            <img
              className="footer__contact__left__img"
              src={Linkedinicon}
              alt="linked"
            ></img>
          </a>
        </div>
        <div className="footer__contact__right">
          <h1>Facultatea de Matematică și Informatică</h1>
          <p>Str. Academiei, nr.14, 010014, București</p>
          <p>secretariat@fmi.unibuc.ro</p>
          <p>(+40)21 314 3508</p>
        </div>
      </section>
      <section className="footer__credits">
        <p>Copyright &copy; ASMI 2021. All Rights Reserverd.</p>
      </section>
    </footer>
  );
};

export default FooterComponent;
