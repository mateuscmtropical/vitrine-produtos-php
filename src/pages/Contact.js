import { Box, Image, Stack, Heading, Text, Button, Card, Link } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
      marginTop={"-20vh"}
    >
      <Card
        overflow="hidden"
        variant="outline"
        maxW={{ base: "90%", md: "70%" }}
      >
        <Stack
          p={4}
          direction={{ base: "column", md: "row" }}
          alignItems={{ base: "center", md: "flex-start" }}
          spacing={4}
        >
          <Image
            objectFit="cover"
            maxW={{ base: "100%", md: "40%" }}
            src={require('../images/burnes-barbudo.jpg')}
            alt="Burnes Barbudo"
          />

          <Box flex="1">
            <Stack spacing={2}>
              <Heading size="lg">Contato Burnes Barbudo</Heading>

              <Text>
                Entre em contato com o Burnes Sem Barba ao clicar no botão.
              </Text>
            </Stack>

            <br />

            <Box mt="auto">
              <Link href="https://www.instagram.com/profburnes" isExternal>
                <Button
                  variant="solid"
                  colorScheme="teal"
                  w="full"
                >
                  Visite o Instagram
                </Button>
              </Link>
            </Box>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
};

export default Contact;
