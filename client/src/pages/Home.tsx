import { Box, Text } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Text fontSize={"x-large"}>Kubs 🍑</Text>
    </Box>
  );
}

export default Home;