"use client";
import { Product } from "@/types/product";
import axios from "axios";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
} from "react";

interface ProductContextType {
  productItems: Product[];
}

const ProductContext = createContext<ProductContextType>({
  productItems: [],
});

const useProduct = () => useContext(ProductContext);

interface ProductProviderProps {
  children: ReactNode;
}

const ProductProvider: React.FC<ProductProviderProps> = ({ children }) => {
  const [productItems, setProductItems] = useState<Product[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/products`);
        setProductItems(response.data.product || []);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ productItems }}>
      {children}
    </ProductContext.Provider>
  );
};

export { useProduct, ProductProvider };
