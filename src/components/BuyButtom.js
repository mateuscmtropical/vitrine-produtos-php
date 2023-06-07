import { Button, Tooltip, Icon } from "@chakra-ui/react";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const BotaoCompra = () => {
  const navigate = useNavigate();

  const handleCompra = () => {
    navigate('/buy', { state: { purchaseComplete: true } });
  };

  return (
    <Tooltip label="Adicionar ao carrinho" bg="white" placement="top" color="gray.800" fontSize="1.2em">
      <Button
        variant="solid"
        colorScheme="teal"
        leftIcon={<Icon as={FiShoppingCart} h={5} w={5} />}
        onClick={handleCompra}
        size={"lg"}
        w={{ base: "100%", md: "50%" }}
      >
        Comprar
      </Button>
    </Tooltip>
  );
};

export default BotaoCompra;
