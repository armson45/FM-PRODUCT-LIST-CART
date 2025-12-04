import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface ProductItem {
  category: string;
  id: number;
  image: {
    thumbnail: string
    mobile: string,
    desktop: string,
  };
  name: string;
  price: number;
  quantity: number;
}

interface CartState {
  cart: ProductItem[];
  addToCart: (product: Omit<ProductItem, "quantity">) => void;
  increaseQuantity: (id: number) => void;
  decreaseQuantity: (id: number) => void;
  removeItem: (id: number) => void;
  total: () => number;
  cartLength: () => number;
  clear: () => void;
}

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      cart: [],


      addToCart: (product) => {
        const cart = get().cart;

        const existingItem = cart.find(
          (item) => item.id === product.id
        );

        if (existingItem) {
          const updatedCart = cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );

          set({ cart: updatedCart });
          return;
        }

        const newItem: ProductItem = {
          ...product,
          quantity: 1,
        };

        set({ cart: [...cart, newItem] });
      },
      increaseQuantity: (id) => {
        const updatedCart = get().cart.map((item) =>
          item.id == id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        set({ cart: updatedCart })
      },
      decreaseQuantity: (id) => {
        const updatedCart = get().cart.map((item) => {
          if (item.id === id) {
            return {
              ...item,
              quantity: Math.max(1, item.quantity - 1),
            };
          }
          return item;
        });

        set({ cart: updatedCart });
      },
      removeItem: (id) => {
        const updatedCart = get().cart.filter(
          (item) => item.id !== id
        );

        set({ cart: updatedCart });
      },
      total: () => {
        return get().cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
      },
      cartLength: () => {
        return get().cart.length;
      },
      clear: () => {
        return set({ cart: [] });
      },
    }),
    {
      name: "cart-dessert",
    }
  )
);
