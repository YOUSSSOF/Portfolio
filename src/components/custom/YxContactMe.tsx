import { Button, Center, Stack, Text } from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import { useYxStore } from "../../store";
import { useState } from "react";

const YxContactMe = () => {
  const text = useLanguageValue(
    "دنبال برنامه نویس میگردی؟",
    "Looking For A Developer?"
  );
  const buttonText = useLanguageValue("باهام تماس بگیر", "Contact me");
  const { textDirection, setSelectedIndex } = useYxStore();
  const [width, setWidth] = useState("10em");
  return (
    <Stack
      height={"20vh"}
      bg="#3A71FF"
      paddingRight={
        textDirection == "rtl"
          ? { base: "0", lg: "22%", xl: "22%", "2xl": "22%" }
          : { base: "0", lg: "11%", xl: "11%", "2xl": "11%" }
      }
      paddingLeft={
        textDirection == "ltr"
          ? { base: "0", lg: "22%", xl: "22%", "2xl": "22%" }
          : { base: "0", lg: "11%", xl: "11%", "2xl": "11%" }
      }
      direction={["column", "row"]}
      alignItems="center"
      justifyContent={{ base: "center", lg: "space-between" }}
      gap={6}
    >
      <Center>
        <Text fontSize={{ base: "1.2em", lg: "1.6em" }} color="#FFF">
          {text}
        </Text>
      </Center>
      <Center>
        <Button
          boxShadow="0px 20px 30px 0px rgba(0, 0, 0, 0.15)"
          border="1px solid #FFF"
          borderRadius={0}
          width={width}
          height="3.2em"
          bg="#3A71FF"
          fontSize={{ base: "12px", lg: "16px" }}
          color="#FFF"
          onClick={() => {
            setSelectedIndex(6);
            document
              .getElementById("sec-6")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          transition="all .2s linear"
          onMouseEnter={() => {
            setWidth("15em");
          }}
          onMouseLeave={() => {
            setWidth("10em");
          }}
        >
          {buttonText}
        </Button>
      </Center>
    </Stack>
  );
};

export default YxContactMe;
