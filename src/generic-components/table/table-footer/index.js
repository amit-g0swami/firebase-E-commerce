import { Button } from "../../button/Button";

export const TableFooter = ({ currentPage, totalPages, onPageChange }) => {
  const isFirstPage = currentPage === 1;
  const isLastPage = currentPage === totalPages;
  const goBack = () => {
    if (!isFirstPage) {
      onPageChange(currentPage - 1);
    }
  };
  const goNext = () => {
    if (!isLastPage) {
      onPageChange(currentPage + 1);
    }
  };
  return (
    <div className="pagination">
      <Button
        onClick={goBack}
        disabled={isFirstPage}
        className={isFirstPage ? "disabled-button" : ""}
      >
        Back
      </Button>
      <span className="current-page">{currentPage}</span>
      <Button
        onClick={goNext}
        disabled={isLastPage}
        className={isLastPage ? "disabled-button" : ""}
      >
        Next
      </Button>
    </div>
  );
};
