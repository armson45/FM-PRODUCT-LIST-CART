import { useCartStore } from "../store";
import CartContentItemBase from "./CartContentItemsBase";
import OrderResume from "./CartContentOrderResume";
import CartTotal from "./CartTotal";

function EmptyCart() {
	return (
		<section className="text-center mt-6">
			<div>
				<img className="mx-auto w-32" src="/images/illustration-empty-cart.svg" alt="" />
			</div>
			<p className="text-(--rose-500) font-semibold text-sm md:text-[16px]">Your added items will appear here!</p>
		</section>
	);
}

function ItemsInCart({ cart, inModal }) {

	return (
		<div>
			<section className="cart-items selected-items mt-6 overflow-y">
				{
					cart.map((item) => (
						inModal ?
							<OrderResume key={item.id} name={item.name} quantity={item.quantity} price={item.price} thumbnail={item.image.thumbnail} />
							: <CartContentItemBase key={item.id} id={item.id} name={item.name} quantity={item.quantity} price={item.price} />
					))
				}
			</section>
			<CartTotal />
		</div>
	);
}

export default function CartContent({ inModal = false }) {
	const cart = useCartStore((state) => state.cart);
	return (
		cart.length === 0 ? <EmptyCart /> : <ItemsInCart cart={cart} inModal={inModal} />
	);
}