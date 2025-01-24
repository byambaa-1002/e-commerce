"use client";
import { Product } from "@/types/product";
import {
  createContext,
  useState,
  useEffect,
  useContext,
  ReactNode,
  useMemo,
} from "react";

type CartItem = Product & {
  quantity: number;
};

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (newItem: CartItem) => void;
  removeFromCart: (itemId: string) => void;
  minusToCart: (newItem: CartItem) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType>({
  cartItems: [],
  addToCart: () => {},
  removeFromCart: () => {},
  clearCart: () => {},
  minusToCart: () => {},
});

const useCart = () => useContext(CartContext);

interface CartProviderProps {
  children: ReactNode;
}

const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const storedCartItems = localStorage.getItem("cartItems");
    if (storedCartItems) {
      setCartItems(JSON.parse(storedCartItems));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (newItem: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === newItem._id
    );

    if (existingItem) {
      const updatedItems = cartItems.map((cartItem) => {
        if (cartItem._id === newItem._id) {
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      setCartItems(updatedItems);
    } else {
      setCartItems([...cartItems, newItem]);
    }
  };

  const minusToCart = (newItem: CartItem) => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === newItem._id
    );

    if (existingItem) {
      const updatedItems = cartItems
        .map((cartItem) => {
          if (cartItem._id === newItem._id) {
            const newQuantity = cartItem.quantity - 1;

            if (newQuantity <= 0) {
              return null;
            }

            return { ...cartItem, quantity: newQuantity };
          }
          return cartItem;
        })
        .filter(Boolean);

      setCartItems(updatedItems);
    }
  };

  const removeFromCart = (itemId: string) => {
    setCartItems(cartItems.filter((item) => item._id !== itemId));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const contextValue = useMemo(
    () => ({ cartItems, addToCart, removeFromCart, minusToCart, clearCart }),
    [cartItems]
  );

  return (
    <CartContext.Provider value={contextValue}>{children}</CartContext.Provider>
  );
};

export { useCart, CartProvider };
