// Import Animations
import { motion } from "framer-motion";
import {
  headerAnim,
  headerTextUpAnim,
  headerTextDownAnim,
  headerFade,
} from "./animations/headerAnimations";

import PageToTop from "./PageToTop";

const HeaderComponent = () => {
  return (
    <motion.div>
      <PageToTop />
      <motion.div>
        <motion.section
          id="start_point"
          className="header"
          variants={headerAnim}
          initial="hidden"
          animate="show"
        >
          <div className="hide">
            <motion.h1 className="header__text" variants={headerTextUpAnim}>
              bine ai venit <span>pe</span>
            </motion.h1>
          </div>

          <motion.div
            className="header__line"
            variants={headerFade}
          ></motion.div>

          <div className="hide">
            <motion.h1 className="header__text" variants={headerTextDownAnim}>
              ghidul <span>bobocului</span>
            </motion.h1>
          </div>
        </motion.section>
      </motion.div>
    </motion.div>
  );
};

export default HeaderComponent;
