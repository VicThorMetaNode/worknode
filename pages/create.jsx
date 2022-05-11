//------------ IMPORT ----------------------

// Import REACT & NEXT tools

import Highlighter from "react-highlight-words";
import NextLink from "next/link";
import Image from "next/image";

//import Framer Motion
import { motion } from "framer-motion";

import FormSizeDemo from "../components/form";

// Import CHAKRA tools
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Center,
  Box,
  Container,
  Text,
  Link,
  Flex,
  Spacer,
  List,
  ListItem,
  ListIcon,
  Divider,
  Button,
  HStack,
  ButtonGroup,
} from "@chakra-ui/react";

// Import CHAKRA icons
import { ArrowRightIcon } from "@chakra-ui/icons";
// Import CHAKRA Third Party icons
import { MdCheckCircle } from "react-icons/md";

//------------- INTERNAL COMPONENTS ---------------------

const BannerTitle = ({ title }) => (
  <Flex w="full" flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={6} p={2} mt={6}>
      <Text
        className="banner-title"
        fontSize="8rem"
        wordSpacing="2px"
        fontWeight="600"
        lineHeight={0.75}
        backgroundColor="#FFFF31"
        boxShadow="5px 10px #FFD0B9"
        pb={4}
        mt={10}
        mb={10}
      >
        {title}
      </Text>
    </Box>
  </Flex>
);

const BannerCompo = ({ title, desc1, btn1, btn2 }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={40} p={8}>
      <Text
        className="sub-title"
        fontSize="3.5rem"
        fontWeight="100"
        lineHeight={0.6}
        pb={4}
        mb={3}
      >
        {title}
      </Text>
      <Container
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        p={6}
        mt={6}
      >
        {desc1}
      </Container>
      <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
        <Box mt={10} pt={6}>
          <HStack spacing="6rem">
            <Menu>
              <MenuButton
                bg="#FFFF38"
                color="#01051e"
                as={Button}
                px={4}
                py={4}
                transition="all 0.2s"
                _hover={{ color: "#FEFEFE", bg: "#FFD0B9" }}
                _expanded={{ bg: "#FFD0B9", color: "#01051e" }}
                _focus={{ boxShadow: "none" }}
              >
                {btn1}
              </MenuButton>
              <MenuList bg="#01051e">
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
            <Menu>
              <MenuButton
                as={Button}
                bg="#FFFF38"
                color="#01051e"
                as={Button}
                px={4}
                py={4}
                transition="all 0.2s"
                _hover={{ color: "#FEFEFE", bg: "#FFD0B9" }}
                _expanded={{ bg: "#FFD0B9", color: "#01051e" }}
                _focus={{ boxShadow: "none" }}
              >
                {btn2}
              </MenuButton>
              <MenuList bg="#01051e">
                <MenuItem>Download</MenuItem>
                <MenuItem>Create a Copy</MenuItem>
                <MenuItem>Mark as Draft</MenuItem>
                <MenuItem>Delete</MenuItem>
                <MenuItem>Attend a Workshop</MenuItem>
              </MenuList>
            </Menu>
          </HStack>
        </Box>
      </Flex>
    </Box>
  </Flex>
);

//---------------- BROWSER ------------------

const create = () => {
  return (
    <>
      <Box>
        <BannerTitle title="Create." />
      </Box>

      <Box>
        <BannerCompo
          title="Become a host"
          desc1="It is time for you to organize the next legendary working session ! "
          btn1="Tips"
          btn2="Rules"
        />
      </Box>

      <FormSizeDemo />
    </>
  );
};

export default create;
