import {
  Box,
  HStack,
  Image,
  useColorModeValue,
} from "@chakra-ui/react";
import iran from "../../assets/images/iran.png";
import usa from "../../assets/images/usa.png";
import { useYxStore } from "../../store";

const YxLanguageSwitch = () => {
  const { textDirection, setTextDirection } = useYxStore();
  const primary = useColorModeValue("#6049FF", "rgb(96, 73, 255)");
  const bg = useColorModeValue("white", "#171717");
    const iconBgColor = useColorModeValue(
      "rgba(0, 30, 106, 0.05);",
      "rgba(255,255,255,0.05)"
    );
  return (
    <HStack alignSelf="end" justifyContent="start" width="80%" marginTop="1em">
      <Box
        bg={iconBgColor}
        transition="padding 200ms linear"
        transitionDuration="200ms"
        borderRadius="9px"
        padding="10px"
        marginLeft="20px"
      >
        <Image
          src={textDirection == "rtl" ? iran : usa}
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
          checked={textDirection == "rtl"}
          onChange={
            textDirection == "rtl"
              ? () => setTextDirection("ltr")
              : () => setTextDirection("rtl")
          }
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

export default YxLanguageSwitch;
