import { Link } from "react-router-dom";

// Import Assets
import schita from "../../assets/main/schita.gif";
import dictionar from "../../assets/main/dictionar.webp";
import informatica from "../../assets/main/informatica.webp";
import matematica from "../../assets/main/matematica.webp";
import cti from "../../assets/main/cti.webp";
import activitate from "../../assets/main/activitate.webp";
import asmi from "../../assets/main/tebeu_editat2.png";
import burse from "../../assets/main/burse.webp";
import cariere_si_internship from "../../assets/main/cariere_si_internship.webp";
import conducere from "../../assets/main/conducere.webp";
import echipa from "../../assets/main/echipa.webp";
import extracurriculare from "../../assets/main/extracurriculare.webp";
import facilitati from "../../assets/main/facilitati.webp";
import regulament from "../../assets/main/regulament.webp";
import cazare from "../../assets/main/camine.png";
import reprezentare_studenteasca from "../../assets/main/reprezentare_studenteasca.webp";
import mesaj_liviu from "../../assets/main/admitere_editat_5.png";
import mesaj_decanat from "../../assets/main/haret-1-1190x396.jpg"

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
    if (url === 3) {
      return dictionar;
    } else if (url === 5) {
      return informatica;
    } else if (url === 4) {
      return matematica;
    } else if (url === 6) {
      return cti;
    } else if (url === 7) {
      return asmi;
    } else if (url === 8) {
      return activitate;
    } else if (url === 10) {
      return conducere;
    } else if (url === 12) {
      return regulament;
    } else if (url === 9) {
      return cazare;
    } else if (url === 11) {
      return burse;
    } else if (url === 13) {
      return reprezentare_studenteasca;
    } else if (url === 15) {
      return facilitati;
    } else if (url === 14) {
      return cariere_si_internship;
    } else if (url === 16) {
      return extracurriculare;
    } else if (url === 20) {
      return echipa;
    }else if (url === 18) {
      return schita;
    }else if (url === 1) {
      return mesaj_liviu;
    }else if (url === 2) {
      return mesaj_decanat;
    }
  };

  const getID = (index) => {
    if (index === 0) {
      return "mesajul-presedintelui-asmi";
    } else if (index === 1) {
      return "mesajul-decanatului";
    } else if (index === 2) {
      return "dictionar";
    } else if (index === 3) {
      return "matematica";
    } else if (index === 4) {
      return "informatica";
    } else if (index === 5) {
      return "cti";
    } else if (index === 6) {
      return "asmi";
    } else if (index === 7) {
      return "activitate-didactica";
    } else if (index === 8) {
      return "cazare";
    } else if (index === 9) {
      return "conducere-fmi";
    } else if (index === 10) {
      return "burse";
    } else if (index === 11) {
      return "regulament";
    } else if (index === 12) {
      return "reprezentare-studenteasca";
    } else if (index === 13) {
      return "cariere-si-internship";
    } else if (index === 14) {
      return "facilitati";
    }if (index === 15) {
      return "extracurriculare";
    }if (index === 20) {
      return "echipa";
    }if (index === 17) {
      return "harta";
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
