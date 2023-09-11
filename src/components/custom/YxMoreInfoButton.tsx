import { HStack, useColorModeValue, Text } from "@chakra-ui/react";

import useLanguageValue from "../../hooks/useLanguageValue";
import { useYxStore } from "../../store";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

const YxMoreInfoButton = ({ onClick }: { onClick: () => void }) => {
  const { textDirection } = useYxStore();
  const [bgOpa, setBgOpa] = useState("0.5");
  const moreInfoBg = useColorModeValue(
    `rgba(58, 113, 255, ${bgOpa == "0.5" ? "0.9" : "1"})`,
    `rgba(58, 113, 255, ${bgOpa});`
  );
  const title = useLanguageValue("اطلاعات بیشتر", "learn more");
  return (
    <HStack
      bg={moreInfoBg}
      height="20%"
      justifyContent="space-between"
      paddingX="1em"
      position="absolute"
      bottom={0}
      right={0}
      width="100%"
      transition="all 200ms linear"
      onClick={onClick}
      cursor="pointer"
      onMouseEnter={() => setBgOpa("0.7")}
      onMouseLeave={() => setBgOpa("0.5")}
    >
      <Text color="white">{title}</Text>
      {textDirection == "rtl" ? (
        <MdKeyboardArrowLeft color="white" />
      ) : (
        <MdKeyboardArrowRight color="white" />
      )}
    </HStack>
  );
};

export default YxMoreInfoButton;
