import { Pagination } from "react-bootstrap";

const CustomPagination = ({handleNext, handlePrev, currentPageNo}) => {
  return (
    <Pagination data-testid="table-pagination">
      <Pagination.Prev onClick={handlePrev} data-testid="prev-page-button"/>
      <Pagination.Item>{currentPageNo}</Pagination.Item>
      <Pagination.Next onClick={handleNext} data-testid="next-page-button"/>
    </Pagination>
  );
};

export default CustomPagination;
