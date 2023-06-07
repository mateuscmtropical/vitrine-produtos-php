import { Box, Flex, IconButton, Link, Spacer, Menu, MenuButton, MenuList, MenuItem, Image } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { HamburgerIcon } from '@chakra-ui/icons';

function Navbar() {
  return (
    <Box bg="gray.700" py={4} px={8} color="white">
      <Flex alignItems="center">
        <Link href="/products" fontSize="xl" fontWeight="bold">
          <Image src={require('../images/bacon-inside.png')} w={'50px'}/>
        </Link>

        <Spacer />

        <Flex display={{ base: 'none', md: 'flex' }} alignItems="center">
          <Link as={RouterLink} to="/products" mr={4}>Produtos</Link>
          <Link as={RouterLink} to="/contact" mr={4}>Contato</Link>
        </Flex>

        <Box display={{ base: 'block', md: 'none' }}>
          <Menu>
            <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" />
            <MenuList color="gray">
              <MenuItem>
                <Link as={RouterLink} to="/products">Produtos</Link>
              </MenuItem>
              <MenuItem>
                <Link as={RouterLink} to="/contact">Contato</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;
