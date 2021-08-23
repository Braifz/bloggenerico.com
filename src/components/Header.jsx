import React from 'react';
import {
  Flex,
  Spacer,
  Text,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

import { ColorModeSwitcher } from '../ColorModeSwitcher';

function Header() {
  return (
    <Flex
      p="10px"
      borderBottom="1px solid gray"
      w="100%"
      top="0"
      alignItems="center"
    >
      <Text fontSize={{ base: '24px', md: '40px' }} pl="10px">
        BlogGenerico.com
      </Text>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            <MenuItem>About me</MenuItem>
            <MenuItem>Proyect</MenuItem>
            <MenuItem>Contact</MenuItem>
          </MenuList>
        </Menu>
        <ColorModeSwitcher />
      </Box>
    </Flex>
  );
}

export default Header;
