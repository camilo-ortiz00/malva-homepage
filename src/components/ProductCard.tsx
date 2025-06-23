"use client";
import { Product } from "@/data/products";
import Image from "next/image";
import styles from "@/styles/ProductCard.module.css";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className={styles.card}>
      <Image src={product.image} alt={product.name} width={300} height={400} />
      <div className={styles.info}>
        <p className={styles.brand}>{product.brand}</p>
        <h3 className={styles.title}>{product.name}</h3>
        <p className={styles.price}>${product.price.toLocaleString()}</p>
        <div className={styles.tags}>
          {product.tags.map((tag, i) => (
            <span key={i}>{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
