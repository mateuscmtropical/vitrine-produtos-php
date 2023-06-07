import { Box, chakra, Flex, Tooltip, Icon, Image, useBreakpointValue } from '@chakra-ui/react';
import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';

function ProductCard({ id, produto, preco, imagem }) {
  const formattedPrice = preco.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  const isMobile = useBreakpointValue({ base: true, lg: false });

  return (
    <Flex p={isMobile ? 2 : 30} w="full" alignItems="center" justifyContent="center">
      <Box
        key={`item-${id}`}
        bg={'white'}
        minW="280px"
        borderWidth="1px"
        rounded="lg"
        shadow="lg"
        position="relative"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
        height="100%"
      >
        <Link to={`/products/${id}`}>
          <Box position="relative" flexGrow="1">
            <Image src={require(`../../../admin/fotos/${imagem}m.jpg`)} objectFit="cover" w="100%" h="100%" />
          </Box>

          <Box p={isMobile ? 3 : 6} textAlign="center">
            <Box
              fontSize="2xl"
              fontWeight="semibold"
              as="h4"
              lineHeight="tight"
              isTruncated
              mb={2}
            >
              {produto}
            </Box>
            <Box fontSize="2xl" color={'gray.800'}>
              <Box as="span" color={'gray.600'} fontSize="lg">
                R$
              </Box>
              {formattedPrice}
            </Box>
            <Tooltip
              label="Add to cart"
              bg="white"
              placement={isMobile ? 'bottom' : 'top'}
              color={'gray.800'}
              fontSize={'1.2em'}
            >
              <chakra.a href={'#'} display={'flex'} justifyContent="center">
                <Icon as={FiShoppingCart} h={7} w={7} alignSelf={'center'} />
              </chakra.a>
            </Tooltip>
          </Box>
        </Link>
      </Box>
    </Flex>
  );
}

export default ProductCard;
