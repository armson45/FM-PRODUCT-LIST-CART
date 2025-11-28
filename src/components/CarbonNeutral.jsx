import { CarbonNeutralIcon } from "../assets/icons/CartButtonIcon";

export default function CarbonNeutral() {
    return (
        <section className="text-[14px] rounded-[8px] bg-(--rose-50) text-(--rose-900) p-4 flex justify-center gap-3">
            <CarbonNeutralIcon />
            <p>
                This is a <strong>carbon-neutral</strong> delivery.
            </p>
        </section>
    );
}