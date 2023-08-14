import React from 'react';
import "./HomeHero.css";
import images from '../../constants/images';

const HomeHero = ({ img }) => {
  return (
    <div
      className="homehero_main_wrapp show_bg_2"
      style={{
        // backgroundImage: `url(${img})`,
        backgroundImage: `url(${img})`,
        backgroundPosition: "center",
        backdropFilter: 'blur(2px)',
        WebkitBackdropFilter: 'revert-layer',
        backgroundSize: "cover",
        // position: "relative",

      }}
    >
      <div className=".banner-overlay"></div>
      {/* <div className="linear-gradian"></div> */}
      {/* <img src={images.hero_banner} alt="" /> */}
      <div div className="homehero_text_main" >
        <div className="homehero_text_base">
          <img src={images.hero_logo} alt="" />
          <p>
            A marketing platform for integrated <br />
            shopping solutions and better results
          </p>
          <div className="apps_logos_wrapp">
            <img src={images.in_store_google_download} style={{ width: "155px", height: "46px" }} alt="play store logo" />
            <img src={images.in_store_apple_download} style={{ width: "155px", height: "46px" }} alt="app store logo" />
          </div>
        </div>
      </div >
    </div >
  );
};

export default HomeHero