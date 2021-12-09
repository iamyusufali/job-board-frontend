import React from "react";
import { Grid, GridItem, Heading, Text, SimpleGrid, Box, Button, Flex } from "@chakra-ui/react";

const JobCard = ({ job, handleDelete, showDelete = false }) => {
  return (
    <Grid
      h="250px"
      w="60%"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(5, 1fr)"
      mb={5}
      borderRadius="5px"
      boxShadow="0 1px 10px 1px rgba(0, 0, 0, 0.1)"
    >
      <GridItem colSpan={4} p={5}>
        <Box>
          <Heading fontSize="1.5rem" mb={2}>
            {job.job_title}
          </Heading>
          <SimpleGrid columns={3} spacingX={3}>
            <Box>
              <Text>Location: {job.location}</Text>
            </Box>
            <Box>
              <Text>Job Type: {job.job_type}</Text>
            </Box>
            <Box>
              <Text>Contact Email: {job.contact_email}</Text>
            </Box>
          </SimpleGrid>
        </Box>
      </GridItem>
      {showDelete && (
        <GridItem colSpan={1} p={5}>
          <Flex justifyContent="end">
            <Button bg="red.300" _hover={{ bg: "red.400" }} onClick={() => handleDelete(job.id)}>
              Delete
            </Button>
          </Flex>
        </GridItem>
      )}
      <GridItem colSpan={5} p={5}>
        <Text color="gray.500">{job.description}</Text>
      </GridItem>
    </Grid>
  );
};

export default JobCard;
