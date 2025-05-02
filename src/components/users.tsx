"use client";

import { useState } from "react";
import styles from "@/styles/users.module.scss";
import { useUsers } from "@/context/user-context";
import UsersTable from "./users-table";
import { IMAGES } from "@/constants/constants";
import Pagination from "./pagination";

const Users = () => {
  const { users, stats, loading } = useUsers();
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [filters, setFilters] = useState({
    organization: "",
    username: "",
    email: "",
    date: "",
    phoneNumber: "",
    status: "",
  });
  const [tempFilters, setTempFilters] = useState({ ...filters });

  const filteredUsers = users.filter((user) => {
    return (
      (!filters.organization || user.organization === filters.organization) &&
      (!filters.username ||
        user.username.toLowerCase().includes(filters.username.toLowerCase())) &&
      (!filters.email ||
        user.email.toLowerCase().includes(filters.email.toLowerCase())) &&
      (!filters.date ||
        new Date(user.dateJoined).toLocaleDateString() ===
          new Date(filters.date).toLocaleDateString()) &&
      (!filters.phoneNumber ||
        user.phoneNumber.includes(filters.phoneNumber)) &&
      (!filters.status || user.status === filters.status)
    );
  });

  const result = filteredUsers;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = result.slice(indexOfFirstItem, indexOfLastItem);

  if (loading) {
    return (
      <div className={styles.loadingContainer}>
        <p>Loading...</p>
      </div>
    );
  }

  return (
    <div className={styles.userContainer}>
      <h1 className={styles.title}>Users</h1>
      <div className={styles.cardContainer}>
        <div className={styles.detailsCard}>
          <div>
            <img src={IMAGES.person} alt="" />
          </div>
          <h4>Users</h4>
          <span>{stats.totalUsers}</span>
        </div>

        <div className={styles.detailsCard}>
          <div>
            <img src={IMAGES.people} alt="" />
          </div>
          <h4>Active users</h4>
          <span>{stats.activeUsers}</span>
        </div>

        <div className={styles.detailsCard}>
          <div>
            <img src={IMAGES.file} alt="" />
          </div>
          <h4>Users with loans</h4>
          <span>{stats.usersWithLoans}</span>
        </div>

        <div className={styles.detailsCard}>
          <div>
            <img src={IMAGES.money} alt="" />
          </div>
          <h4>Users with savings</h4>
          <span>{stats.usersWithSavings}</span>
        </div>
      </div>
      <div>
        <UsersTable
          data={currentUsers}
          filters={tempFilters}
          onFilterChange={(e) =>
            setTempFilters((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
          onFilterApply={() => {
            setCurrentPage(1);
            setFilters(tempFilters);
          }}
        />

        <Pagination
          totalItems={result?.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          setItemsPerPage={(val) => setItemsPerPage(val)}
        />
      </div>
    </div>
  );
};

export default Users;
