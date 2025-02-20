import { Fragment } from "react";
import useStepper from "../hooks/useStepper";
import Pagination from "../components/Pagination";

export default function PostList() {
  const {
    data,
    error,
    isValidating,
    handleNext,
    handlePrevious,
    handlePageChange,
    MAX_PAGE,
  } = useStepper({
    pageSize: 8,
  });

  

  return (
    <Fragment>
      <Pagination
      data={data}
      error={error}
      isValidating={isValidating}
      handleNext={handleNext}
      handlePrevious={handlePrevious}
      MAX_PAGE={MAX_PAGE}
      handlePageChange={handlePageChange}
      />
    </Fragment>
  );
}
