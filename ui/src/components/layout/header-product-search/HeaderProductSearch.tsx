import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { HeaderSearchProductItem } from "./HeaderProductSearchItem";
import { useEffect, useState } from "react";
import axios from "axios";
import { Product } from "@/types/product";

export const HeaderProductSearch = () => {
  const [searchValue, setSearchValue] = useState("");
  const [products, setProducts] = useState<Product[]>([]);

  const filteredProducts = products.filter((product) => {
    if (!searchValue) return true;

    return product.productName
      .toLocaleLowerCase()
      .includes(searchValue.toLocaleLowerCase());
  });

  useEffect(() => {
    const getProducts = async () => {
      try {
        const { data } = await axios.get<{ product: Product[] }>(
          "http://localhost:8000/products"
        );
        setProducts(data.product);
      } catch (error) {
        console.log(error);
      }
    };
    getProducts();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Input
          className="w-fit outline-none border-none min-w-40"
          id="link"
          readOnly
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Search products</DialogTitle>
          <DialogDescription>search by product name</DialogDescription>
        </DialogHeader>
        <div className="flex items-center space-x-2">
          <div className="grid flex-1 gap-2">
            <Input
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
            />
          </div>
        </div>
        <DialogFooter className="sm:justify-start">
          <div className="flex flex-col gap-2">
            {filteredProducts?.map((product) => (
              <HeaderSearchProductItem
                key={product?._id}
                image={product?.images[0]}
                name={product?.productName}
                price={product?.price}
              />
            ))}
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
