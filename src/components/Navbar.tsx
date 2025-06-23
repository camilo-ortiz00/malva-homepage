'use client';
import { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Image from "next/image";
import styles from "@/styles/Navbar.module.css";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  //Hook para mostrar u ocultar el navbar
  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setShowNavbar(currentScrollY < lastScrollY || currentScrollY < 10);
      setScrollY(currentScrollY);

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Combina clases dinámicamente según el scroll y visibilidad del navbar
  const navbarClass = `
    ${styles.navbar} 
    ${scrollY > 0 ? styles.scrolled : styles.transparent} 
    ${showNavbar ? styles.visible : styles.hidden}
  `;

  return (
    <>
      <nav className={navbarClass}>
          <div className={styles.Left}>
            <button className={styles.hamburger} onClick={() => setSidebarOpen(true)}>☰</button>

            {/* Logo para desktop */}
            <Image
              src="/logo.webp"
              alt="Logo Malva"
              width={100}
              height={100}
              className={styles.logoDesktop}
            />

            <a href="">Mujer</a>
            <a href="">Hombre</a>
          </div>

          {/* Logo centrado para mobile */}
          <div className={styles.centerLogoMobile}>
            <Image
              src="/logo.webp"
              alt="Logo Malva Mobile"
              width={100}
              height={100}
              className={styles.logoMobile}
            />
          </div>

          <div className={styles.Right}>
            <Image src="/search.png" alt="Search" width={20} height={20} />
            <Image src="/user.png" alt="User" width={20} height={20} />
            <Image src="/bag.png" alt="Bag" width={20} height={20} />
          </div>
        </nav>


      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />
    </>
  );
}
