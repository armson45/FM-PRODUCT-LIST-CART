import FormatingPrice from "./FormatingPrice";
import { DeleteItemIcon } from "../assets/icons/CartButtonIcon";
import { useCartStore } from "../store";

function CartContentItemBase({ id, name, quantity, price }) {
    const removeItem = useCartStore((state) => state.removeItem);
    return (
        <article className="grid grid-cols-2 grid-rows-2 py-4 border-b border-(--rose-100)">
            <h3 className="col-start-1 font-semibold text-(--rose-900) text-sm">
                {name}
            </h3>
            <p className="col-start-1 text-[14px] flex justify-between max-w-44 gap-2">
                <strong className="text-(--red) font-semibold">{quantity}x</strong>
                <FormatingPrice amount={price} char="@" className="text-(--rose-500)" />
                <FormatingPrice amount={price * quantity} className="text-(--rose-500) font-semibold" />
            </p>
            <button onClick={() => removeItem(id)}
                className="col-start-2 row-span-full text-(--red) font-bold justify-self-end">
                <DeleteItemIcon />
            </button>
        </article>
    );
}

export default CartContentItemBase;