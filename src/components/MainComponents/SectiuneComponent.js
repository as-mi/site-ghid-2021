import { Link } from "react-router-dom";

// Import Assets
import softbinator from "../../assets/main/softbinator.jpg";
import dictionar from "../../assets/main/dictionar.webp";
import informatica from "../../assets/main/informatica.webp";
import matematica from "../../assets/main/matematica.webp";
import cti from "../../assets/main/cti.webp";
import activitate from "../../assets/main/activitate.webp";
import asmi from "../../assets/main/asmi.webp";
import burse from "../../assets/main/burse.webp";
import cariere_si_internship from "../../assets/main/cariere_si_internship.webp";
import conducere from "../../assets/main/conducere.webp";
import echipa from "../../assets/main/echipa.webp";
import extracurriculare from "../../assets/main/extracurriculare.webp";
import facilitati from "../../assets/main/facilitati.webp";
import regulament from "../../assets/main/regulament.webp";
import reprezentare_studenteasca from "../../assets/main/reprezentare_studenteasca.webp";

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
      return softbinator;
    } else if (url === 2) {
      return dictionar;
    } else if (url === 3) {
      return informatica;
    } else if (url === 4) {
      return matematica;
    } else if (url === 5) {
      return cti;
    } else if (url === 6) {
      return asmi;
    } else if (url === 7) {
      return activitate;
    } else if (url === 8) {
      return conducere;
    } else if (url === 9) {
      return regulament;
    } else if (url === 10) {
      return burse;
    } else if (url === 11) {
      return reprezentare_studenteasca;
    } else if (url === 12) {
      return facilitati;
    } else if (url === 13) {
      return cariere_si_internship;
    } else if (url === 14) {
      return extracurriculare;
    } else if (url === 15) {
      return echipa;
    }
  };

  const getID = (index) => {
    if (index === 0) {
      return "softbinator";
    } else if (index === 1) {
      return "dictionar";
    } else if (index === 2) {
      return "informatica";
    } else if (index === 3) {
      return "matematica";
    } else if (index === 4) {
      return "cti";
    } else if (index === 5) {
      return "asmi";
    } else if (index === 6) {
      return "activitate-didactica";
    } else if (index === 7) {
      return "conducere";
    } else if (index === 8) {
      return "regulament";
    } else if (index === 9) {
      return "burse";
    } else if (index === 10) {
      return "reprezentare-studenteasca";
    } else if (index === 11) {
      return "facilitati";
    } else if (index === 12) {
      return "cariere-si-internship";
    } else if (index === 13) {
      return "extracurriculare";
    } else if (index === 14) {
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
