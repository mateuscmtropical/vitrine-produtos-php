import { Box, Container, Heading, Text } from '@chakra-ui/react';

function NotFound() {
  return (
    <Container maxW="container.lg" py={10}>
      <Box textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>
          404 - Página não encontrada
        </Heading>
        <Text fontSize="xl">
          Desculpe, a página que você está procurando não foi encontrada.
        </Text>
      </Box>
    </Container>
  );
}

export default NotFound;
