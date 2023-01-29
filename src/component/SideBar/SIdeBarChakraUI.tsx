import React from "react";
import {
  Button,
  IconButton,
  Box,
  useColorModeValue,
  CloseButton,
  Flex,
  Drawer,
  useDisclosure,
  DrawerContent,
  DrawerBody,
  Text,
} from "@chakra-ui/react";
import {
  FiHome,
  FiTrendingUp,
  FiCompass,
  FiStar,
  FiSettings,
  FiMenu,
} from "react-icons/fi";
import { IconType } from "react-icons";

interface LinkItemProps {
  name: string;
  icon: IconType;
}

const LinkItems: Array<LinkItemProps> = [
  { name: "Home", icon: FiHome },
  { name: "Trending", icon: FiTrendingUp },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

const SideBarChakraUI = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      minH="100vh"
      bg={useColorModeValue("blue.100", "red.100")}
      borderRight="10px"
    >
      <Button onClick={onOpen}>Open</Button>
      <p>{isOpen}</p>
      <Box
        w={{ base: "full", md: 60 }}
        h="full"
        bg="red"
        pos="fixed"
        display={{ base: "none", md: "block" }}
      >
        aaaaaaaaaa
      </Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        autoFocus={false}
        size="full"
      >
        <DrawerContent>
          <Box
            bg="orange"
            w={{ base: "full", md: 60 }}
            borderRight="2px"
            borderRightColor={useColorModeValue("black.200", "black.700")}
            pos="fixed"
            h="full"
          >
            <CloseButton display={{ base: "flex" }} onClick={onClose} />
            <p>some contents...</p>
          </Box>
        </DrawerContent>
      </Drawer>
      <MobileNav />
      <Box ml={{ base: 0, md: 60 }} p="4">
        aaaaaa
      </Box>
    </Box>
  );
};

const MobileNav = () => {
  return (
    <>
      <Flex
        ml={{ base: 0, md: 60 }}
        px={{ base: 4, md: 24 }}
        height="20"
        alignItems="center"
        bg={useColorModeValue("green", "gray.900")}
      >
        <Text fontSize="2xl" ml="8" fontFamily="monospace" fontWeight="bold">
          Logo
        </Text>
      </Flex>
    </>
  );
};

export default SideBarChakraUI;
