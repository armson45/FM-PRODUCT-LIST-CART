import CarbonNeutral from "./CarbonNeutral";
import { useCartStore } from "../store";

export default function CartFooter() {
    const cartLength = useCartStore((state) => state.cart.length);

    return (
        <section>
            {cartLength > 0 && (
                <>
                    <CarbonNeutral />
                    <br></br>
                    <button
                        type="button"
                        className="w-full text-sm text-white font-semibold rounded-full bg-(--red) py-4">
                        Confirm Order
                    </button>
                </>
            )}
        </section>
    );
}