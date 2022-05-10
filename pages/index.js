// ------------------ HOME PAGE -------------------

// Import REACT & NEXT tools
import React from "react";
import Highlighter from "react-highlight-words";
import NextLink from "next/link";
import Image from "next/image";

// Import CHAKRA tools
import {
  Center,
  Box,
  Container,
  Text,
  Link,
  Flex,
  List,
  ListItem,
  ListIcon,
  Divider,
  Button,
} from "@chakra-ui/react";

// Import CHAKRA icons
import { ArrowRightIcon } from "@chakra-ui/icons";
// Import CHAKRA Third Party icons
import { MdCheckCircle } from "react-icons/md";

//------------- INTERNAL COMPONENTS ---------------------

const BannerSM = ({ title, desc1, descLink, linkName }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={40} p={8}>
      <Text
        className="sub-title"
        fontSize="3.5rem"
        fontWeight="100"
        lineHeight={0.55}
        pb={4}
        mb={4}
      >
        {title}
      </Text>
      <Container
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
      <br />
      <Text
        className="text-tips"
        fontSize="1rem"
        fontWeight="100"
        mr={1}
        mt={3}
        boxShadow="3px 1px #FFD0B9"
      >
        <Link href={linkName} textDecoration="none">
          {descLink}
        </Link>{" "}
        <ArrowRightIcon w={2} h={2} />{" "}
      </Text>
    </Box>
  </Flex>
);

const BannerML = ({ title, desc1, desc2, descLink, linkName }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={40} p={8}>
      <Text
        className="sub-title"
        fontSize="3.5rem"
        fontWeight="100"
        lineHeight={0.55}
        pb={4}
        mb={4}
      >
        {title}
      </Text>
      <Container
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
      <br />
      <Container
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        pb={4}
        mt={2}
      >
        {desc2}
      </Container>
      <br />
      <Text
        className="text-tips"
        fontSize="1rem"
        fontWeight="100"
        mr={1}
        mt={3}
        boxShadow="3px 1px #FFD0B9"
      >
        {" "}
        <Link href={linkName}>{descLink}</Link> <ArrowRightIcon w={2} h={2} />{" "}
      </Text>
    </Box>
  </Flex>
);

const BannerList = ({
  title,
  desc1,
  desc2,
  descLink,
  linkName,
  listBullet1,
  listBullet2,
  listBullet3,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center">
    <Box mb={40} p={8}>
      <Text
        className="sub-title"
        fontSize="3.5rem"
        fontWeight="100"
        lineHeight={0.55}
        pb={4}
        mb={4}
      >
        {title}
      </Text>
      <Container
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        pb={4}
        mt={2}
      >
        {desc1}
      </Container>
      <br />

      <List
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        pl={4}
      >
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#FFFF38" w={6} h={6} />
          {listBullet1}
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#FFFF38" w={6} h={6} />
          {listBullet2}
        </ListItem>
        <ListItem>
          <ListIcon as={MdCheckCircle} color="#FFFF38" w={6} h={6} />
          {listBullet3}
        </ListItem>
      </List>
      <br />
      <Container
        className="text-container"
        fontSize="1.25rem"
        fontWeight="100"
        color="#FEFEFE"
        pb={4}
        mt={2}
      >
        {desc2}
      </Container>
      <br />
      <Text
        className="text-tips"
        fontSize="1rem"
        fontWeight="100"
        mr={1}
        mt={3}
        boxShadow="3px 1px #FFD0B9"
      >
        <Link href={linkName}>{descLink}</Link> <ArrowRightIcon w={2} h={2} />{" "}
      </Text>
    </Box>
  </Flex>
);

export default function Home() {
  return (
    <>
      {/* <Highlighter
        highlightClassName="highlightText"
        searchWords={["The", "potential", "Flexible"]}
        autoEscape={true}
        textToHighlight="The dog is chasing the cat. Or perhaps they're just playing?"
      /> */}

      <Box className="header-container" w="full">
        <Center>
          <Text className="main-title">Join What's Next.</Text>
        </Center>
      </Box>

      <Box>
        <BannerSM
          title="Transform the way you work"
          desc1="A hands-on network approach that focuses on
          unlocking the potential of your surrounding."
          descLink=" Create a space"
          linkName="/"
        />
      </Box>

      <Box>
        <BannerML
          title="Unleash your productivity"
          desc1="Enables people working from home to create safe work spaces, become
          hosts, and drive networks to help reach professional development
          goals."
          desc2="Flexible spaces that meet your needs. Whether you need
          a desk for hybrid or remote work, for teams of any size, or a new
          headquarters to develop your network."
          descLink=" Join a space"
          linkName="/"
        />
      </Box>

      <Box>
        <BannerList
          title="Prepare to become a host"
          desc1="Find tips to facilitate a working group session or find people to
          hold these positions:"
          listBullet1="Leader."
          listBullet2="Facilitator"
          listBullet3="Ground Rules"
          desc2=" ADJUST /Flexible spaces that meet your needs. Whether you need
          a desk for hybrid or remote work, for teams of any size, or a new
          headquarter to develop your network."
          descLink="Tips for hosting effective working sessions"
          linkName="/"
        />
      </Box>

      <Box>
        <BannerSM
          title=" Sharpen your hosting and networking skills"
          desc1=" ADJUST /A hands-on network approach that focuses on
          unlocking the potential of your surrounding."
          descLink=" Choose your path"
          linkName="/"
        />
      </Box>
    </>
  );
}
