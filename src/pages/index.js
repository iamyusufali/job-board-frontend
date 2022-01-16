import React from "react";
import { Link } from "gatsby";
import { Box, Heading, Container, Text, Button, Stack } from "@chakra-ui/react";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Container maxW="3xl">
        <Stack as={Box} textAlign="center" spacing={{ base: 8, md: 14 }} py={{ base: 20, md: 36 }}>
          <Heading fontWeight={600} fontSize={{ base: "2xl", sm: "4xl", md: "6xl" }} lineHeight="110%">
            View & Post Great Job
            <br />
            <Text as="span" color="primary">
              Opportunities
            </Text>
          </Heading>
          <Text color="gray.500">
            View the all the jobs available across the world and choose the one you like. Sign in to post your own jobs
            and manage them with ease.
          </Text>
          <Stack>
            <Link to="/app/job-listing">
              <Button
                bg="primary"
                rounded="full"
                color="white"
                px={10}
                py={6}
                _hover={{
                  bg: "primary",
                }}
              >
                View All Jobs
              </Button>
            </Link>
            <Text mx={10}>Or</Text>
            <Link to="/sign-in">
              <Button
                bg="green.500"
                rounded="full"
                color="white"
                px={10}
                py={6}
                _hover={{
                  bg: "green.600",
                }}
              >
                Sign In
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Layout>
  );
}
