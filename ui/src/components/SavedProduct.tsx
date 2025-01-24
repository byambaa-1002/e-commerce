"use client";
import { useState } from "react";
import { FilledLove } from "../../public/icons/FilledLove";
import { ButtonBlue } from "./ButtonBlue";
import { Love } from "../../public/icons/Love";

const SavedProduct = () => {
  const [isSelected, setIsSelected] = useState<boolean>(true);
  return (
    <div className="w-[622px] h-[132px] rounded-2xl flex  border border-[#ECEDF0] gap-6 p-4">
      <div
        style={{
          backgroundImage: 'url("./Pics/pinecone1.png")',
          width: "100px",
          height: "100px",
        }}
        className="bg-cover rounded-2xl"
      ></div>
      <div className="flex gap-2 h-[100px] w-[402px]">
        <div className="flex flex-col gap-2">
          <div className="flex gap-1 flex-col">
            <p>Chunky Glyph Tee</p>
            <p className="font-bold">120’000₮</p>
          </div>
          <div onClick={() => console.log("productName", "productPrice")}>
            <ButtonBlue title="Сагслах" />
          </div>
        </div>
      </div>
      <div
        className="cursor-pointer h-10 w-10 "
        onClick={() => setIsSelected(!isSelected)}
      >
        {isSelected === true ? <FilledLove /> : <Love />}
      </div>
    </div>
  );
};
export default SavedProduct;
