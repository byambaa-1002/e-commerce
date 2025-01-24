"use client";
import Logo from "../../../public/icons/Logo";
import { CiSearch } from "react-icons/ci";
import { ButtonBlue } from "../ButtonBlue";
import { ButtonBlack } from "../ButtonBlack";
import Link from "next/link";
import { Heart, ShoppingCart, User } from "lucide-react";
import { useEffect, useState } from "react";
import { HeaderProductSearch } from "./header-product-search/HeaderProductSearch";

export const Header = () => {
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const userid = localStorage.getItem("userid");

    if (!userid) {
      setUserId(null);
    }
    setUserId(userid);
  }, []);

  return (
    <div className="w-screen bg-black h-16 flex justify-between px-6 items-center">
      <div className="flex gap-8">
        <Link href="/">
          <Logo />
        </Link>
        <Link href={"/category"}>
          <p className="text-white">Ангилал</p>
        </Link>
      </div>
      <div>
        <label className="input input-bordered flex items-center gap-2 min-h-9 h-9 rounded-3xl bg-[#18181B] text-[#71717A]">
          <CiSearch />
          <HeaderProductSearch />
        </label>
      </div>
      <div className="text-white flex gap-6 items-center">
        <Link href={"/savedProducts"}>
          <Heart />
        </Link>
        <Link href={"/basketProducts"}>
          <ShoppingCart />
        </Link>
        <div className={`flex gap-2 ${userId === null ? "block" : "hidden"}`}>
          <Link href={"/register"}>
            <ButtonBlack title={"Бүртгүүлэх"} />
          </Link>
          <Link href={"/login"}>
            <ButtonBlue title={"Нэвтрэх"} />
          </Link>
        </div>
        <div className={`${userId === null ? "hidden" : "block"}`}>
          <User onClick={() => localStorage.removeItem("userid")} />
        </div>
      </div>
    </div>
  );
};
