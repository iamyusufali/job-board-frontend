import React, { useState } from "react";
import { Flex, Box, Button } from "@chakra-ui/react";

/**
 *
 * Pagination Component
 *
 *  @param data List of data to
 *  @param render Component to be rendered which takes data and key as arguments
 *  @param pageLimit The number of pages to be shown in the pagination.
 *  @param dataLimit The number of items to be shown on each page.
 *
 */
const Pagination = ({ data, dataCount, render, pageLimit, dataLimit, fetchData }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.floor(dataCount / dataLimit);

  function goToNextPage() {
    setCurrentPage(page => {
      const newPage = page + 1;
      fetchData((newPage - 1) * dataLimit, dataLimit);
      return newPage;
    });
  }

  function goToPreviousPage() {
    setCurrentPage(page => {
      const newPage = page - 1;
      fetchData((newPage - 1) * dataLimit, dataLimit);
      return newPage;
    });
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);

    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pages).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <Flex flexDirection="column" alignItems="center" py={10}>
      {data.map((data, idx) => render(data, idx))}

      {pages > 0 ? (
        <Flex>
          <Button onClick={goToPreviousPage} disabled={currentPage === 1}>
            prev
          </Button>

          {getPaginationGroup().map((item, index) => (
            <Button key={index} onClick={changePage} bg={currentPage === item ? "green.200" : "gray.300"}>
              <span>{item}</span>
            </Button>
          ))}

          <Button onClick={goToNextPage} disabled={currentPage === pages}>
            next
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Pagination;
