import { Box, Spinner } from "@chakra-ui/react";
import { pallet } from "../../theme";

const YxLoader = () => {
  return (
    <Box
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      background="rgba(0, 0, 0, 0.5)"
      display="flex"
      justifyContent="center"
      alignItems="center"
      zIndex="999"
    >
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor={pallet.purple600}
        color={pallet.blue600}
        size="xl"
      />
    </Box>
  );
};

export default YxLoader;
