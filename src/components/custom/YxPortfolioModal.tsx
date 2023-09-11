import {
  Drawer,
  DrawerContent,
  DrawerBody,
  Box,
  Text,
  DrawerCloseButton,
  Image,
  HStack,
  useColorModeValue,
  Button,
  Flex,
  VStack,
} from "@chakra-ui/react";
import { useYxStore } from "../../store";
import laptop from "../../assets/vectors/laptop.svg";
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";
import { BsLink } from "@react-icons/all-files/bs/BsLink";
import { useState } from "react";
import useLanguageValue from "../../hooks/useLanguageValue";
import YxSeprator from "./YxSeprator";
import YxTechnologyLabel from "./YxTechnologyLabel";

const YxPortfolioModal = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const {
    textDirection,
    currentPortfolioDrawer,
    currentPortfolioType,
    showPortfolioDrawer,
    setShowPortfolioDrawer,
  } = useYxStore();

  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.98);",
    "rgba(21,21,21,.98)"
  );
  const imageBg = useColorModeValue(
    "rgba(58, 113, 255)",
    "rgba(58, 113, 255, 0.50)"
  );
  const borderColor = useColorModeValue(
    "rgba(0, 0, 0, 0.10);",
    "rgba(255, 255, 255, 0.10);"
  );
  const sepBg = useColorModeValue("rgba(0,0,0,0.1)", "rgba(255,255,255,0.1)");

  const name = useLanguageValue(
    currentPortfolioDrawer.faName,
    currentPortfolioDrawer.enName
  );
  const desc = useLanguageValue(
    currentPortfolioDrawer.faDesc,
    currentPortfolioDrawer.enDesc
  );
  const technologies = useLanguageValue(
    "تکنولوژی های بکار  رفته",
    "Used Technologies"
  );
  const start = useLanguageValue(
    currentPortfolioDrawer.faStart,
    currentPortfolioDrawer.enStart
  );
  const finish = useLanguageValue(
    currentPortfolioDrawer.faFinish,
    currentPortfolioDrawer.enFinish
  );
  const timeSpent = useLanguageValue("زمان صرف شده برای پروژه", "Spent time");
  const alt = useLanguageValue(
    `اسلایدر عکس های نمونه کار ${currentPortfolioDrawer.faName}`,
    `slider pictures of ${currentPortfolioDrawer.enName} portfolio`
  );
  const nextImage = () => {
    if (currentPortfolioDrawer.pictures.length > currentImageIndex + 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const beforeImage = () => {
    if (0 <= currentImageIndex - 1) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  return (
    <Drawer
      isOpen={showPortfolioDrawer}
      onClose={() => console.log()}
      placement="bottom"
    >
      <DrawerContent
        height="80vh"
        dir={textDirection}
        bg={bg}
        borderTopRadius={30}
      >
        <DrawerCloseButton
          onClick={() => {
            setShowPortfolioDrawer(false);
            setCurrentImageIndex(0);
          }}
        />
        <DrawerBody p={0} width="100%">
          <HStack
            width="100%"
            borderTopRadius={30}
            bg={imageBg}
            justifyContent="space-between"
            padding="2em"
          >
            <Button
              borderRadius={0}
              margin={0}
              border={`1px solid ${borderColor}`}
              size="md"
              padding={0}
              onClick={() => nextImage()}
            >
              {textDirection == "rtl" ? (
                <MdKeyboardArrowRight />
              ) : (
                <MdKeyboardArrowLeft />
              )}
            </Button>
            <Image
              alt={alt}
              src={currentPortfolioDrawer.pictures[currentImageIndex]}
              margin={currentPortfolioType == laptop ? "3vw" : "5vw"}
              fit="contain"
              height={
                currentPortfolioType == laptop
                  ? {
                      base: "70%",
                      sm: "40%",
                      md: "80%",
                      lg: "70%",
                      xl: "70%",
                      "2xl": "50%",
                    }
                  : {
                      base: "100%",
                      md: "25%",
                      lg: "25%",
                      xl: "20%",
                      "2xl": "10%",
                    }
              }
              width={
                currentPortfolioType == laptop
                  ? {
                      base: "90%",
                      sm: "40%",
                      md: "60%",
                      lg: "70%",
                      xl: "60%",
                      "2xl": "50%",
                    }
                  : {
                      base: "60%",
                      md: "25%",
                      lg: "25%",
                      xl: "20%",
                      "2xl": "15%",
                    }
              }
            />
            <Button
              borderRadius={0}
              margin={0}
              border={`1px solid ${borderColor}`}
              size="md"
              padding={0}
              onClick={() => beforeImage()}
            >
              {textDirection == "rtl" ? (
                <MdKeyboardArrowLeft />
              ) : (
                <MdKeyboardArrowRight />
              )}
            </Button>
          </HStack>
          <Box paddingX="2em" paddingY="1em">
            <Text fontSize="1.5em">{name}</Text>

            <Text fontSize="16px" marginTop="1em">
              {desc.split(".")[0] + "."}
            </Text>
            <Flex wrap="wrap" gap={3} marginTop="1em">
              <YxTechnologyLabel
                blue={false}
                text={textDirection == "rtl" ? "گیت هاب" : "github"}
                to={currentPortfolioDrawer.githubLink}
              />
              <YxTechnologyLabel
                copy
                blue={false}
                text={textDirection == "rtl" ? "لینک" : "link"}
                to={`${window.location.host}/?portfolio=${currentPortfolioDrawer.id}&lang=${textDirection}`}
              />
            </Flex>
          </Box>
          <YxSeprator marginY="1em" />
          <Box paddingX="2em">
            <Text fontSize="1.5em">{technologies}</Text>
            <Flex wrap="wrap" gap={3} marginTop="1em">
              {currentPortfolioDrawer.tools.map((tool) => (
                <YxTechnologyLabel key={tool} blue text={tool} tool={tool} />
              ))}
            </Flex>
          </Box>
          <YxSeprator marginY="1.5em" />
          <Text fontSize="1.7em" paddingX="1em" marginBottom="1em">
            {timeSpent}
          </Text>
          <YxSeprator />
          <HStack width="100%" justifyContent="space-around" paddingX="2em">
            <VStack alignItems="start">
              <Text fontSize="10px">
                {textDirection == "rtl" ? "شروع:" : "start"}
              </Text>
              <Text fontSize="15px">{start}</Text>
            </VStack>
            <Box bg={sepBg} width="1px" height="5em" />
            <VStack alignItems="start">
              <Text fontSize="10px">
                {textDirection == "rtl" ? "اتمام:" : "finish"}
              </Text>
              <Text fontSize="15px">{finish}</Text>
            </VStack>
          </HStack>
          <YxSeprator />
          <Box
            marginTop="2em"
            paddingX="2em"
            paddingBottom="2em"
            style={{ whiteSpace: "pre-line" }}
          >
            {desc}
          </Box>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default YxPortfolioModal;
