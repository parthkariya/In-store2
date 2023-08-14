import React, { useEffect, useState } from "react";
import "./Homepage.css";
import { Footer, HomeNavbar, Navbar } from "../../common";
import { Imgcard } from "../../components";
import images from "../../constants/images";
import ReactModal from "react-modal";
import { useMallContext } from "../../context/mall_context";
import { HomeHero, RegisterMall, WelcomeStore, WhayJoin } from "../../container";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Homepage = () => {

  const { getMall, get_mall_data } = useMallContext();

  useEffect(() => {
    // getMall()
    console.log('get_mall_data', get_mall_data)
  }, [get_mall_data]);


  <Helmet>
    <title>In-store</title>
    <meta property="og:image" content="%PUBLIC_URL%/logo512.png" />
  </Helmet>


  return (
    <div>
      {/* <div className="homecards_grid">
        {get_mall_data && get_mall_data.length > 0 &&
          get_mall_data.map((item, index) => {
            return <Imgcard key={item.id} item={item} />;
          })}
      </div> */}
      {/* <Navbar
      // setCustomerDropdown={setCustomerDropdown}
      // getcustomerDropdown={getcustomerDropdown}
      /> */}
      <HomeNavbar />

      <HomeHero img={images.in_store_landing_header} />
      <div className="home-page-sec-gap-wel">
        <WelcomeStore
          WcBtn={true}
          title={"Welcome to In-store"}
          des={
            "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip."
          }
        />
      </div>
      <WhayJoin />
      {/* about in store register part-1 start*/}
      <div className="main_wrapp registermall_main_wrapp bg-pink">
        <div className="container registermall_base_wrapp">
          <div className="registermall_sec1">
            <h2 className="h2">
              Malls have more
              <br /> presence
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link to="/mall" className="homepage-black-btn">Read more</Link>
            </div>
          </div>
          <div className="registermall_sec2">
            <img src={images.about_1} alt="" />
          </div>
        </div>
      </div>
      {/* about in store register part-1 end*/}

      {/* about in store register part-2 start*/}
      <div className="main_wrapp registermall_main_wrapp bg-orange">
        <div className="container registermall_base_wrapp fd-rr">
          <div className="registermall_sec1">
            <h2 className="h2">
              Retailers can track
              <br />their customer data
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo.
            </p>
            <div style={{ marginTop: "20px" }}>
              <Link to="/retailer" className="homepage-black-btn">Read more</Link>
            </div>
          </div>
          <div className="registermall_sec2">
            <img src={images.about_2} alt="" />
          </div>
        </div>
      </div>
      {/* about in store register part-2 end*/}
      {/* <RegisterMall /> */}
      <div className="main_wrapp registermall_main_wrapp bg-blue">
        <div className="container registermall_base_wrapp">
          <div className="registermall_sec1">
            <h2 className="h2">
              Experience all your
              <br /> favorite brands
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
              nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam
              erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci
              tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo.
            </p>
            {/* <Link to="/customer" className="homepage-black-btn">Read more</Link> */}
            <div className="apps_logos_wrapp">
              <img src={images.in_store_google_download} style={{ width: "155px", height: "46px" }} alt="play store logo" />
              <img src={images.in_store_apple_download} style={{ width: "155px", height: "46px" }} alt="app store logo" />
            </div>
          </div>
          <div className="registermall_sec2">
            <img src={images.about_3} alt="" />
          </div>
        </div>
      </div>
    </div >
  );
};

export default Homepage;
