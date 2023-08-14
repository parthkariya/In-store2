import React from "react";
// import "./WhayJoin.css";
import images from "../../constants/images";

const WhayJoinRetailer = () => {


    return (
        <div className="main_wrapp">
            <div className="container whayjoin_wrapp why-sec-gap">
                <h2 className="h2" style={{ marginBottom: "15px" }}>Why Join In-store?</h2>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh volutpat.</p>
                <div className="whyjoin_grid">
                    <div className="whyjoin_grid_item">
                        <img src={images.home_eye} alt="" />
                        <p>
                            1The In-store platform is 100%
                            Native Advertising
                        </p>
                    </div>
                    <div className="whyjoin_grid_item">
                        <img src={images.home_location} alt="" />
                        <p>Advanced customer segmentation
                            and targeting</p>
                    </div>
                    <div className="whyjoin_grid_item">
                        <img src={images.home_shapes} alt="" />
                        <p>
                            Unified platform where marketing,
                            products and consumers come together.
                        </p>
                    </div>
                    <div className="whyjoin_grid_item">
                        <img src={images.home_archive} alt="" />
                        <p>
                            Advance customer insights
                            and analytics
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhayJoinRetailer;
