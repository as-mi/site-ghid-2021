import { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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
  sectionSquareFade,
  sectionContentContainer,
  sectionText,
} from "../components/animations/sectionAnimations";

const SectionPage = () => {
  const location = useLocation();
  const [content, setContent] = useState();

  useEffect(() => {
    setContent(
      data.filter((page) => page.href === location.pathname.split("/")[2])[0]
    );
  }, [location.pathname]);

  return (
    <motion.main
      className="section"
      variants={sectionAnim}
      initial="hidden"
      animate="show"
    >
      <PageToTop />

      <motion.div variants={sliderContainer}>
        <motion.div variants={slider} className="frame1"></motion.div>
        <motion.div variants={slider} className="frame2"></motion.div>
        <motion.div variants={slider} className="frame3"></motion.div>
        <motion.div variants={slider} className="frame4"></motion.div>
        <motion.div variants={slider} className="frame5"></motion.div>
      </motion.div>

      <motion.div variants={contentContainer} className="section__container">
        <section className="section__header">
          <Link to="/">
            <div className="hide">
              <motion.h1 variants={sectionHeaderAnim}>
                {content && content.titlu}
              </motion.h1>
            </div>
          </Link>

          <div className="hide">
            <motion.p variants={sectionHeaderAnim}>
              {content && content.descriere}
            </motion.p>
          </div>
        </section>

        <section className="section__content">
          <motion.div
            variants={sectionSquareFade}
            className="square border top_b"
          ></motion.div>
          <div className="square mask top_m" ></div>
          <motion.div
            variants={sectionSquareFade}
            className="square border bottom_b"
          ></motion.div>
          <div className="square mask bottom_m" ></div>

          <motion.div variants={sectionContentContainer} className="hide">
            {content &&
              content.text.map((each) => {
                return <motion.p key={each}>{each}</motion.p>;
              })}
          </motion.div>
        </section>
      </motion.div>
      <FooterComponent />
    </motion.main>
  );
};

export default SectionPage;
