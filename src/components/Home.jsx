import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import homeImage from "../assets/btc.png";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <Box bgColor={"blackAlpha.900"} w="full" h="85vh">
      <motion.div
        style={{
          height: "80vh",
        }}
        animate={{
          translateY: "20px",
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Image
          src={homeImage}
          w={"full"}
          objectFit={"contain"}
          h="full"
          filter={"grayscale(1)"}
        />
      </motion.div>

      <Text
        textAlign={"center"}
        color={"whiteAlpha.700"}
        mt="-20"
        fontSize={"6xl"}
        fontWeight={"thin"}
      >
        Samaritan CryptoHub
      </Text>
    </Box>
  );
};

export default Home;
