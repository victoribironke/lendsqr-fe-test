import { useState } from "react";
import styles from "@/styles/user-table.module.scss";
import { UsersTableProps } from "@/types/general";
import { cn, formatDate } from "@/lib/utils";
import { useUsers } from "@/context/user-context";
import { useRouter } from "next/navigation";
import { IMAGES, PAGES, USER_KEY } from "@/constants/constants";
import FilterPanel from "./filter-panel";
import { USERS } from "@/constants/users";

const UsersTable = ({
  data,
  filters,
  onFilterChange,
  onFilterApply,
}: UsersTableProps) => {
  const { push } = useRouter();
  const [showFilter, setShowFilter] = useState(false);
  const { users, deactivateUser, activateUser, blacklistUser } = useUsers();
  const [actionMenuOpen, setActionMenuOpen] = useState("");

  const handleToggleFilter = () => setShowFilter(!showFilter);

  const handleToggleActionMenu = (id: string) =>
    setActionMenuOpen((k) => (k === id ? "" : id));

  const closeActionMenu = () => setActionMenuOpen("");

  const handleViewDetails = (userId: string) => {
    localStorage.setItem(
      USER_KEY,
      JSON.stringify(users.find((u) => u.id === userId))
    );

    push(PAGES.user_details(userId));
    closeActionMenu();
  };

  const handleBlacklistUser = (userId: string) => {
    blacklistUser(userId);
    closeActionMenu();
  };

  const handleActivateUser = (userId: string) => {
    activateUser(userId);
    closeActionMenu();
  };

  const handleDeactivateUser = (userId: string) => {
    deactivateUser(userId);
    closeActionMenu();
  };

  return (
    <div className={styles.container}>
      <div className={styles.tableContainer}>
        <div className={styles.headerRow}>
          <div className={styles.headerItem}>
            Organization
            <span className={styles.filterIcon} onClick={handleToggleFilter}>
              <img src={IMAGES.filter} alt="" />
            </span>
          </div>
          <div className={styles.headerItem}>
            Username
            <span className={styles.filterIcon} onClick={handleToggleFilter}>
              <img src={IMAGES.filter} alt="" />
            </span>
          </div>
          <div className={styles.headerItem}>
            Email
            <span className={styles.filterIcon} onClick={handleToggleFilter}>
              <img src={IMAGES.filter} alt="" />
            </span>
          </div>
          <div className={styles.headerItem}>
            Phone Number
            <span className={styles.filterIcon} onClick={handleToggleFilter}>
              <img src={IMAGES.filter} alt="" />
            </span>
          </div>
          <div className={styles.headerItem}>
            Date Joined
            <span className={styles.filterIcon} onClick={handleToggleFilter}>
              <img src={IMAGES.filter} alt="" />
            </span>
          </div>
          <div className={styles.headerItem}>
            Status
            <span className={styles.filterIcon} onClick={handleToggleFilter}>
              <img src={IMAGES.filter} alt="" />
            </span>
          </div>
        </div>

        {data.map((user) => (
          <div key={user.id} className={styles.dataRow}>
            <div className={styles.dataItem}>{user.organization}</div>
            <div className={styles.dataItem}>{user.username}</div>
            <div className={styles.dataItem}>{user.email}</div>
            <div className={styles.dataItem}>{user.phoneNumber}</div>
            <div className={styles.dataItem}>{formatDate(user.dateJoined)}</div>
            <div className={styles.dataItem}>
              <span
                className={cn(
                  styles.statusBadge,
                  user.status === "active"
                    ? styles.active
                    : user.status === "inactive"
                    ? styles.inactive
                    : user.status === "pending"
                    ? styles.pending
                    : styles.blacklisted
                )}
              >
                {user.status}
              </span>
              <div className={styles.dataItem}>
                <button
                  className={styles.actionButton}
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleActionMenu(user.id);
                  }}
                >
                  <img src={IMAGES.menu} alt="" />
                </button>
                {actionMenuOpen === user.id && (
                  <div className={styles.menuContainer}>
                    <div
                      className={styles.menuItem}
                      onClick={() => handleViewDetails(user.id)}
                    >
                      <img src={IMAGES.eye} alt="" />
                      View Details
                    </div>
                    {user.status !== "blacklisted" && (
                      <div
                        className={styles.menuItem}
                        onClick={() => handleBlacklistUser(user.id)}
                      >
                        <img src={IMAGES.user} alt="" />
                        Blacklist User
                      </div>
                    )}
                    {user.status !== "active" && (
                      <div
                        className={styles.menuItem}
                        onClick={() => handleActivateUser(user.id)}
                      >
                        <img src={IMAGES.userDelete} alt="" />
                        Activate User
                      </div>
                    )}
                    {user.status === "active" && (
                      <div
                        className={styles.menuItem}
                        onClick={() => handleDeactivateUser(user.id)}
                      >
                        <img src={IMAGES.userDelete} alt="" />
                        Deactivate User
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}

        {showFilter && (
          <div>
            <FilterPanel
              values={filters}
              onChange={onFilterChange}
              onFilter={onFilterApply}
              onClose={() => setShowFilter(false)}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default UsersTable;
