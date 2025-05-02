import styles from "@/styles/sidebar.module.scss";
import { SidebarProps } from "@/types/general";
import { IMAGES, MENU_ITEMS } from "@/constants/constants";
import { IoIosArrowDown } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Sidebar = ({ height, boxShadow, toggleMenu }: SidebarProps) => {
  return (
    <aside className={styles.sidebar} style={{ height, boxShadow }}>
      <div className={styles.mobileNavLogoContainer}>
        <img src={IMAGES.lendsqr_logo} alt="" />
        <div onClick={toggleMenu}>
          <IoClose />
        </div>
      </div>
      <div className={styles.sidebarContent}>
        <div className={styles.switchOrg}>
          <img src={IMAGES.briefcase} alt="" />
          <span>Switch Organization</span>
          <IoIosArrowDown />
        </div>

        <div className={styles.dashboard}>
          <img src={IMAGES.dashboard} alt="" />
          <span>Dashboard</span>
        </div>

        <div className={styles.listContainer}>
          {MENU_ITEMS.map((m, i) => (
            <div className={styles.section} key={i}>
              <h3>{m.name}</h3>

              <ul>
                {m.subCategories.map((c, i) => (
                  <li
                    key={i}
                    className={c.name === "Users" ? styles.selected : ""}
                  >
                    <img src={c.icon} alt="" />
                    <span>{c.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.logout}>
        <img src={IMAGES.logout} alt="" />
        <span>Logout</span>
      </div>
    </aside>
  );
};

export default Sidebar;
