import React from "react";
import NextLink from "next/link";
import {
  Center,
  Box,
  Container,
  Text,
  Link,
  Divider,
  Button,
} from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

export default function Home() {
  return (
    <>
      <Box className="header-container" w="full">
        <Center>
          <Text className="main-title">Join What's Next.</Text>
        </Center>
      </Box>

      <Center>
        <Box className="transform-container">
          <Text className="sub-title">Transform the way you work</Text>
          <Container className="text-container">
            A hands-on network approach that focuses on{" "}
            <mark>unlocking the potential</mark> of your surrounding.
          </Container>
          <br />
          <Text className="text-tips">
            {" "}
            <Link> Create a space.</Link> <ArrowRightIcon w={2} h={2} />{" "}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box className="transform-container">
          <Text className="sub-title">Unleash your productivity</Text>
          <Container className="text-container">
            Enables people working from home to create safe work spaces, become
            hosts, and drive networks to help reach professional development
            goals.
          </Container>
          <br />
          <Container className="text-container">
            <mark>Flexible spaces</mark> that meet your needs. Whether you need
            a desk for hybrid or remote work, for teams of any size, or a new
            headquarters to develop your network.
          </Container>
          <br />
          <Text className="text-tips">
            {" "}
            <Link> Join a space.</Link>
            <ArrowRightIcon w={2} h={2} />{" "}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box className="transform-container">
          <Text className="sub-title">Prepare to become host</Text>
          <Container className="text-container">
            Find tips to facilitate a working group meeting or find people to
            holds these positions.
          </Container>
          <br />
          <Container className="text-container">
            <ul>
              <li>Leader.</li>
              <li>
                {" "}
                <mark> Facilitator. </mark>
              </li>
              <li>Ground Rules.</li>
            </ul>
          </Container>
          <br />
          <Text className="text-tips">
            <Link> Tips for hosting effective working sessions.</Link>{" "}
            <ArrowRightIcon w={2} h={2} />{" "}
          </Text>
        </Box>
      </Center>

      <Center>
        <Box className="transform-container">
          <Text className="sub-title">
            Sharpen your Hosting and Networking Skills
          </Text>
          <Text className="text-tips">
            {" "}
            <Link className="linkin"> Choose your path.</Link>{" "}
            <ArrowRightIcon w={2} h={2} />{" "}
          </Text>
        </Box>
      </Center>
    </>
  );
}
