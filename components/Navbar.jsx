import React from "react";

import {
  Menu,
  Button,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
} from "@chakra-ui/icons";

import {
  BsBox,
  BsBoxArrowInDownRight,
  BsBoxArrowInUpLeft,
  BsChatDots,
  BsReverseLayoutTextSidebarReverse,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          bg="transparent"
          mt="1rem"
          ml="1rem"
          px={4}
          py={2}
          transition="all 0.2s"
          _hover={{ color: "#FFFF38" }}
          _expanded={{ bg: "#FFFF38", color: "#01051e" }}
          _focus={{ boxShadow: "none" }}
        >
          <HamburgerIcon />
        </MenuButton>
        <MenuList ml="0.25rem" bg="#01051e">
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            icon={<BsBox />}
            _hover={{ color: "#01051e" }}
          >
            Home
          </MenuItem>
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            icon={<BsBoxArrowInDownRight />}
            _hover={{ color: "#01051e" }}
          >
            Create
          </MenuItem>
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            icon={<BsBoxArrowInUpLeft />}
            _hover={{ color: "#01051e" }}
          >
            Join
          </MenuItem>
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            icon={<BsReverseLayoutTextSidebarReverse />}
            _hover={{ color: "#01051e" }}
          >
            Blog
          </MenuItem>
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            icon={<BsChatDots />}
            _hover={{ color: "#01051e" }}
          >
            Chat
          </MenuItem>
          <MenuDivider />
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            _hover={{ color: "#01051e" }}
          >
            Sign In
          </MenuItem>
          <MenuItem
            fontFamily="'Jost', sans-serif"
            color="#FEFEFE"
            onClick={() => alert("Kagebunshin")}
            _hover={{ color: "#01051e" }}
          >
            Sign Up
          </MenuItem>
        </MenuList>
      </Menu>
    </>
  );
};

export default Navbar;
