import { Product } from "@prisma/client";
import { create } from "zustand";
import { persist } from "zustand/middleware";
//import { AddCartType } from "../types/AddCartType";

type CartState = {
  cart: Product[];
  clearCart: () => void;
  addProduct: (item: Product) => void;
  removeProduct: (item: Product) => void;
};

/**
 * Custom Hook to manage the shoppingcart state
 */
export const useCartStore = create<CartState>()(
  persist(
    /**
     * Initial state and actions to modify shoppingcart
     * @param set Function to update the state
     * @returns The cartstate and items actions
     */
    (set) => ({
      cart: [],
      addProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! + 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            return { cart: [...state.cart, { ...item, quantity: 1 }] };
          }
        }),
      removeProduct: (item) =>
        set((state) => {
          const existingItem = state.cart.find(
            (cartItem) => cartItem.id === item.id
          );
          if (existingItem && existingItem.quantity! > 1) {
            const updatedCart = state.cart.map((cartItem) => {
              if (cartItem.id === item.id) {
                return { ...cartItem, quantity: cartItem.quantity! - 1 };
              }
              return cartItem;
            });
            return { cart: updatedCart };
          } else {
            const filteredCart = state.cart.filter(
              (cartItem) => cartItem.id !== item.id
            );
            return { cart: filteredCart };
          }
        }),

      clearCart: () => set((state) => ({ cart: [] })),
    }),

    { name: "cart-store" }
  )
);
