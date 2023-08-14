import React from "react";
import "./StoreDCard.css";
import images from "../../constants/images";
import { useMallContext } from "../../context/mall_context";
import Notification from "../../utils/Notification";

const StoreDCard = ({
  img,
  setIsOpen,
  itm,
  setSingleStoreData,
  setTab,
  setStore_id,
  getStoreList,
}) => {
  const { DeleteStoreApi } = useMallContext();
  const DeleteMallStoreData = async (id) => {
    {
      const formdata = await new FormData();
      await formdata.append("store_id", id);

      console.log("-=-=-=->", formdata);
      const data = await DeleteStoreApi(formdata);
      if (data) {
        if (data.success === 1) {
          console.log("mall-data", data);
          setIsOpen(false);

          Notification("success", "Success!", "Brand Deleted Successfully!");
          getStoreList();
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
            setTab(9);
            setStore_id(itm.id);
            setSingleStoreData(itm);
          }}
          className="stored_card_edit_btn"
        >
          <img src={images.card_edit} alt="" />
        </button>
        <button
          onClick={() => {
            // setStore_id(itm.id);
            DeleteMallStoreData(itm.id);
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

export default StoreDCard;
