import React from "react";
import Link from "next/link";

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
          <Link href="/" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              icon={<BsBox />}
              _hover={{ color: "#01051e" }}
            >
              Home
            </MenuItem>
          </Link>
          <Link href="/create" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              icon={<BsBoxArrowInDownRight />}
              _hover={{ color: "#01051e" }}
            >
              Create
            </MenuItem>
          </Link>
          <Link href="/join" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              icon={<BsBoxArrowInUpLeft />}
              _hover={{ color: "#01051e" }}
            >
              Join
            </MenuItem>
          </Link>
          <Link href="/blog" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              icon={<BsReverseLayoutTextSidebarReverse />}
              _hover={{ color: "#01051e" }}
            >
              Blog
            </MenuItem>
          </Link>
          <Link href="/chat" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              icon={<BsChatDots />}
              _hover={{ color: "#01051e" }}
            >
              Chat
            </MenuItem>
          </Link>
          <MenuDivider />
          <Link href="/signin" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              _hover={{ color: "#01051e" }}
            >
              Sign In
            </MenuItem>
          </Link>
          <Link href="/signup" passHref>
            <MenuItem
              fontFamily="'Jost', sans-serif"
              color="#FEFEFE"
              _hover={{ color: "#01051e" }}
            >
              Sign Up
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default Navbar;
