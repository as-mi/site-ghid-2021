import { Link } from "react-router-dom";

// Import Assets
import dictionar from "../../assets/main/png/dictionar.png";
import informatica from "../../assets/main/png/informatica.png";
import matematica from "../../assets/main/png/matematica.png";
import cti from "../../assets/main/png/cti.png";
import activitate from "../../assets/main/png/activitate.png";
import asmi from "../../assets/main/png/asmi.png";
import burse from "../../assets/main/png/burse.png";
import cariere_si_internship from "../../assets/main/png/cariere_si_internship.png";
import conducere from "../../assets/main/png/conducere.png";
import echipa from "../../assets/main/png/echipa.png";
import extracurriculare from "../../assets/main/png/extracurriculare.png";
import facilitati from "../../assets/main/png/facilitati.png";
import regulament from "../../assets/main/png/regulament.png";
import reprezentare_studenteasca from "../../assets/main/png/reprezentare_studenteasca.png";

// Import Animations
import { motion } from "framer-motion";
import { useScroll } from "../animations/useScroll";
import {
  mainFadeAnim,
  mainTextDownAnim,
  mainTextUpAnim,
  mainButtonAnim,
  mainImageAnim,
} from "../animations/mainAnimations";

const SectiuneComponent = ({ sectiune, index }) => {
  const [element, controls] = useScroll();

  const getImage = (url) => {
    if (url === 1) {
      return dictionar;
    } else if (url === 2) {
      return informatica;
    } else if (url === 3) {
      return matematica;
    } else if (url === 4) {
      return cti;
    } else if (url === 5) {
      return asmi;
    } else if (url === 6) {
      return activitate;
    } else if (url === 7) {
      return conducere;
    } else if (url === 8) {
      return regulament;
    } else if (url === 9) {
      return burse;
    } else if (url === 10) {
      return reprezentare_studenteasca;
    } else if (url === 11) {
      return facilitati;
    } else if (url === 12) {
      return cariere_si_internship;
    } else if (url === 13) {
      return extracurriculare;
    } else if (url === 14) {
      return echipa;
    }
  };

  const getID = (index) => {
    if (index === 0) {
      return "dictionar";
    } else if (index === 1) {
      return "informatica";
    } else if (index === 2) {
      return "matematica";
    } else if (index === 3) {
      return "cti";
    } else if (index === 4) {
      return "asmi";
    } else if (index === 5) {
      return "activitate-didactica";
    } else if (index === 6) {
      return "conducere";
    } else if (index === 7) {
      return "regulament";
    } else if (index === 8) {
      return "burse";
    } else if (index === 9) {
      return "reprezentare-studenteasca";
    } else if (index === 10) {
      return "facilitati";
    } else if (index === 11) {
      return "cariere-si-internship";
    } else if (index === 12) {
      return "extracurriculare";
    } else if (index === 13) {
      return "echipa";
    }
  };

  return (
    <motion.div
      className="main__sections__section"
      variants={mainFadeAnim}
      animate={controls}
      initial="hidden"
      ref={element}
      id={getID(index)}
    >
      <div className="hide">
        <motion.h1 variants={mainTextUpAnim}>{sectiune.nume}</motion.h1>
      </div>

      <div className="hide">
        <motion.p variants={mainTextDownAnim}>{sectiune.descriere}</motion.p>
      </div>

      <div className="main__sections__section__btn">
        <Link to={"/pages/" + sectiune.href}>
          <motion.button variants={mainButtonAnim}>Vezi tot</motion.button>
        </Link>
      </div>

      <div className="main__sections__section__image">
        <motion.img
          variants={mainImageAnim}
          src={getImage(sectiune.id)}
          alt={sectiune.imagineALT}
        />
      </div>
    </motion.div>
  );
};

export default SectiuneComponent;
