import { DeleteItemIcon } from "../assets/icons/CartButtonIcon";
import { useCartStore } from "../store";
import FormatingPrice from "./FormatingPrice";

function EmptyCart() {
	return (
		<section className="text-center mt-6">
			<div className="mx-auto ">
				<img className="mx-auto w-32" src="../src/assets/images/illustration-empty-cart.svg" alt="" />
			</div>
			<p className="text-(--rose-500) font-semibold text-sm md:text-[16px]">Your added items will appear here!</p>
		</section>
	);
}

function ItemsInCart({ cart }) {
	const removeItem = useCartStore((state)=> state.removeItem);
	return (
		<section className="cart-items selected-items mt-6">
			{
				cart.map((item) => (
					<article key={item.id} className="grid grid-cols-2 grid-rows-2 py-4 border-b border-(--rose-100)">
						<h3 className="col-start-1 font-semibold text-(--rose-900) text-sm">
							{item.name}
						</h3>
						<p className="col-start-1 text-[14px] flex justify-between max-w-44 gap-2">
							<strong className="text-(--red) font-semibold">{item.quantity}x</strong>
							<FormatingPrice amount={item.price} char="@" className="text-(--rose-500)" />
							<FormatingPrice amount={item.price * item.quantity} className="text-(--rose-500) font-semibold" />
						</p>
						<button onClick={() => removeItem(item.id)}
							className="col-start-2 row-span-full text-(--red) font-bold justify-self-end">
							<DeleteItemIcon />
						</button>
					</article>
				))
			}
		</section>
	);
}

export default function CartItems() {
	const cart = useCartStore((state) => state.cart);
	return (
		cart.length === 0 ? <EmptyCart /> : <ItemsInCart cart={cart} />
	);
}