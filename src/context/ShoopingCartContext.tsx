import React, { createContext, useContext, useState } from "react";
import cart from "../Pages/cart/Cart";
import CardItmes from "../Components/cartitmes/CardItmes";
import { useLocalStorage } from "../Hooks/useLocalStorage";

export interface TChilde {
  children: React.ReactNode;
}
interface TCartItem {
  id: number;
  qty: number;
  price: number
}
interface TCartItems {
  cartItems: TCartItem[];
  handleIncreaseProudctQTY: (id :number,price: number) => void;
  handleRemoveProduct: (id: number) => void;
  getProductQTY: (id: number) => void,
  countCart: number,
  Price: number,
  discount: number,
  getId: () => void
} 
const ShoopingCartContext = createContext<TCartItems>({} as TCartItems);
export const useShoopingCartContext = () => {
  return useContext(ShoopingCartContext);
};

export function ShoopingCartProivder({ children }: TChilde) {
  const [cartItems, setCartItems] = useLocalStorage<TCartItem[]>('cartItems',[]);
  const handleIncreaseProudctQTY = (id: number,price: number) => {
    setCartItems(prevState => {
        const selected = prevState.find((item) => item.id === id);
        if (selected == null) {
          return [...prevState, { id: id, qty: 1,price: price }];
        } else {
          return prevState.map((item) => {
            return item
          });
        }
    })
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems(prevState => {
        return prevState.filter(items => {
            return items.id !== id
        })
    })
  };
  const getProductQTY = (id: number) => {
    return  cartItems.find(item => item.id === id)?.qty 
  }
  const getId = ()   =>   {
    return cartItems.find(items => items)?.id 
  }
  const countCart = cartItems.reduce((prev,item) => prev + item.qty,0)
  const Price = cartItems.reduce((prev,item) => prev + item.price,0)
  const discount = cartItems.reduce((prev,item) => prev + (item.price - (item.price * 5 / 100)),0)
  return (
    <ShoopingCartContext.Provider value={{ cartItems,getId,Price,discount ,countCart, handleIncreaseProudctQTY ,getProductQTY , handleRemoveProduct }}>
      {children}
    </ShoopingCartContext.Provider>
  );
}
