"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ProductCard from "./ProductCard";
import { Product } from "@/data/products";
import styles from "@/styles/ProductSlider.module.css";

export default function ProductSlider({ products }: { products: Product[] }) {
  return (
    <section className={styles.sliderSection}>
      <div className={styles.sliderHeader}>
        <div className={styles.arrows}>
            <div className={`swiper-button-prev ${styles.arrow}`}></div>
            <div className={`swiper-button-next ${styles.arrow}`}></div>
        </div>
      </div>

      <Swiper
        modules={[Navigation]} // Activa el módulo de navegación (flechas)
        navigation={{
          nextEl: ".swiper-button-next", 
          prevEl: ".swiper-button-prev", 
        }}
        spaceBetween={5} // Espacio entre slides en px
        slidesPerView="auto" // Slides se ajustan al contenido automáticamente
        breakpoints={{
          768: { slidesPerView: 3.5 }, // En pantallas mayores a 768px, muestra 3.5 slides
        }}
      >
        
        {/* Renderiza cada producto en su propio slide */}
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <ProductCard product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
