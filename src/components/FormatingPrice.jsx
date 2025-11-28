export default function FormatingPrice({ amount, char = '$ ', className = '' }) {
    const formattedAmount = new Intl.NumberFormat("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    }).format(amount);

    return (
        <span className={className}>{`${char} ${formattedAmount}`}</span>
    )
}