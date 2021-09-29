import { Link } from "react-router-dom";

// Import Animations
import { motion } from "framer-motion";
import { useScroll } from "../animations/useScroll";
import { headerFade } from "../animations/headerAnimations";

const CuprinsComponent = () => {
  const [element, controls] = useScroll();

  return (
    <motion.section
      className="main__cuprins"
      variants={headerFade}
      animate={controls}
      initial="hidden"
      ref={element}
    >
      <h1>Cuprins</h1>

      <div className="main__cuprins__content">
        <Link to="/pages/dictionar">
          <div className="main__cuprins__content__element">
            <h3>Dicționar studențesc</h3>
            <h2>1</h2>
          </div>
        </Link>
        <Link to="/pages/informatica">
          <div className="main__cuprins__content__element">
            <h3>Domeniul Informatică</h3>
            <h2>2</h2>
          </div>
        </Link>
        <Link to="/pages/matematica">
          <div className="main__cuprins__content__element">
            <h3>Domeniul Matematică</h3>
            <h2>3</h2>
          </div>
        </Link>
        <Link to="/pages/cti">
          <div className="main__cuprins__content__element">
            <h3>Domeniul CTI</h3>
            <h2>4</h2>
          </div>
        </Link>
        <Link to="/pages/asmi">
          <div className="main__cuprins__content__element">
            <h3>
              Asociația studenților la
              <span> Matematică și Informatică - ASMI</span>
            </h3>
            <h2>5</h2>
          </div>
        </Link>
        <Link to="/pages/activitate-didactica">
          <div className="main__cuprins__content__element">
            <h3>Activitatea Didactică</h3>
            <h2>6</h2>
          </div>
        </Link>
        <Link to="/pages/conducere-fmi">
          <div className="main__cuprins__content__element">
            <h3>Conducerea Facultății</h3>
            <h2>7</h2>
          </div>
        </Link>
        <Link to="/pages/regulament-fmi">
          <div className="main__cuprins__content__element">
            <h3>Regulamente FMI</h3>
            <h2>8</h2>
          </div>
        </Link>
        <Link to="/pages/burse">
          <div className="main__cuprins__content__element">
            <h3>Burse</h3>
            <h2>9</h2>
          </div>
        </Link>
        <Link to="/pages/reprezentare-studenteasca">
          <div className="main__cuprins__content__element">
            <h3>Reprezentare Studențească</h3>
            <h2>10</h2>
          </div>
        </Link>
        <Link to="/pages/facilitati">
          <div className="main__cuprins__content__element">
            <h3>Facilități</h3>
            <h2>11</h2>
          </div>
        </Link>
        <Link to="/pages/cariere-si-internship">
          <div className="main__cuprins__content__element">
            <h3>Cariere și internship</h3>
            <h2>12</h2>
          </div>
        </Link>
        <Link to="/pages/extracurriculare">
          <div className="main__cuprins__content__element">
            <h3>Extracurriculare</h3>
            <h2>13</h2>
          </div>
        </Link>
        <Link to="/pages/echipa">
          <div className="main__cuprins__content__element">
            <h3>Echipa ghidul bobocului 2021</h3>
            <h2>14</h2>
          </div>
        </Link>
      </div>
    </motion.section>
  );
};

export default CuprinsComponent;
