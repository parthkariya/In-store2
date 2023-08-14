import React from "react";
// import "./StoreDCard.css";
import images from "../../constants/images";
import { useMallContext } from "../../context/mall_context";
import Notification from "../../utils/Notification";

const StoreECard = ({
    img,
    setIsOpen,
    itm,
    setSingleStoreData,
    setTab,
    setStore_id,
    getStoreList,
    getEateryList,
}) => {
    const { DeleteStoreApi, DeleteEateriesApi } = useMallContext();
    const DeleteMallEateryData = async (id) => {
        {
            const formdata = await new FormData();
            await formdata.append("eatery_id", id);

            console.log("-=-=-=->", formdata);
            const data = await DeleteEateriesApi(formdata);
            if (data) {
                if (data.success === 1) {
                    console.log("mall-data", data);
                    setIsOpen(false);

                    Notification("success", "Success!", "Eatery Deleted Successfully!");
                    // getStoreList();
                    getEateryList();
                    // getStore();
                }
            }
        }
    };

    return (
        <div
            // onClick={() => {
            //   setSingleStoreData(itm);
            //   setIsOpen(true);
            // }}
            className="stored_card_wrapp"
        >
            <div className="stored_card_edit_wrapp">
                <button
                    onClick={() => {

                        // setIsOpen(true);

                        setStore_id(itm.id);
                        setSingleStoreData(itm);
                        setTab(8);
                    }}
                    className="stored_card_edit_btn"
                >
                    <img src={images.card_edit} alt="" />
                </button>
                <button
                    onClick={() => {
                        // setStore_id(itm.id);
                        DeleteMallEateryData(itm.id);
                    }}
                    className="stored_card_edit_btn"
                >
                    <img src={images.card_cancle} alt="" />
                </button>
            </div>
            <img
                onClick={() => {
                    setSingleStoreData(itm);
                    setIsOpen(true);
                }}
                src={img}
                alt=""
                className="stored_card_img"
            />
        </div>
    );
};

export default StoreECard;
