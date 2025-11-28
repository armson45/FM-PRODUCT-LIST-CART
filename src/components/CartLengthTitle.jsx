import { useCartStore } from "../store";

export default function CartLengtTitle() {

    const cartLength = useCartStore((state) => state.cart.length);

    return (
        <h2 className="text-xl font-bold text-(--red)">Your Cart ({cartLength})</h2>
    );
}