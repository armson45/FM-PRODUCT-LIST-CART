import { useCartStore } from "../store";
import FormatingPrice from "./FormatingPrice";

export default function CartTotal() {
    const total = useCartStore((state) => state.total());

    return (
        <section className="py-6">
            <p className="text-(--rose-900) flex justify-between">
                <span className="font-normal">Order Total</span>
                <FormatingPrice amount={total} className="text-xl font-bold" />
            </p>
        </section>
    );

}