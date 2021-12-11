import React, { useState } from "react";
import { Flex, Button, Stack } from "@chakra-ui/react";

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
  const pages = Math.ceil(dataCount / dataLimit);

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
    fetchData((pageNumber - 1) * dataLimit, dataLimit);
    setCurrentPage(pageNumber);
  }

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pages).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <Flex flexDirection="column" alignItems="center" py={10}>
      <Stack alignItems="center" w="100%" minH={"40rem"}>
        {data.map((data, idx) => render(data, idx))}
      </Stack>

      {dataCount > dataLimit ? (
        <Flex mt={5}>
          <Button
            onClick={goToPreviousPage}
            bg="gray.600"
            _hover={{ bg: "gray.600" }}
            color="white"
            disabled={currentPage === 1}
            mr={2}
            rounded="full"
          >
            prev
          </Button>

          {getPaginationGroup().map((item, index) => (
            <Button
              key={index}
              onClick={changePage}
              bg={currentPage === item ? "green.500" : "gray.200"}
              color={currentPage === item ? "white" : "gray.800"}
              borderRadius="50%"
              outline="none"
            >
              <span>{item}</span>
            </Button>
          ))}

          <Button
            onClick={goToNextPage}
            bg="gray.600"
            _hover={{ bg: "gray.600" }}
            color="white"
            disabled={currentPage === pages}
            ml={2}
            rounded="full"
          >
            next
          </Button>
        </Flex>
      ) : null}
    </Flex>
  );
};

export default Pagination;
