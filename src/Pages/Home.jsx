import React from "react";
import {
  Hero,
  OurProduct,
  AboutUs,
  Method,
  Relation,
  Hyprlink,
} from "../Component/";
import styles from "../Styles";

function Home() {
  return (
    <div>
      <div className={`bg-primary ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <OurProduct />
          <AboutUs />
          <Method />
          <Relation />
          <Hyprlink />
        </div>
      </div>
    </div>
  );
}

export default Home;
