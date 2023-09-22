import { HStack, useColorModeValue } from "@chakra-ui/react";
import YxLogo from "./YxLogo";
import YxButton from "./YxButton";
import icon from "../../assets/icons/menu.svg";
import { useYxStore } from "../../store";
import useLanguageValue from "../../hooks/useLanguageValue";
import cv_fa from "../../../cvs/cv-fa.pdf";
import cv_en from "../../../cvs/cv-en.pdf";

const YxNavBar = () => {
  const { setShowDrawer } = useYxStore();
  const bg = useColorModeValue(
    "rgba(0, 0, 0, 0.05);",
    "rgba(255,255,255,0.05)"
  );
  const cv = useLanguageValue(cv_fa, cv_en);

  const borderColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(255,255,255,0.1)"
  );
  return (
    <HStack
      borderBottom={`2px solid ${borderColor}`}
      position="fixed"
      zIndex="1"
      width="100vw"
      height="10vh"
      bg={bg}
      backdropFilter="blur(50px)"
      paddingY="2.5vh"
      paddingX="10%"
    >
      <HStack
        dir="ltr"
        id="nav"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <YxLogo />
        <HStack>
          <YxButton
            faTitle="PDF دانلود رزومه بصورت"
            enTitle="Donwload PDF Resume"
            download
            to={cv}
          />
          <YxButton icon={icon} onClick={() => setShowDrawer(true)} />
        </HStack>
      </HStack>
    </HStack>
  );
};

export default YxNavBar;
