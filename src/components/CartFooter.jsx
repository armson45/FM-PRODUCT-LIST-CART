import CarbonNeutral from "./CarbonNeutral";
import { useCartStore } from "../store";

export default function CartFooter() {
    const cartLength = useCartStore((state) => state.cart.length);

    return (
        <section className="cart-footer">
            {cartLength > 0 && (
                <>
                    <CarbonNeutral />
                    <button
                        onClick={(e) => {
                            const alertDialog = document.querySelector("#confirm-modal");
                            alertDialog.showModal();
                        }}
                        id="confirm-order"
                        type="button"
                        className="w-full text-sm text-white font-semibold rounded-full bg-(--red) py-4 mt-6 hover:bg-(--red)/90 hover:cursor-pointer">
                        Confirm Order
                    </button>
                </>
            )}
        </section>
    );
}