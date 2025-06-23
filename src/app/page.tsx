// src/app/page.tsx (o Home.tsx)
import { products } from "@/data/products";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductSlider from "@/components/ProductSlider";
import styles from "@/styles/Home.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <main className={styles.main}>
        <section className={styles.heroSection}>
          <picture className={styles.hero}>
            <source
              srcSet="/principal2.webp"
              media="(max-width: 768px)"
            />
            <Image
              src="/principal.webp"
              alt="Producto Principal"
              className={styles.heroImage}
              width={1200}
              height={500}
              priority
            />
          </picture>
           <div className={styles.heroText}>
              <h1>Stella McCartney</h1>
              <p>Conscious fashion that speaks of elegance and innovation</p>
              <a href="#">Shop Now</a>
            </div>
        </section>

        <ProductSlider products={products} />
      </main>
      <Footer />
    </>
  );
}
