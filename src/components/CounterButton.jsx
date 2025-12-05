import { useCartStore } from "../store.ts";
import { DecrementIcon, IncrementIcon } from "../assets/icons/CartButtonIcon.tsx";

export default function CounterButton({ productId }) {

    const cart = useCartStore((state) => state.cart);
    const increaseQuantity = useCartStore((state) => state.increaseQuantity);
    const decreaseQuantity = useCartStore((state) => state.decreaseQuantity);

    const item = cart.find((i) => i.id === productId);
    if (!item) return null;
    
    return (
        <div className="product-item__cart-button flex align-center justify-around gap-2 w-[160px] rounded-full bg-(--red) py-3 text-(--rose-900) font-semibold text-sm">
            <button onClick={() => decreaseQuantity(productId)} className="hover:cursor-pointer">
                <DecrementIcon />
            </button>
            <span className="font-bold text-white">{item.quantity}</span>
            <button onClick={() => increaseQuantity(productId)} className="hover:cursor-pointer">
                <IncrementIcon />
            </button>
        </div>
    );
}