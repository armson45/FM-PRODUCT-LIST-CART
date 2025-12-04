import FormatingPrice from "./FormatingPrice";

function OrderResume({ thumbnail, name, price, quantity }) {
    return (
        <article className="grid grid-cols-4 grid-rows-2 text-[14px] py-4 border-b border-(--rose-100) items-center">
            <div className="col-start-1 row-span-2 w-[65px] md:w-[100px]">
                <img src={thumbnail} className="rounded-md" alt="" />
            </div>
            <h3 className="col-start-2 font-semibold col-span-3 row-start-1">{name}</h3>
            <p className="col-start-2 text-[14px] flex justify-between max-w-44 gap-2">
                <strong className="text-(--red) font-semibold">{quantity}x</strong>
                <FormatingPrice amount={price} char="@" className="text-(--rose-500)" />
            </p>
            <FormatingPrice amount={price * quantity} className="text-(--rose-900) font-semibold col-start-4 row-start-1 row-span-2 justify-self-center" />
        </article>
    );
}

export default OrderResume;