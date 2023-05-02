import { Avatar, Stack, Text, VStack, Box } from "@chakra-ui/react";
import React from "react";

const avatarSrc = "https://avatars.githubusercontent.com/u/8830183";

const Footer = () => {
  return (
    <Box
      bgColor={"blackAlpha.900"}
      minH={"48"}
      p="16"
      color={"whiteAlpha.700"}
      py={["16", "8"]}
    >
      <Stack direction={["column", "row"]} h="full" alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "flex-start"]}>
          <Text fontWeight={"bold"}>About Us</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            Join the digital currency revolution and trade with confidence on
            our secure and user-friendly crypto exchange platform - designed for
            both novice and experienced traders alike.
          </Text>
        </VStack>
        <VStack>
          <Avatar boxSize="28" mt={["4", "0"]} src={avatarSrc} />
          <Text>Our Founder</Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
