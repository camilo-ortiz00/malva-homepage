"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "@/styles/Footer.module.css";

export default function Footer() {
  const [showService, setShowService] = useState(false);
  const [showAbout, setShowAbout] = useState(false);
  const [agree, setAgree] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [showBottomMenu, setShowBottomMenu] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Maneja el envío del formulario
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (agree) {
      alert("Gracias por suscribirte.");
    }
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.columns}>

        {/* Sección de contacto */}
        <div className={`${styles.row} ${styles.followUs}`}>
            <h4>Síguenos</h4>
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">TikTok</a></li>
            </ul>
        </div>

        {/* Sección de Servicio al Cliente (colapsable en móvil) */}
        <div className={`${styles.column} ${styles.customerService}`}>
          <h4 onClick={() => setShowService(!showService)}>
            Servicio al Cliente 
            <Image
              src="/arrow.png"
              alt="Flecha"
              width={18}
              height={18}
              className={showService ? styles.arrowUp : styles.arrowDown}
            />
          </h4>
          {showService && (
            <ul>
              <li><a href="#">Contáctanos/PQRS</a></li>
              <li><a href="#">Recoge en tiendas</a></li>
              <li><a href="#">Localizador de tiendas</a></li>
            </ul>
          )}
        </div>

        {/* Sección "Quiénes Somos"  */}
        <div className={`${styles.column} ${styles.about}`}>
          <h4 onClick={() => setShowAbout(!showAbout)}>
            Quiénes Somos
            <Image
              src="/arrow.png"
              alt="Flecha"
              width={18}
              height={18}
              className={showAbout ? styles.arrowUp : styles.arrowDown}
            />
          </h4>
          {showAbout && (
            <ul>
              <li><a href="#">Nuestro equipo</a></li>
            </ul>
          )}
        </div>

        {/* Sección de formulario para newsletter */}
        <div className={`${styles.column} ${styles.newsletter}`}>
            <h3>Suscríbete a nuestro Newsletter</h3>
            <p>Regístrate para recibir el 10% de descuento en tu primera orden y ofertas exclusivas a lo largo del año</p>
            <form onSubmit={handleSubmit} className={styles.newsletterForm}>
            <div className={styles.checkboxGroup}>
            <label className={styles.checkbox}>
                <input
                type="checkbox"
                checked={selectedCategory === "mujer"}
                onChange={() => setSelectedCategory(selectedCategory === "mujer" ? null : "mujer")}
                />
                Mujer
            </label>
            <label className={styles.checkbox}>
                <input
                type="checkbox"
                checked={selectedCategory === "hombre"}
                onChange={() => setSelectedCategory(selectedCategory === "hombre" ? null : "hombre")}
                />
                Hombre
            </label>
            <label className={styles.checkbox}>
                <input
                type="checkbox"
                checked={selectedCategory === "niños"}
                onChange={() => setSelectedCategory(selectedCategory === "niños" ? null : "niños")}
                />
                Niños
            </label>
            </div>

            <div className={styles.inputRow}>
                <input type="email" placeholder="Correo electrónico" required />
                <button type="submit">Suscribirme</button>
            </div>

            <label className={styles.checkbox}>
                <input
                    type="checkbox"
                    checked={agree}
                    onChange={() => setAgree(!agree)}
                />
                <span>
                    Al enviar autorizo el <a href="#">tratamiento de datos personales</a>. Nuestra política de tratamiento de datos cambió, disponible <a href="#">AQUÍ</a>.
                </span>
            </label>

            {submitted && !agree && (
            <p className={styles.error}>Debes aceptar para suscribirte.</p>
            )}
            {submitted && !selectedCategory && (
            <p className={styles.error}>Debes seleccionar una categoría (Mujer, Hombre o Niños).</p>
            )}
            </form>
        </div>
      </div>

      {/* Fila inferior con links legales y derechos de autor */}
      <div className={styles.bottomRow}>
        <h4 className={styles.bottomRowTitle} onClick={() => setShowBottomMenu(!showBottomMenu)}>
          Legal
          <Image
            src="/arrow.png"
            alt="Flecha"
            width={18}
            height={18}
            className={showBottomMenu ? styles.arrowUp : styles.arrowDown}
          />
        </h4>

        {/* Este bloque se oculta/expande solo en mobile */}
        <div className={`${styles.bottomLinks} ${showBottomMenu ? styles.show : ''}`}>
          <a href="#">Política de tratamiento de datos</a>
          <a href="#">Términos y condiciones</a>
          <a href="#">SIC</a>
        </div>

        <p className={styles.bottomCopyright}>
          &copy; {new Date().getFullYear()}, MALVA ONLINE
        </p>
      </div>
    </footer>
  );
}
