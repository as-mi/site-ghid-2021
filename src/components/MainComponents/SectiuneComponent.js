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

const SectiuneComponent = ({ sectiune }) => {
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

  return (
    <div className="main__sections__section">
      <h1>{sectiune.nume}</h1>

      <p>{sectiune.descriere}</p>

      <div className="main__sections__section__btn">
          <button>Vezi tot</button>
      </div>

      <div className="main__sections__section__image">
        <img
          src={getImage(sectiune.id)}
          alt={sectiune.imagineALT}
        />
      </div>
    </div>
  );
};

export default SectiuneComponent;
