import {
  Image,
  SimpleGrid,
  Stack,
  Tab,
  TabList,
  TabPanels,
  Tabs,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import bglight from "../../../../assets/vectors/sec3-bglight.svg";
import bgdark from "../../../../assets/vectors/sec3-bgdark.svg";
import laptop from "../../../../assets/vectors/laptop.svg";
import mobile from "../../../../assets/vectors/iphone.svg";
import { useState } from "react";
import { useYxStore } from "../../../../store";
import useLanguageValue from "../../../../hooks/useLanguageValue";
import { mobilePortfolios, webPortfolios } from "../../../../data";
import YxMoreInfoButton from "../../../custom/YxMoreInfoButton";
import YxTabPanel from "../../../custom/YxTabPanel";
import { YxCarouselController } from "../../../custom/YxCarouselController";
import YxPortfolioModal from "../../../custom/YxPortfolioModal";

const PortfoliosSection = () => {
  const bg = useColorModeValue(bglight, bgdark);
  const [portfolioType, setPortfolioType] = useState(laptop);
  const [currentWebPortfolio, setCurrentWebPortfolio] = useState(0);
  const [currentMobilePortfolio, setCurrentMobilePortfolio] = useState(0);
  const current =
    portfolioType == laptop
      ? webPortfolios[currentWebPortfolio]
      : mobilePortfolios[currentMobilePortfolio];
  const currentPortfolioTitle = useLanguageValue(
    current.faName,
    current.enName
  );
  const currentPortfolioDes = useLanguageValue(current.faDesc, current.enDesc);
  const {
    textDirection,
    setShowPortfolioDrawer,
    setCurrentPortfolioType,
    setCurrentPortfolioDrawer,
  } = useYxStore();
  const tab1TitleText = useLanguageValue("اپلیکیشن های وب", "Web Apps");
  const tab2TitleText = useLanguageValue("اپلیکیشن های موبایل", "Mobile Apps");
  const alt = useLanguageValue(
    "پیش نمایش اولین عکس نمونه کار از وبسایت رزومه یوسف هاشم زاده",
    "first picture as thubmnail of yousof hasehmzadeh's portfolio"
  );
  const tabBg = useColorModeValue(
    "rgba(0, 30, 106, 0.05);",
    "rgba(255, 255, 255, 0.05);"
  );
  const tabColor = useColorModeValue(
    "rgba(0, 30, 106, 0.80);",
    "rgba(255, 255, 255, 0.80);"
  );
  const borderColor = useColorModeValue(
    "rgba(0, 0, 0, 0.10);",
    "rgba(255, 255, 255, 0.10);"
  );
  return (
    <>
      <YxPortfolioModal />
      <SimpleGrid
        id="sec-3"
        backgroundImage={bg}
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        columns={{ lg: 2 }}
        paddingY="4em"
        dir={textDirection == "rtl" ? "ltr" : "rtl"}
        overflowX="hidden"
      >
        <Stack
          paddingRight={
            textDirection == "rtl"
              ? portfolioType == laptop
                ? {
                    base: "0",
                    sm: "9%",
                    md: "0",
                    lg: "24%",
                    xl: "24%",
                    "2xl": "24%",
                  }
                : {
                    base: "0",
                    sm: "9%",
                    md: "0",
                    lg: "24%",
                    xl: "17%",
                    "2xl": "18%",
                  }
              : ""
          }
          paddingLeft={
            textDirection == "ltr"
              ? portfolioType == laptop
                ? {
                    base: "0",
                    sm: "5%",
                    md: "15%",
                    lg: "24%",
                    xl: "20%",
                    "2xl": "24%",
                  }
                : { base: "0", lg: "24%", xl: "17%", "2xl": "18%" }
              : ""
          }
          width={{
            base: "100vw",
            md: "90vw",
            lg: "90vw",
            xl: "90vw",
            "2xl": "90vw",
          }}
          direction={["column", "row"]}
          alignItems="center"
          justifyContent="center"
        >
          <Image
            alt={alt}
            src={current.pictures[0]}
            fit={{
              base: "contain",
              sm: "cover",
              xl: "contain",
              "2xl": "contain",
            }}
            margin={portfolioType == laptop ? "3vw" : "5vw"}
            height={"80%"}
            objectPosition="right"
            width={
              portfolioType == laptop
                ? {
                    base: "80%",
                    sm: "40%",
                    md: "50%",
                    lg: "40%",
                    xl: "40%",
                    "2xl": "50%",
                  }
                : { base: "40%", md: "25%", lg: "25%", xl: "20%", "2xl": "20%" }
            }
          />
          <VStack
            alignItems="center"
            width={{ base: "85%", md: "45%", lg: "60%", xl: "60%" }}
          >
            <Tabs
              width="100%"
              marginTop="2em"
              paddingBottom="20%"
              bg={tabBg}
              border={`1px solid ${borderColor}`}
              dir={textDirection}
              index={portfolioType == laptop ? 0 : 1}
              onChange={() =>
                setPortfolioType(portfolioType == laptop ? mobile : laptop)
              }
              variant="enclosed"
              borderRadius={0}
              position="relative"
            >
              <TabList>
                <Tab
                  padding="1em"
                  borderRadius={0}
                  border={
                    portfolioType == laptop ? `1px solid ${borderColor}` : ""
                  }
                  fontWeight="bold"
                  width="100%"
                  color={tabColor}
                >
                  {tab1TitleText}
                </Tab>
                <Tab
                  borderRadius={0}
                  border={
                    portfolioType == mobile ? `1px solid ${borderColor}` : ""
                  }
                  fontWeight="bold"
                  width="100%"
                  color={tabColor}
                >
                  {tab2TitleText}
                </Tab>
              </TabList>
              <TabPanels p=".2em">
                <YxTabPanel
                  currentPortfolioTitle={currentPortfolioTitle}
                  currentPortfolioDesc={currentPortfolioDes}
                />
                <YxTabPanel
                  currentPortfolioTitle={currentPortfolioTitle}
                  currentPortfolioDesc={currentPortfolioDes}
                />
              </TabPanels>
              <YxMoreInfoButton
                onClick={() => {
                  setShowPortfolioDrawer(true);
                  setCurrentPortfolioType(portfolioType);
                  setCurrentPortfolioDrawer(current);
                }}
              />
            </Tabs>
            <YxCarouselController
              currentMobilePortfolio={currentMobilePortfolio}
              setCurrentWebPortfolio={setCurrentWebPortfolio}
              setCurrentMobilePortfolio={setCurrentMobilePortfolio}
              currentWebPortfolio={currentWebPortfolio}
              portfolioType={portfolioType}
            />
          </VStack>
        </Stack>
      </SimpleGrid>
    </>
  );
};

export default PortfoliosSection;
