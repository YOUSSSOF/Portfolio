import {
  Box,
  HStack,
  Image,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import moon from "../../assets/icons/moon.svg";
import sun from "../../assets/icons/sun.svg";


const YxThemeModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const primary = useColorModeValue("#6049FF", "rgb(96, 73, 255)");
  const bg = useColorModeValue("white", "#171717");
    const iconBgColor = useColorModeValue(
      "rgba(0, 30, 106, 0.05);",
      "rgba(255,255,255,0.05)"
    );
  return (
    <HStack alignSelf="end" justifyContent="start" width="80%">
      <Box
        bg={iconBgColor}
        transition="padding 200ms linear"
        transitionDuration="200ms"
        borderRadius="9px"
        padding="10px"
        marginLeft="20px"
        marginTop="1em"
        marginBottom="1em"
      >
        <Image
          src={colorMode == "dark" ? moon : sun}
          height="20px"
          width="20px"
          borderRadius="9px"
        />
      </Box>
      <label
        className="switch"
        style={{
          "--primary": primary,
        }}
      >
        <input
          type="checkbox"
          checked={colorMode == "dark"}
          onChange={toggleColorMode}
        />
        <span
          className="slider"
          style={{
            backgroundColor: bg,
          }}
        ></span>
      </label>
    </HStack>
  );
};

export default YxThemeModeSwitch;
