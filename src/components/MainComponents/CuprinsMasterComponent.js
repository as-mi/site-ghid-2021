// Import Animations
import { motion } from "framer-motion";
import { useScroll } from "../animations/useScroll";
import { headerFade } from "../animations/headerAnimations";

const CuprinsComponent = ({ sectiuni }) => {
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
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/mesajul-presedintelui-asmiM")}
        >
          <h3>Mesajul Președintelui ASMI</h3>
          <h2>1</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/mesajul-decanatuluiM")}
        >
          <h3>Mesajul Decanatului</h3>
          <h2>2</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/dictionarM")}
        >
          <h3>Dicționar studențesc</h3>
          <h2>3</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/structuraM")}
        >
          <h3>Matematică</h3>
          <h2>4</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/regulamenteM")}
        >
          <h3>Informatică</h3>
          <h2>5</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/cdosM")}
        >
          <h3>CTI</h3>
          <h2>6</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/drepturiM")}
        >
          <h3>ASMI</h3>
          <h2>7</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/butonrM")}
        >
          <h3>Activitatea Didactică</h3>
          <h2>8</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/reprezentareM")}
        >
          <h3>Cazare și cămine</h3>
          <h2>9</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/burseM")}
        >
          <h3>Conducerea Facultății</h3>
          <h2>10</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/camineM")}
        >
          <h3>Burse</h3>
          <h2>11</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/facilitatiM")}
        >
          <h3>Regulamente FMI</h3>
          <h2>12</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/conducereM")}
        >
          <h3>Reprezentare Studențească</h3>
          <h2>13</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/secretariatM")}
        >
          <h3>Cariere și internship</h3>
          <h2>14</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/asmiM")}
        >
          <h3>Facilități</h3>
          <h2>15</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/cariereM")}
        >
          <h3>Extracurriculare</h3>
          <h2>16</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/extra")}
        >
          <h3>Echipa ghidul bobocului 2024</h3>
          <h2>17</h2>
        </div>

        <div className="main__cuprins__content">
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/echipa")}
        >
          <h3>Harta FMI</h3>
          <h2>18</h2>
        </div>
      </div>
    </motion.section>
  );
};

export default CuprinsComponent;
