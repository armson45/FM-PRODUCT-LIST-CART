import { useCartStore } from "../store";
import FormatingPrice from "./FormatingPrice";

export default function CartTotal() {
    const total = useCartStore((state) => state.total());
    const cartLength = useCartStore((state) => state.cart.length);

    return (
        <section className="py-6">
            {
                cartLength > 0 && (
                    <p className="text-(--rose-900) flex justify-between">
                        <span className="font-normal">Order Total</span>
                        <FormatingPrice amount={total} className="text-xl font-bold"/>
                    </p>
                )
            }
        </section>
    );

}