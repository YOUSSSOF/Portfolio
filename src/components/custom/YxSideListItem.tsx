import { Box, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import { useYxStore } from "../../store";

interface Props {
  id: number;
  faTitle: string;
  enTitle: string;
  icon: string;
  isSelected: boolean;
  onClick: () => void;
}

const YxSideListItem = ({
  faTitle,
  enTitle,
  isSelected,
  icon,
  onClick,
}: Props) => {
  const text = useLanguageValue(faTitle, enTitle);
  const textColor = useColorModeValue(
    "rgba(0, 30, 106, 0.40);",
    "rgba(255, 255, 255, 0.40);"
  );
  const selectedTextColor = useColorModeValue("black", "white");
  const iconBgColor = useColorModeValue(
    "rgba(0, 30, 106, 0.05);",
    "rgba(255,255,255,0.05)"
  );
  const selectedBg = useColorModeValue(
    "rgba(0, 30, 106, 0.05);",
    "rgba(255, 255, 255, 0.05);"
  );
  const borderColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(255,255,255,0.1)"
  );
  const { textDirection } = useYxStore();

  return (
    <HStack
      width="80%"
      bg={isSelected ? selectedBg : ""}
      transition="background-color 200ms linear"
      transitionDuration="200ms"
      onClick={onClick}
      cursor="pointer"
      padding=".6em"
      border={isSelected ? `1px solid ${borderColor}` : ""}
      borderLeft={textDirection == "rtl" ? "0" : ""}
      borderRight={textDirection == "ltr" ? "0" : ""}
    >
      <Box
        bg={
          isSelected
            ? "linear-gradient(180deg, #7098FF 0%, #0047FF 100%);"
            : iconBgColor
        }
        transition="padding 200ms linear"
        transitionDuration="200ms"
        boxShadow={
          isSelected ? "1px 9px 13px -2px rgba(12, 12, 12, 0.20);" : ""
        }
        borderRadius="9px"
        padding={isSelected ? "12px" : "10px"}
        marginLeft="5px"
      >
        <Image src={icon} loading="lazy" />
      </Box>
      <Text color={isSelected ? selectedTextColor : textColor}>{text}</Text>
    </HStack>
  );
};

export default YxSideListItem;
