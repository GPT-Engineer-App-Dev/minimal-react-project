import { Box, Container, Flex, Heading, Link, Spacer, VStack, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Index = () => {
  return (
    <Container maxW="container.xl" p={4}>
      <Flex as="nav" bg="blue.500" color="white" p={4} borderRadius="md">
        <Heading size="md">MyApp</Heading>
        <Spacer />
        <Box>
          <Link as={RouterLink} to="/" p={2} color="white">
            Home
          </Link>
          <Link as={RouterLink} to="/about" p={2} color="white">
            About
          </Link>
        </Box>
      </Flex>
      <Box mt={8}>
        <VStack spacing={4}>
          <Text fontSize="2xl">Welcome to MyApp</Text>
          <Text>This is your starting point. Use the navigation bar to explore.</Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;