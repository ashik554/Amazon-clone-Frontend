import React from "react";
import Product from "../Product/Product";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.home}>
      <div className={classes.homeContainer}>
        <img
          className={classes.homeImage}
          src="https://m.media-amazon.com/images/I/713hHgK0ThL._SX1500_.jpg"
          alt="banner"
        />

        <div className={classes.HomeProductRow}>
          <Product
            id="e0"
            title="Echo (4th generation) | Smart speaker with Alexa | Charcoal"
            price={38.99}
            image="https://m.media-amazon.com/images/I/71Q9d6N7xkL._AC_SX679_.jpg"
            rating={5}
          />

          <Product
            id="e2"
            title="Govee LED-Strip RGB 15 m Alexa LED Strip Smart WiFi Lights with Remote Control App"
            image="https://m.media-amazon.com/images/I/61iqgWBegwL._AC_UY436_FMwebp_QL65_.jpg"
            price={79.99}
            rating={4}
          />
        </div>
        <div className={classes.HomeProductRow}>
          <Product
            id="e3"
            title="Smart Watch Fitness Tracker, Fitness Bracelet with Heart Rate Monitor, IP68 Waterproof Fitness Watch, Full black"
            image="https://m.media-amazon.com/images/I/61T-4o2APyL._AC_UY436_FMwebp_QL65_.jpg"
            price={49.99}
            rating={4}
          />
          <Product
            id="e4"
            title="Apple iPhone 13 Pro Max (512 GB) - Sierrablau"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/img15/MarchEye/familystripe/14thsept/AMZ_FamilyStripe_iPhone_13ProMax._CB641092686_.png"
            price={(1, 599.0)}
            rating={5}
          />
          <Product
            id="e5"
            title="Apple MacBook Pro with Apple M1 Chip (13 inch, 8GB RAM"
            image="https://images-eu.ssl-images-amazon.com/images/G/03/img15/MarchEye/familystripe/AMZ_FamilyStripe_MacBook_Air_Retina_M1._CB416911002_.png"
            price={(1, 249.0)}
            rating={5}
          />
        </div>
        <div className={classes.HomeProductRow}>
          <Product
            id="e6"
            title="Duco Men’s Polarised Sunglasses with Square Metal Frame and Carbon Fibre Temples - UV400 CAT 3 - CE 8206"
            image="https://m.media-amazon.com/images/I/71WmGwywafL._AC_UL640_FMwebp_QL65_.jpg"
            price={36.0}
            rating={5}
          />
          <Product
            id="e7"
            title="iiyama G-MASTER Red Eagle G2770HSU-B1 68.6 cm (27 Inches) Fast IPS LED Gaming Monitor Full HD (HDMI, DisplayPort, USB 2.0)"
            image="https://m.media-amazon.com/images/I/61s3gKlXzjL._AC_UY436_FMwebp_QL65_.jpg"
            price={215.99}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
