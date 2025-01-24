"use client";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import { useEffect, useState } from "react";
import axios from "axios";

export interface Product {
  _id: string;
  productName: string;
  price: number;
  images: string[];
}

const HomePage = () => {
  const [datas, setDatas] = useState<Product[]>([]);

  useEffect(() => {
    axios
      .get("http://localhost:8000/products")
      .then(function(response) {
        setDatas(response.data.product);
      })
      .catch(function(error) {
        console.log("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="min-h-lvh">
      <Hero />
      <Products datas={datas} />
    </div>
  );
};

export default HomePage;
