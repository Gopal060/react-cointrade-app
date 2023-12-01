import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import img from "../assets/img.png";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <Box w={"full"} bgColor={"blackAlpha.900"} h={"85vh"}>
      <motion.div
        style={{
          height: "70vh",
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
        <Image w={"full"} h={"full"} objectFit={"contain"} src={img} />
      </motion.div>
      <Text
        fontSize={"6xl"}
        textAlign={"center"}
        fontWeight={"thin"}
        color={"whiteAlpha.700"}
      >
        CoinTrade
      </Text>
    </Box>
  );
};

export default Home;
