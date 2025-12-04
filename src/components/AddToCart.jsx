import { CartIcon } from "../assets/icons/CartButtonIcon.tsx";
import { useEffect } from "react";
import { useCartStore } from "../store.ts";
import CounterButton from "./CounterButton.jsx";

export default function CartButton({ product }) {
    const addToCart = useCartStore((state) => state.addToCart);

    const cart = useCartStore((state) => state.cart);
    const isActive = cart.some((item) => item.id === product.id);

    const handleSaveButton = () => {
        addToCart(product);
    };

    // Add/remove active class to product item image when cart button is clicked
    useEffect(() => {
        const $productArticle = document.querySelector(`.product-item[data-id="${product.id}"]`);
        const $productItemImage = $productArticle.querySelector(".product-item__image");
        $productItemImage.classList.toggle("product-item__image--active", isActive);
    }, [isActive]);

    function AddButton() {
        return (
            <button onClick={handleSaveButton} className="product-item__cart-button flex align-center justify-center gap-2 w-[160px] rounded-full bg-white outline outline-(--rose-400) py-3 text-(--rose-900) font-semibold text-sm">
                <CartIcon /> Add to Cart
            </button>
        );
    }

    return (
        isActive ? <CounterButton productId={product.id} /> : <AddButton />
    )
}