"use client";
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import HistoryProduct from "./HistoryProduct";
import { useState } from "react";

export type Products = {
  price: number;
  date: string;
  status: string;
};

const OrderHistory = (props: Products) => {
  const { price, date, status } = props;
  const [isHideOrders, setIsHideOrders] = useState<boolean>(true);

  return (
    <div className="w-[620px] mx-auto bg-white px-6 py-8 gap-4 rounded-2xl flex flex-col">
      <div className="flex justify-between h-6">
        <div className="flex gap-4">
          <p className="font-bold ">{date}</p>
          <p className="text-white bg-[#2563EB] text-center rounded-2xl py-[2px] px-[10px] font-semibold text-xs">
            {status}
          </p>
        </div>
        <div
          className={`${
            isHideOrders === false ? "hidden" : "block"
          } cursor-pointer`}
        >
          <IoChevronDown
            onClick={() => {
              return setIsHideOrders(!isHideOrders);
            }}
          />
        </div>
        <div
          className={`${
            isHideOrders === true ? "hidden" : "block"
          } cursor-pointer`}
        >
          <IoChevronUp
            onClick={() => {
              return setIsHideOrders(!isHideOrders);
            }}
          />
        </div>
      </div>
      <div className={`${isHideOrders === true ? "hidden" : "block"}`}>
        <HistoryProduct
          productName={"Chunky Glyph Tee"}
          price={price}
          count={1}
        />
      </div>
      <div className="flex justify-between h-7">
        <p className="">Үнийн дүн:</p>
        <p className="text-lg font-bold">{price}₮</p>
      </div>
    </div>
  );
};
export default OrderHistory;
