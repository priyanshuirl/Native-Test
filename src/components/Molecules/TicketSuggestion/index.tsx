import styles from "./TicketSuggestion.module.css";

interface PropTypes {
  ticketQty: number;
  price: number;
  currency?: string;
  chipColor: string;
  description: string;
}

export default function TicketSuggestion({
  chipColor = "#1ec56c",
  description,
  price,
  ticketQty,
  currency = "¥",
}: PropTypes) {
  return (
    <div className={styles.card}>
      <div className="flex items-center justify-between mb-3">
        <div className={styles.chip} style={{ backgroundColor: chipColor }}>
          {ticketQty} チケット
        </div>
        <p className={styles.price}>
          {currency} {Number(price).toLocaleString()}
        </p>
      </div>
      <p className="text-[#595959] text-[12px] ">{description}</p>
    </div>
  );
}
