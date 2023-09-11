import { Box, useColorModeValue } from "@chakra-ui/react";

const YxSeprator = ({ marginY: marginY }: { marginY?: string }) => {
  const bg = useColorModeValue("rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)");
  return <Box height="1px" width="100%" bg={bg} marginY={marginY} />;
};

export default YxSeprator;
