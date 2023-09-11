import { HStack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import { useYxStore } from "../../store";
import YxSeprator from "./YxSeprator";

const YxFooter = () => {
  const { textDirection } = useYxStore();
  const bg = useColorModeValue("#FFF", "#151515");
  const currentYear = useLanguageValue(
    new Date().toLocaleDateString("fa-IR").split('/')[0],
    new Date().getFullYear().toString()
  );
  const text = useLanguageValue(
    `© ${currentYear} تمامی حقوق مادی و معنوی این سایت متعلق به یوسف هاشم زاده می‌باشد.`,
    `© ${currentYear} All rights reserved for Yousof Hashemzadeh.`
  );
  return (
    <VStack gap={0}>
      <YxSeprator />
      <HStack
        width="100%"
        height="100%"
        bg={bg}
        paddingRight={
          textDirection == "rtl"
            ? { base: "10%", lg: "22%", xl: "22%", "2xl": "22%" }
            : "5%"
        }
        paddingLeft={
          textDirection == "ltr"
            ? { base: "10%", lg: "22%", xl: "22%", "2xl": "22%" }
            : "5%"
        }
        justifyContent="center"
        paddingY="1em"
      >
        <Text>{text}</Text>
      </HStack>
    </VStack>
  );
};

export default YxFooter;
