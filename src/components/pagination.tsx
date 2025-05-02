import styles from "@/styles/pagination.module.scss";
import Select from "@/ui/select";
import { PaginationProps } from "@/types/general";
import { cn } from "@/lib/utils";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const pageSizes = [
  { label: "10", value: "10" },
  { label: "30", value: "30" },
  { label: "50", value: "50" },
  { label: "100", value: "100" },
];

const Pagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  setCurrentPage,
  setItemsPerPage,
}: PaginationProps) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const renderPages = () => {
    const pages = [];

    if (totalPages <= 7) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(
          <button
            key={i}
            className={cn(
              styles.pageBtn,
              currentPage === i ? styles.active : ""
            )}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }
    } else {
      pages.push(
        <button
          key={1}
          className={cn(styles.pageBtn, currentPage === 1 ? styles.active : "")}
          onClick={() => handlePageChange(1)}
        >
          1
        </button>
      );

      if (currentPage > 3) pages.push(<span key="start-ellipsis">...</span>);

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      for (let i = startPage; i <= endPage; i++) {
        pages.push(
          <button
            key={i}
            className={cn(
              styles.pageBtn,
              currentPage === i ? styles.active : ""
            )}
            onClick={() => handlePageChange(i)}
          >
            {i}
          </button>
        );
      }

      if (currentPage < totalPages - 2)
        pages.push(<span key="end-ellipsis">...</span>);

      pages.push(
        <button
          key={totalPages}
          className={cn(
            styles.pageBtn,
            currentPage === totalPages ? styles.active : ""
          )}
          onClick={() => handlePageChange(totalPages)}
        >
          {totalPages}
        </button>
      );
    }

    return pages;
  };

  return (
    <div className={styles.paginationWrapper}>
      <div className={styles.selectWrapper}>
        <span>Showing</span>
        <Select
          placeholder="Select"
          options={pageSizes}
          value={itemsPerPage.toString()}
          onChange={(val) => {
            setItemsPerPage(parseInt(val));
            setCurrentPage(1);
          }}
          direction="top"
        />
        <span>out of {totalItems}</span>
      </div>

      <div className={styles.pageControls}>
        <button
          className={styles.arrowBtn}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          <IoIosArrowBack />
        </button>
        {renderPages()}
        <button
          className={styles.arrowBtn}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
