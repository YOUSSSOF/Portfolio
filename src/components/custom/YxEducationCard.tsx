import {
  Box,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import calendar from "../../assets/icons/calendar.svg";
import { useState } from "react";
import { useYxStore } from "../../store";
interface Props {
  image: string;
  startYear: string;
  endYear: string;
  faTitle: string;
  enTitle: string;
  faDesc: string;
  enDesc: string;
}
const YxEducationCard = ({
  faTitle,
  enTitle,
  faDesc,
  enDesc,
  startYear,
  endYear,
  image,
}: Props) => {
  const [opacity, setOpacity] = useState("0.05");
  const [radius, setRadius] = useState(0);
  const [scale, setScale] = useState(1);
  const { textDirection } = useYxStore();
  const bgColor = useColorModeValue(
    `rgba(0, 30, 106, ${opacity});`,
    `rgba(255, 255, 255, ${opacity});`
  );
  const borderColor = useColorModeValue(
    `rgba(0, 30, 106, ${opacity});`,
    `rgba(255, 255, 255, ${opacity});`
  );
  const titleColor = useColorModeValue("rgba(0, 30, 106, 0.80);", "#FAFAFA");
  const descColor = useColorModeValue(
    "rgba(0, 30, 106, 0.40);",
    "rgba(250, 250, 250, 0.70);"
  );
  const yearColor = useColorModeValue(
    "rgba(0, 30, 106, 0.10);",
    "rgba(255, 255, 255, 0.10);"
  );
  const title = useLanguageValue(faTitle, enTitle);
  const desc = useLanguageValue(faDesc, enDesc);
  const till = useLanguageValue("تا", "to");
  return (
    <Box
      height={"15em"}
      width={{ base: "90%", lg: "22em" }}
      border={`1px solid ${borderColor}`}
      bg={bgColor}
      padding="1em"
      overflow="clip"
      cursor="pointer"
      transform={`scale(${scale})`}
      transition="all .18s linear"
      onMouseEnter={() => {
        setOpacity("0.1");
        setRadius(5);
        setScale(1.05);
      }}
      onMouseLeave={() => {
        setOpacity("0.05");
        setRadius(1);
        setScale(1);
      }}
      borderRadius={radius}
    >
      <VStack alignItems="start">
        <HStack justifyContent="space-between" width="100%">
          <Box>
            <Image
              src={image}
              width="50px"
              height="50px"
              fit="cover"
              borderRadius={9}
            />
          </Box>
          <Box>
            <HStack gap={0} position="relative">
              <Box
                bg={yearColor}
                height="3em"
                width="3em"
                borderRadius={50}
                position="absolute"
                right={textDirection == "rtl" ? "-22px" : ""}
                left={textDirection == "ltr" ? "-22px" : ""}
              >
                <Image
                  src={calendar}
                  position="absolute"
                  top={4}
                  right={textDirection == "rtl" ? 4 : ""}
                  left={textDirection == "ltr" ? 4 : ""}
                />
              </Box>
              <Box
                bg={yearColor}
                height="1.5em"
                width="4.5em"
                borderRadius={30}
              >
                <Text
                  fontSize="9px"
                  position="absolute"
                  top="5px"
                  right={textDirection == "rtl" ? "13px" : ""}
                  left={textDirection == "ltr" ? "13px" : ""}
                >
                  {startYear} {till} {endYear}
                </Text>
              </Box>
            </HStack>
          </Box>
        </HStack>
        <Text color={titleColor} fontSize="18px">
          {title}
        </Text>
        <Text color={descColor} fontSize="12px">
          {desc}
        </Text>
      </VStack>
    </Box>
  );
};

export default YxEducationCard;
