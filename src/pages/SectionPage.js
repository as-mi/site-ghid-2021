import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

// Import Data
import data from "../data.json";

// Import Components
import PageToTop from "../components/PageToTop";
import FooterComponent from "../components/FooterComponent";

// Import Images
import apostuAlexandru from "../assets/sectiune/echipa/ApostuAlexandru.jpg";
import ApostuMihaiAdrian from "../assets/sectiune/echipa/ApostuMihaiAdrian.jpg";
import BadescuMadalina from "../assets/sectiune/echipa/BadescuMadalina.jpg";
import BuzamatIonut from "../assets/sectiune/echipa/BuzamatIonut.jpg";
import CordunDiana from "../assets/sectiune/echipa/CordunDiana.jpg";
import DragomirAlexandra from "../assets/sectiune/echipa/DragomirAlexandra.jpg";
import GutuStefania from "../assets/sectiune/echipa/GutuStefania.jpeg";
import IosifMaria from "../assets/sectiune/echipa/IosifMaria.jpg";
import lazaroiuTeodora from "../assets/sectiune/echipa/lazaroiuTeodora.jpg";
import mihaitaRazvan from "../assets/sectiune/echipa/mihaitaRazvan.jpg";
import NicoiAlexandru from "../assets/sectiune/echipa/NicoiAlexandru.jpg";
import NimaraDan from "../assets/sectiune/echipa/NimaraDan.jpg";
import PopescuAlina from "../assets/sectiune/echipa/PopescuAlina.jpg";
import StanaTheodora from "../assets/sectiune/echipa/StanaTheodora.jpg";
import StanaVlad from "../assets/sectiune/echipa/StanaVlad.jpg";
import DumitracheFlorentin from "../assets/sectiune/echipa/DumitracheFlorentin.jpeg";
import DawodPaul from "../assets/sectiune/echipa/DawodPaul.jpg";

// Import Animations
import { motion } from "framer-motion";
import {
  sectionAnim,
  contentContainer,
  sliderContainer,
  slider,
  sectionHeaderAnim,
  sectionContentContainer,
  sectionHeaderDownAnim,
  headerContainer,
} from "../components/animations/sectionAnimations";

// Import Images
import transport from "../assets/sectiune/transport.png";

const SectionPage = () => {
  const location = useLocation();
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(
      data.filter((page) => page.href === location.pathname.split("/")[2])[0]
    );
  }, [location.pathname]);

  return (
    <>
      <PageToTop />

      <motion.main
        className="section"
        variants={sectionAnim}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={sliderContainer}>
          <motion.div variants={slider} className="frame1"></motion.div>
          <motion.div variants={slider} className="frame2"></motion.div>
          <motion.div variants={slider} className="frame3"></motion.div>
          <motion.div variants={slider} className="frame4"></motion.div>
          <motion.div variants={slider} className="frame5"></motion.div>
        </motion.div>

        <motion.div variants={contentContainer} className="section__container">
          <motion.section
            variants={headerContainer}
            className="section__header"
          >
            <Link to="/">
              <div className="hide">
                <motion.h1 variants={sectionHeaderDownAnim}>
                  {content && content.titlu}
                </motion.h1>
              </div>
            </Link>
            <div className="hide">
              <motion.p variants={sectionHeaderAnim}>
                {content && content.descriere}
              </motion.p>
            </div>
          </motion.section>

          <motion.section
            variants={sectionContentContainer}
            className="section__content"
          >
            <div className="square border top_b"></div>
            <div className="square mask top_m"></div>
            <div className="square border bottom_b"></div>
            <div className="square mask bottom_m"></div>

            <div className="section__content__text">
              {content &&
                content.text.map((each) => {
                  if (each.type === "p") {
                    return <p>{ReactHtmlParser(each.content)}</p>;
                  } else if (each.type === "img") {
                    return (
                      <div className="imageCard">
                        <img
                          src={each.name === "transport" && transport}
                          alt={each.alt}
                        />
                      </div>
                    );
                  } else {
                    return ReactHtmlParser(each.content);
                  }
                })}

              {content && content.id === 6 && (
                <div>
                  <div className="paulImage"></div>
                  <div className="textPaul">
                    <p>
                      Președintele Asociației Studenților la Matematică și
                      Informatică
                    </p>
                    <p>Dawod Paul-Nasser</p>
                  </div>
                </div>
              )}

              {content && content.id === 15 && (
                <motion.div className="cardImages">
                  <div className="image">
                    <img src={apostuAlexandru} alt="Apostu Alexandru" />
                    <p className="imageText">Apostu Alexandru</p>
                  </div>
                  <div className="image">
                    <img
                      src={ApostuMihaiAdrian}
                      alt="Apostu Mihai Adrian Image"
                    />
                    <p className="imageText">Apostu Mihai Adrian</p>
                  </div>
                  <div className="image">
                    <img src={BadescuMadalina} alt="Bădescu Mădălina" />
                    <p className="imageText">Bădescu Mădălina</p>
                  </div>
                  <div className="image">
                    <img src={BuzamatIonut} alt="Buzamat Ionuț" />
                    <p className="imageText">Buzamat Ionuț</p>
                  </div>
                  <div className="image">
                    <img src={CordunDiana} alt="Cordun Diana" />
                    <p className="imageText">Cordun Diana</p>
                  </div>
                  <div className="image">
                    <img src={DragomirAlexandra} alt="Dragomir Alexandra" />
                    <p className="imageText">Dragomir Alexandra</p>
                  </div>
                  <div className="image">
                    <img src={DumitracheFlorentin} alt="DumitracheFlorentin" />
                    <p className="imageText">Dumitrache Florentin</p>
                  </div>
                  <div className="image">
                    <img src={GutuStefania} alt="Guțu Ștefania" />
                    <p className="imageText">Guțu Ștefania</p>
                  </div>
                  <div className="image">
                    <img src={IosifMaria} alt="Iosif Maria" />
                    <p className="imageText">Iosif Maria</p>
                  </div>
                  <div className="image">
                    <img src={lazaroiuTeodora} alt="Lăzăroiu Teodora" />
                    <p className="imageText">Lăzăroiu Teodora</p>
                  </div>
                  <div className="image">
                    <img src={mihaitaRazvan} alt="Mihăiță Răzvan" />
                    <p className="imageText">Mihăiță Răzvan</p>
                  </div>
                  <div className="image">
                    <img src={NicoiAlexandru} alt="Nicoi Alexandru" />
                    <p className="imageText">Nicoi Alexandru</p>
                  </div>
                  <div className="image">
                    <img src={NimaraDan} alt="Nimară Dan" />
                    <p className="imageText">Nimară Dan</p>
                  </div>
                  <div className="image">
                    <img src={PopescuAlina} alt="Popescu Alina" />
                    <p className="imageText">Popescu Alina</p>
                  </div>
                  <div className="image">
                    <img src={StanaTheodora} alt="Stană Theodora" />
                    <p className="imageText">Stană Theodora</p>
                  </div>
                  <div className="image">
                    <img src={StanaVlad} alt="Stană Vlad" />
                    <p className="imageText">Stană Vlad</p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.section>
        </motion.div>
      </motion.main>
      {/* <FooterComponent /> */}
    </>
  );
};

export default SectionPage;
