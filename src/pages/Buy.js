import { Box, Button, Center, Heading, Icon, Image } from "@chakra-ui/react";
import { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useLocation, useNavigate } from "react-router-dom";

const Buy = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const purchaseComplete = location?.state?.purchaseComplete || false;

  const handleCompra = () => {
    navigate('/products', { state: { purchaseComplete: true } });
  };

  useEffect(() => {
    if (!purchaseComplete) {
      navigate("/products");
    }
  }, [navigate, purchaseComplete]);

  return (
    <Center h="100vh">
      <Box textAlign="center">
        <Heading as="h2" mb={4}>
          Pagamento via PIX
        </Heading>
        <Image src={require("../images/qrcode-pix.png")} mb={5} />
        <Button
          variant="solid"
          colorScheme="teal"
          leftIcon={<Icon as={FiShoppingCart} h={5} w={5} />}
          onClick={handleCompra}
          size={"lg"}
        >
          Retornar aos produtos
        </Button>
      </Box>
    </Center>
  );
};

export default Buy;
