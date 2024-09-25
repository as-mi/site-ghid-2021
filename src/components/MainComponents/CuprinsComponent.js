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
          onClick={() => window.location.replace("/pages/mesajul-presedintelui-asmi")}
        >
          <h3>Mesajul Președintelui ASMI</h3>
          <h2>1</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/mesajul-decanatului")}
        >
          <h3>Mesajul Decanatului</h3>
          <h2>2</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/dictionar")}
        >
          <h3>Dicționar studențesc</h3>
          <h2>3</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/introducere")}
        >
          <h3>Introducere</h3>
          <h2>4</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/specializari")}
        >
          <h3>Specializări</h3>
          <h2>5</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/structura")}
        >
          <h3>Structura anului universitar</h3>
          <h2>6</h2>
        </div>


        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/credite")}
        >
          <h3>Credite</h3>
          <h2>7</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/orar")}
        >
          <h3>Cum citim orarul?</h3>
          <h2>8</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/regulamente")}
        >
          <h3>Despre Regulamente</h3>
          <h2>9</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/cdos")}
        >
          <h3>Codul drepturilor și obligațiilor studențești</h3>
          <h2>10</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/drepturi")}
        >
          <h3>drepturi și obligații</h3>
          <h2>11</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/butonrosu")}
        >
          <h3>Butonul Roșu</h3>
          <h2>12</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/reprezentare")}
        >
          <h3>Reprezentarea Studențească</h3>
          <h2>13</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/burse")}
        >
          <h3>Burse</h3>
          <h2>14</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/cazare")}
        >
          <h3>Cazare și cantine</h3>
          <h2>15</h2>
        </div>

        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/facilitati")}
        >
          <h3>Ce Facilități avem la FMI?</h3>
          <h2>16</h2>
        </div>

        <div className="main__cuprins__content">
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/conducere")}
        >
          <h3>Conducerea Facultății</h3>
          <h2>17</h2>
        </div>
      </div>

      <div className="main__cuprins__content">
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/secretariat")}
        >
          <h3>Secretariat</h3>
          <h2>18</h2>
        </div>
      </div>

      <div className="main__cuprins__content">
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/asmi")}
        >
          <h3>ASMI</h3>
          <h2>19</h2>
        </div>
      </div>

      <div className="main__cuprins__content">
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/cariere")}
        >
          <h3>Cariere și internship</h3>
          <h2>20</h2>
        </div>
      </div>

      <div className="main__cuprins__content">
        <div
          className="main__cuprins__content__element"
          onClick={() => window.location.replace("/pages/echipa")}
        >
          <h3>Echipa ghidul bobocului 2024</h3>
          <h2>21</h2>
        </div>
      </div>
    </motion.section>
  );
};

export default CuprinsComponent;
