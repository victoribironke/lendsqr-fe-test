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

    const renderPageButton = (page: number) => (
      <button
        key={page}
        className={cn(styles.pageBtn, currentPage === page && styles.active)}
        onClick={() => handlePageChange(page)}
      >
        {page}
      </button>
    );

    const renderEllipsis = (key: string) => <span key={key}>...</span>;

    if (totalPages <= 7) {
      // Render all pages when total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(renderPageButton(i));
      }
    } else {
      // Always show first page
      pages.push(renderPageButton(1));

      const shouldShowStartEllipsis = currentPage > 3;
      const shouldShowEndEllipsis = currentPage < totalPages - 2;

      const startPage = Math.max(2, currentPage - 1);
      const endPage = Math.min(totalPages - 1, currentPage + 1);

      if (shouldShowStartEllipsis) {
        pages.push(renderEllipsis("start-ellipsis"));
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(renderPageButton(i));
      }

      if (shouldShowEndEllipsis) {
        pages.push(renderEllipsis("end-ellipsis"));
      }

      // Always show last page
      pages.push(renderPageButton(totalPages));
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
