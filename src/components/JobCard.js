import React from "react";
import { Box, Center, Text, Stack, Button, useColorModeValue, Flex } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";

/***
 *
 * Job Card Component
 *
 ***/
const JobCard = ({ job, handleDelete, showDelete = false }) => {
  return (
    <Center py={6}>
      <Box
        position="relative"
        w={"800px"}
        bg={useColorModeValue("white", "gray.800")}
        boxShadow={"2xl"}
        rounded={"md"}
        overflow={"hidden"}
      >
        <Stack textAlign={"start"} py={4} px={8} color={useColorModeValue("blue.800", "white")}>
          <Text fontSize={"3xl"} ml={1} fontWeight={800}>
            {job.job_title}
          </Text>
          <Flex fontSize="16px">
            <Flex bg="green.200" py={1} px={4} rounded="full" mr={3}>
              <Text fontWeight="bold" mr={2}>
                Location:{" "}
              </Text>
              <Text>{job.location}</Text>
            </Flex>
            <Flex bg="green.200" py={1} px={4} rounded="full" mr={3}>
              <Text fontWeight="bold" mr={2}>
                Email:{" "}
              </Text>
              <Text>{job.contact_email}</Text>
            </Flex>
            <Flex bg="green.200" py={1} px={4} rounded="full">
              <Text fontWeight="bold" mr={2}>
                Job Type:{" "}
              </Text>
              <Text>{job.job_type}</Text>
            </Flex>
          </Flex>
        </Stack>

        <Box bg={useColorModeValue("gray.100", "gray.900")} px={6} py={4}>
          <Stack mt={5}>
            <Text>{job.description}</Text>
          </Stack>
        </Box>
        {showDelete ? (
          <Box
            as={Button}
            position="absolute"
            top={5}
            right={5}
            bg="red.400"
            colorScheme="red"
            onClick={() => handleDelete(job.id)}
          >
            <DeleteIcon />
          </Box>
        ) : null}
      </Box>
    </Center>
  );
};

export default JobCard;
