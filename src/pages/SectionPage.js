import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";
import ReactHtmlParser from "react-html-parser";

// Import Data
import data from "../data.json";

// Import Components
import PageToTop from "../components/PageToTop";
import FooterComponent from "../components/FooterComponent";


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
import transport from "../assets/sectiune/transport.webp";

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

              

              {content && content.id === 15 && (
                <motion.div className="cardImages">
                  <p className="imageText">Alpetri Iulita</p>
                  <p className="imageText">Ghinea Alexandra</p>
                  <p className="imageText">Andriciuc Andreea</p>
                  <p className="imageText">Badea Bianca</p>
                  <p className="imageText">Bârsan Andreia</p>
                  <p className="imageText">Bouruc Liviu</p>
                  <p className="imageText">Ciurescu Andreea</p>
                  <p className="imageText">Cordun Diana</p>
                  <p className="imageText">Lăzăroiu Teodora</p>
                  <p className="imageText">Moarcăs  Cosmin</p>
                  <p className="imageText">Nedelcu Radu</p>
                  <p className="imageText">Muscalu Diana</p>
                  <p className="imageText">Nechita Maria Ilinca</p>
                  <p className="imageText">Nimară Dan</p>
                  <p className="imageText">Pătrânjel David</p>
                  <p className="imageText">Păun Liviu</p>
                  <p className="imageText">Sorescu Mihai</p>
                  <p className="imageText">Timotei Andrei</p>
                </motion.div>
              )}
            </div>
          </motion.section>
        </motion.div>
      </motion.main>
      <FooterComponent />
    </>
  );
};

export default SectionPage;
