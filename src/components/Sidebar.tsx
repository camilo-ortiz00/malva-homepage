import { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/styles/Sidebar.module.css";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const [selectedMenu, setSelectedMenu] = useState<"mujer" | "hombre" | "brand" | null>("mujer");
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);

  //Hook que bloquea el scroll mientras el sidebar está abierto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"; 
    } else {
      document.body.style.overflow = ""; 
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Abre un submenú dentro del menú activo
  const openSubmenu = (menu: string) => {
    setActiveSubmenu(menu);
  };

  // Vuelve al menú principal desde un submenú
  const goBack = () => {
    setActiveSubmenu(null);
  };


  return (
    <>
    <aside
      className={`${styles.sidebar} ${isOpen ? styles.open : ""}`}
      onClick={(e) => e.stopPropagation()}// Evita que clicks en el sidebar cierren el modal
    >
      <div className={styles.headerContainer}>
        <div className={styles.logoMobile}>
          <Image src="/icono.png" alt="Icono Malva" width={33} height={33} />
        </div>
        <button className={`${styles.closeButtonMobile}`} onClick={onClose}>×</button>
      </div>

      {/* Selector de menú (mujer, hombre, brand) */}
      <div className={styles.selectorRow}>
        <div className={styles.logoDesktop}>
          <Image src="/icono.png" alt="Icono Malva" width={33} height={33} />
        </div>
        <div className={styles.selectorContainer}>
          <button onClick={() => setSelectedMenu("mujer")} className={selectedMenu === "mujer" ? styles.active : ""}>Mujer</button>
          <button onClick={() => setSelectedMenu("hombre")} className={selectedMenu === "hombre" ? styles.active : ""}>Hombre</button>
          <button onClick={() => setSelectedMenu("brand")} className={selectedMenu === "brand" ? styles.active : ""}>Shop by Brand</button>
        </div>
      </div>

      {/* Selector de menú (mujer donde solamente se aplica la siguiente estructura,
        se omite en las demás para no hacer tan largo el código */}
      <nav className={styles.menuContainer}>
        {selectedMenu === "mujer" && (
          <>
            {!activeSubmenu && (
              <ul className={styles.menu}>
                <li><a href="#">Ir a inicio</a></li>
                <li className={styles.clickableLi} onClick={() => openSubmenu("New in")}>
                  <a href="#">New in</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>
                <li className={styles.clickableLi} onClick={() => openSubmenu("Malva Edition")}>
                  <a href="#">Malva Edition</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>
                <li className={styles.clickableLi} onClick={() => openSubmenu("Ropa")}>
                  <a href="#">Ropa</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>
                <li className={styles.clickableLi} onClick={() => openSubmenu("Calzado")}>
                  <a href="#">Calzado</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>   
                <li className={styles.clickableLi} onClick={() => openSubmenu("Diseñadores")}>
                  <a href="#">Diseñadores</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>    
                <li className={styles.clickableLi} onClick={() => openSubmenu("Accesorios")}>
                  <a href="#">Accesorios</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>
                <li className={styles.clickableLi} onClick={() => openSubmenu("Joyeria")}>
                  <a href="#">Joyeria</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>         
                <li className={styles.clickableLi} onClick={() => openSubmenu("Outlet")}>
                  <a href="#">Outlet</a>
                  <Image src="/arrow-right.png" alt="→" width={16} height={16} className={styles.liIcon} />
                </li>
              </ul>
            )}

            {/* Submenús */}
            {activeSubmenu === "New in" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Colecciones</a></li>
                <li><a href="#" className={styles.options}>Ropa</a></li>
                <li><a href="#" className={styles.options}>Calzado</a></li>
                <li><a href="#" className={styles.options}>Bolsos y Carteras</a></li>
              </ul>
            )}

            {activeSubmenu === "Malva Edition" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>            
                <li><a href="#" className={styles.options}>Herencia Verde</a></li>
                <li><a href="#" className={styles.options}>A ModoMio</a></li>
                <li><a href="#" className={styles.options}>Andrea Landa</a></li>
                <li><a href="#" className={styles.options}>Annais Yucra</a></li>
                <li><a href="#" className={styles.options}>Maria Elena Villamil</a></li>
                <li><a href="#" className={styles.options}>Patricia Mejia</a></li>
                <li><a href="#" className={styles.options}>Sandra Weil</a></li>
              </ul>
            )}

            {activeSubmenu === "Ropa" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Blusas</a></li>
                <li><a href="#" className={styles.options}>Pantalones</a></li>
                <li><a href="#" className={styles.options}>Chaquetas</a></li>
              </ul>
            )}

            {activeSubmenu === "Calzado" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Blusas</a></li>
                <li><a href="#" className={styles.options}>Pantalones</a></li>
                <li><a href="#" className={styles.options}>Chaquetas</a></li>
              </ul>
            )}

            {activeSubmenu === "Diseñadores" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Blusas</a></li>
                <li><a href="#" className={styles.options}>Pantalones</a></li>
                <li><a href="#" className={styles.options}>Chaquetas</a></li>
              </ul>
            )}

            {activeSubmenu === "Accesorios" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Blusas</a></li>
                <li><a href="#" className={styles.options}>Pantalones</a></li>
                <li><a href="#" className={styles.options}>Chaquetas</a></li>
              </ul>
            )}

            {activeSubmenu === "Joyeria" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Blusas</a></li>
                <li><a href="#" className={styles.options}>Pantalones</a></li>
                <li><a href="#" className={styles.options}>Chaquetas</a></li>
              </ul>
            )}

            {activeSubmenu === "Outlet" && (
              <ul className={styles.submenu}>
                <li>
                  <button onClick={goBack} className={styles.backButton}>
                    <Image
                      src="/arrow-left.png"
                      alt="←"
                      width={18}
                      height={18}
                      className={styles.liIcon}
                    />
                    <span>Volver a {selectedMenu}</span>
                  </button>
                </li>
                <li className={styles.submenuHeader}>
                  <span>{activeSubmenu}</span>
                  <a href="#" className={styles.viewAll}>Ver todo</a>
                </li>
                <li><a href="#" className={styles.options}>Blusas</a></li>
                <li><a href="#" className={styles.options}>Pantalones</a></li>
                <li><a href="#" className={styles.options}>Chaquetas</a></li>
              </ul>
            )}
          </>
        )}

        {/* Menú para Hombre */}
        {selectedMenu === "hombre" && (
          <ul className={styles.menu}>
            <li><a href="#">Ir a inicio</a></li>
            <li className={styles.clickableLi}>
              <a href="#">Novedades</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Diseñadores</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>              
            <li className={styles.clickableLi}>
              <a href="#">Ropa</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Calzado</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Outlet</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
          </ul>
        )}

        {/* Menú para Brand */}
        {selectedMenu === "brand" && (
          <ul className={styles.menu}>
            <li className={styles.clickableLi}>
              <a href="#">Ir a inicio</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Moda Internacional</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Moda Nacional</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Bolsos y Carteras</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
            <li className={styles.clickableLi}>
              <a href="#">Accesorios</a>
              <Image
                src="/arrow-right.png"
                alt="Ícono"
                width={16}
                height={16}
                className={styles.liIcon}
                />
            </li>
          </ul>
        )}
      </nav>
      </aside>

      {/* Overlay para bloquear el fondo cuando el sidebar está abierto */}
      {isOpen && (
      <div className={styles.overlay} onClick={onClose}></div>
      )}
      {isOpen && (
        <button className={styles.closeButton} onClick={onClose}>×</button>
      )}
    </>
  );
}
