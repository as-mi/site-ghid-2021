// Import Assets
import FBicon from "../assets/footer/facebook.svg";
import Instagramicon from "../assets/footer/instagram.svg";
import Linkedinicon from "../assets/footer/linkedin.svg";

// Import Animations
import { motion } from "framer-motion";
import { useScroll } from "./animations/useScroll";
import {
  footerMainAnim,
  footerTextAnim,
  footerCredAnim,
} from "./animations/footerAnimations";

const FooterComponent = () => {
  const [element, controls] = useScroll();

  return (
    <motion.footer
      className="footer"
      variants={footerMainAnim}
      initial="show"
      animate={controls}
      ref={element}
    >
      <section className="footer__contact">
        <div className="footer__contact__left">
          <div className="hide">
            <motion.a
              href="https://www.asmi.ro/"
              target="_blank"
              rel="noreferrer"
            > <motion.h1 variants={footerTextAnim}>ASMI</motion.h1>
            </motion.a>
          </div>

          <div className="footer__contact__left__card">
            <div className="hide">
              <motion.a
                href="https://www.facebook.com/asmi.ub"
                target="_blank"
                rel="noreferrer"
                variants={footerTextAnim}
              >
                <img
                  className="footer__contact__left__img"
                  src={FBicon}
                  alt="facebook"
                ></img>
              </motion.a>
            </div>

            <div className="hide">
              <motion.a
                href="https://www.instagram.com/asmi.ub/?hl=ro"
                target="_blank"
                rel="noreferrer"
                variants={footerTextAnim}
              >
                <img
                  className="footer__contact__left__img"
                  src={Instagramicon}
                  alt="instagram"
                ></img>
              </motion.a>
            </div>

            <div className="hide">
              <motion.a
                href="https://www.linkedin.com/company/asmi-ub"
                target="_blank"
                rel="noreferrer"
                variants={footerTextAnim}
              >
                <img
                  className="footer__contact__left__img"
                  src={Linkedinicon}
                  alt="linked"
                ></img>
              </motion.a>
            </div>
          </div>
        </div>
        <div className="footer__contact__right">
          <div className="hide">
            <motion.h1 variants={footerTextAnim}>
              Facultatea de Matematică și Informatică
            </motion.h1>
          </div>

          <div className="hide">
            <motion.p variants={footerTextAnim}>
              Str. Academiei, nr.14, 010014, București
            </motion.p>
          </div>

          <div className="hide">
            <motion.p variants={footerTextAnim}>
              secretariat@fmi.unibuc.ro
            </motion.p>
          </div>

          <div className="hide">
            <motion.p variants={footerTextAnim}>(+40)21 314 3508</motion.p>
          </div>
        </div>
      </section>
      <section className="footer__credits">
        <div className="hide">
          <motion.p variants={footerCredAnim}>
            Copyright &copy; ASMI 2021. All Rights Reserverd.
          </motion.p>
        </div>
      </section>
    </motion.footer>
  );
};

export default FooterComponent;
