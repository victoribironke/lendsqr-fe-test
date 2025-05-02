"use client";

import { Toaster } from "react-hot-toast";
import styles from "@/styles/users-layout.module.scss";
import { useEffect, useState } from "react";
import { IMAGES } from "@/constants/constants";
import { cn } from "@/lib/utils";
import { IoIosMenu, IoMdArrowDropdown } from "react-icons/io";
import { TfiBell } from "react-icons/tfi";
import { IoSearchOutline } from "react-icons/io5";
import Sidebar from "@/components/sidebar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [placeholder, setPlaceholder] = useState("Search for anything");

  const toggleMenu = () => setMenuOpen((k) => !k);

  useEffect(() => {
    const handleResize = () =>
      setPlaceholder(
        window.innerWidth <= 768 ? "Search" : "Search for anything"
      );

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <main>
      <Toaster />

      <nav className={styles.navbar}>
        <div className={styles.logoAndSearchContainer}>
          <div className={styles.logo}>
            <img src={IMAGES.lendsqr_logo} alt="Lendsqr logo" />
          </div>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <IoIosMenu />
          </div>

          <div className={styles.inputContainer}>
            <input type="text" placeholder={placeholder} />
            <button>
              <IoSearchOutline />
            </button>
          </div>
        </div>

        <div className={styles.navRight}>
          <a href="#" className={styles.navLink}>
            Docs
          </a>
          <TfiBell fill="#213f7d" size={25} />
          <div className={styles.userProfile}>
            <div className={styles.avatar}>
              <img src="https://api.dicebear.com/9.x/dylan/svg" alt="Avatar" />
            </div>
            <span className={styles.userName}>Victor</span>
            <IoMdArrowDropdown fill="#213f7d" />
          </div>
        </div>

        {menuOpen && (
          <div
            className={cn(styles.overlay, menuOpen && styles.open)}
            onClick={toggleMenu}
          />
        )}

        <div className={cn(styles.mobileMenu, menuOpen && styles.open)}>
          <Sidebar height="100vh" boxShadow="none" toggleMenu={toggleMenu} />
        </div>
      </nav>

      <div className={styles.sidebarAndOutletLayout}>
        <div className={styles.sidebar}>
          <Sidebar />
        </div>
        <div className={styles.outlet}>{children}</div>
      </div>
    </main>
  );
};

export default Layout;
