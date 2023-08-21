import React from 'react'
import images from '../../constants/images'
import "./CustomerProductTilesHero.css"

const CustomerProductTilesHero = ({ item }) => {


    return (
        <div className="mall_hero_main_wrapp producttiles-hero">
            <img
                src={item ? item.stores.store_banner_path : images.mall_hero_banner}
                alt=""
                className="mall_hero_banner_img product-tiles-hero-img"
            />
            <div className="mall_hero_logo_wrapp">
                <img src={item ? item.stores.store_logo_path : images.mall_hero_logo} alt="" />
            </div>
        </div>
    )
}

export default CustomerProductTilesHero