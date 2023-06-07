import { 
  Box, Container, Flex, Heading, Image, Text, Card, 
  Tooltip, useBreakpointValue, Popover, PopoverTrigger, 
  PopoverContent, PopoverArrow, PopoverCloseButton, PopoverBody 
} from '@chakra-ui/react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { FaInfoCircle } from 'react-icons/fa';
import BuyButtom from './BuyButtom';
import ShippingInfo from './ShippingInformations';

function ProductDetails() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const isMobile = useBreakpointValue({ base: true, md: false });

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`http://localhost/admin/api/produto/${id}`);

      if (data.hasOwnProperty("Erro")) {
        setProduct("Produto não encontrado");
      } else {
        setProduct(data);
      }
    } catch (error) {
      console.log(error);
      setProduct("Produto não encontrado");
    }
  };

  useEffect(() => {
    getProduct();
  }, []);

  if (!product || product === "Produto não encontrado") {
    return (
      <Container maxW="container.lg" py={10}>
        <Box textAlign="center">
          <Text>Tente novamente</Text>
        </Box>
      </Container>
    );
  }

  const removeHTMLTags = (html) => {
    const regex = /(<([^>]+)>)/gi; // Função para remover as tags HTML da descrição
    return html.replace(regex, "");
  };
  
  const renderInstallments = () => {
    const installments = [1, 2, 3, 4, 5, 6, 12];
  
    return installments.map((installment) => {
      const parcelValue = product.valor / installment;
  
      return (
        <Text key={installment}>
          {installment}x de R${parcelValue.toFixed(2)}
        </Text>
      );
    });
  };

  return (
    <Container maxW="container.lg" py={10}>
      <Card borderWidth="1px" borderRadius="lg" p={6}>
        <Flex direction={{ base: 'column', md: 'row' }}>
          <Box flex="1" mr={{ base: 0, md: 8 }} mb={{ base: 8, md: 0 }}>
            <Image src={require(`../../../admin/fotos/${product.imagem}m.jpg`)} alt={product.produto} maxH={600} objectFit="contain" />
          </Box>

          <Box flex="1" textAlign={{ base: 'center', md: 'left' }}>
            <Heading size="xl">{product.produto}</Heading>
            <br />

            <Text fontSize="lg">
              <strong>Descrição: </strong>
              {removeHTMLTags(product.descricao)}
            </Text>

            <br />

            <Flex justifyContent={isMobile ? 'center' : 'flex-start'} alignItems="center">
              <Text fontSize="2xl">
              R${product.valor.toFixed(2)}{' '}
                <Popover>
                  <PopoverTrigger>
                    <Box as="span" cursor="pointer" display="inline-block" ml={2}>
                      <FaInfoCircle />
                    </Box>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverBody>
                      {renderInstallments()}
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
              </Text>
            </Flex>

            <br />

            <BuyButtom />

            <ShippingInfo />
          </Box>
        </Flex>
      </Card>
    </Container>
  );
}

export default ProductDetails;
