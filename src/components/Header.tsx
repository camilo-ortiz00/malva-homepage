import styles from "@/styles/Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h5 className={styles.message}>Suscríbete hoy y recibe un 10% de descuento en tu primera compra</h5>
    </header>
  );
}
