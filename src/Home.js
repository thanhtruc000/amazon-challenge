import { Button } from "@material-ui/core";
import React from "react";
import "./Home.css";
import Product from "./Product";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          //   src="https://images-na.ssl-images-amazon.com/images/G/01/sm/Evergreen_Shared/RebrandAssets/Sept2020/GW_Banner_1500x600_US_1x._CB404913951_.jpg"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            key="1001"
            id="1001"
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
            rating={5}
          />
          <Product
            key="1002"
            id="1002"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whisk, 5 Litre Glass Bowl"
            price={239.0}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="1003"
            id="1003"
            title="Fitbit Charge 4 Fitness and Activity Tracker with Built-in GPS, Heart Rate, Sleep & Swim Tracking, Black/Black, One Size (S &L Bands Included)"
            price={143.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={3}
          />
          <Product
            key="1004"
            id="1004"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            rating={5}
          />
          <Product
            key="1005"
            id="1005"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            key="1006"
            id="1006"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            rating={4}
          />
        </div>

        <h2 className="home__title">Top Beauty & Personal Care products</h2>
        <div className="home__row">
          <Product
            key="1007"
            id="1007"
            title="Neutrogena Makeup Remover Cleansing Face Wipes"
            price={11.96}
            image="https://m.media-amazon.com/images/I/41+OcSh2YsL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            key="1008"
            id="1008"
            title="CeraVe Moisturizing Cream"
            price={15.28}
            image="https://m.media-amazon.com/images/I/5118XlrWwlL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            key="1009"
            id="1009"
            title="REVLON One-Step Hair Dryer And Volumizer Hot Air Brush, Black, Packaging May Vary"
            price={41.99}
            image="https://m.media-amazon.com/images/I/41yn8u3qJPL._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            key="1010"
            id="1010"
            title="Crest 3D White Professional Effects Whitestrips 20 Treatments"
            price={48.00}
            image="https://m.media-amazon.com/images/I/51tyP0EgjUL._AC_SY200_.jpg"
            rating={5}
          />
        </div>

        <h2 className="home__title">Our favorite Toys</h2>
        <div className="home__row">
          <Product
            key="1011"
            id="1011"
            title="Play-Doh Modeling Compound 10-Pack Case of Colors"
            price={7.99}
            image="https://m.media-amazon.com/images/I/51d5cqa2fVL._AC_SY200_.jpg"
            rating={6}
          />
          <Product
            key="1012"
            id="1012"
            title="The Resistance: Avalon Social Deduction Game"
            price={12.90}
            image="https://m.media-amazon.com/images/I/51-wsV9iCqL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            key="1013"
            id="1013"
            title="VTech KidiZoom Smartwatch DX2"
            price={56.56}
            image="https://m.media-amazon.com/images/I/51aIDYrc84L._AC_SY200_.jpg"
            rating={4}
          />
          <Product
            key="1014"
            id="1014"
            title="Crayola Colored Pencil Set"
            price={5.97}
            image="https://m.media-amazon.com/images/I/51dgO2O9okL._AC_SY200_.jpg"
            rating={5}
          />
          <Product
            key="1015"
            id="1015"
            title="Jenga Classic Game"
            price={9.99}
            image="https://m.media-amazon.com/images/I/519cveTryBL._AC_SY200_.jpg"
            rating={5}
          />
         
        </div>

        <div className="home__line"></div>

        <div className="home__signIn">
          <h4>See personalized recommendations</h4>

          <div className="home__buttonSignIn">
              <Link to ="/login">
                <h3 className="home__h3__signin">Sign in</h3>
              </Link>
          </div>
        </div>

        <div className="home__register">
          <h4>New customer?</h4>

          <div className="home__buttonRegister">
            <Link to ="/register">
              <h3 className="home__h3__register">Start here.</h3>
            </Link>
          </div>
        </div>

        <br/>
        <div className="home__line"></div>
      </div>
    </div>
  );
}

export default Home;
