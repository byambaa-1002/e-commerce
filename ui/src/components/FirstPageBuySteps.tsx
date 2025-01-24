"use client";

import { Button } from "@/components/ui/button";
import { PiTrashLight } from "react-icons/pi";
import { useCart } from "@/app/providers";
import { useState, useEffect } from "react";

export type StepComponentProps = {
  next: () => void;
  prev: () => void;
};

const FirstStep = (props: StepComponentProps) => {
  const { next } = props;
  const { removeFromCart, cartItems, addToCart, minusToCart } = useCart();
  const [totalPrice, setTotalPrice] = useState<number>(0);

  // Recalculate total price whenever cartItems change
  useEffect(() => {
    const newTotalPrice = cartItems.reduce((total, cartItem) => {
      return total + cartItem.quantity * Number(cartItem.price);
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cartItems]); // Only re-run when cartItems change

  return (
    <div className="flex justify-center bg-zinc-200 h-[845.61px]">
      <div className="w-[638px] h-[664px] flex flex-col justify-center items-center">
        <div className="bg-white p-8 border rounded-2xl gap-10">
          <div className="flex items-center gap-1">
            <p className="text-xl font-bold">1. Сагс</p>
            <p>({cartItems.length})</p>
          </div>
          <div className="overflow-scroll h-fit max-h-[414px] flex flex-col gap-2">
            {cartItems.map((cartItem) => (
              <div
                key={cartItem._id}
                className="w-fit flex flex-col justify-center items-center gap-5"
              >
                <div className="w-[532px] h-[132px] rounded-2xl flex justify-between border-2 items-center p-4">
                  <div className="flex">
                    <div
                      style={{
                        backgroundImage: `url(${cartItem.images[0]})`,
                        width: "100px",
                        height: "100px",
                        margin: "0px 24px 0px 0px",
                      }}
                      className="w-[100px] h-[100px] rounded-xl m-2 bg-cover"
                    ></div>
                    <div>
                      <p>{cartItem.productName}</p>
                      <div className="flex justify-between items-center w-24">
                        <div
                          className="cursor-pointer border rounded-full p-1 w-[34px] h-[34px] flex justify-center items-center"
                          onClick={() => minusToCart(cartItem)}
                        >
                          {cartItem.quantity !== 1 ? "-" : <PiTrashLight />}
                        </div>
                        <p>{cartItem.quantity}</p>
                        <div
                          className="cursor-pointer border rounded-full p-1  w-[34px] h-[34px] flex justify-center items-center"
                          onClick={() => addToCart(cartItem)}
                        >
                          +
                        </div>
                      </div>

                      <p className="font-bold">{cartItem.price}$</p>
                    </div>
                  </div>
                  <div onClick={() => removeFromCart(cartItem._id)}>
                    <PiTrashLight className="w-[24px] h-[24px]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex justify-between">
            <p>Нийт төлөх дүн:</p>
            <p>{totalPrice}$</p>
          </div>
          <div className="flex justify-end">
            <Button
              onClick={next}
              className="rounded-3xl bg-blue-700 font-thin h-[28px] flex text-center px-9 py-2"
            >
              Худалдан авах
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstStep;
