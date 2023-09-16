import { Box, Show, VStack, useColorModeValue } from "@chakra-ui/react";
import YxSideListItem from "./YxSideListItem";
import hashtag from "../../assets/icons/hastag.svg";
import cube from "../../assets/icons/cube.svg";
import bag from "../../assets/icons/bag.svg";
import cap from "../../assets/icons/cap.svg";
// import edit from "../../assets/icons/edit.svg";
import headset from "../../assets/icons/headset.svg";
import YxLogo from "./YxLogo";
import YxButton from "./YxButton";
import YxSeprator from "./YxSeprator";
import { useYxStore } from "../../store";
import YxLanguageSwitch from "./YxLanguageSwitch";
import YxThemeModeSwitch from "./YxThemeModeSwitch";

const YxSideBar = () => {
  const { sideBarSelectedINdex, setSelectedIndex } = useYxStore();

  const bg = useColorModeValue(
    "rgba(255, 255, 255, 0.70);",
    "rgba(255,255,255,0.05)"
  );
  const borderColor = useColorModeValue(
    "rgba(0, 0, 0, 0.10)",
    "rgba(255, 255, 255, 0.10)"
  );
  const { textDirection } = useYxStore();

  return (
    <VStack
      height="100vh"
      width={{
        base: "100%",
        lg: "20vw",
        "2xl": "17vw",
      }}
      position="fixed"
      top="0"
      zIndex="1"
      bg={bg}
      backdropFilter="blur(50px)"
      borderLeft={textDirection == "rtl" ? `2px solid ${borderColor}` : ""}
      borderRight={textDirection == "ltr" ? `2px solid ${borderColor}` : ""}
      alignItems="end"
      paddingTop={{ lg: "3%", "2xl": "3%", base: "10%" }}
    >
      <Show above="lg">
        <Box
          alignSelf="start"
          marginRight={textDirection == "rtl" ? "20%" : ""}
          marginLeft={textDirection == "ltr" ? "20%" : ""}
          marginBottom="5%"
        >
          <YxLogo />
        </Box>
      </Show>
      <YxSideListItem
        id={1}
        faTitle="درباره من"
        enTitle="About me"
        icon={hashtag}
        isSelected={sideBarSelectedINdex == 1}
        onClick={() => {
          setSelectedIndex(1);
          document
            .getElementById("sec-1")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <YxSideListItem
        id={2}
        faTitle="مهارت ها"
        enTitle="Skills"
        icon={cube}
        isSelected={sideBarSelectedINdex == 2}
        onClick={() => {
          setSelectedIndex(2);
          document
            .getElementById("sec-2")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <YxSideListItem
        id={3}
        faTitle="نمونه کارها"
        enTitle="Portfolios"
        icon={bag}
        isSelected={sideBarSelectedINdex == 3}
        onClick={() => {
          setSelectedIndex(3);
          document
            .getElementById("sec-3")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <YxSideListItem
        id={4}
        faTitle="سوابق تحصیلی"
        enTitle="Educational Experience"
        icon={cap}
        isSelected={sideBarSelectedINdex == 4}
        onClick={() => {
          setSelectedIndex(4);
          document
            .getElementById("sec-4")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />

      {/* <YxSideListItem
          id={5}
          faTitle="مقالات"
          enTitle="Articles"
          icon={edit}
          isSelected={sideBarSelectedINdex == 5}
          onClick={() => {
            setSelectedIndex(5);
            document
              .getElementById("sec-5")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
        /> */}

      <YxSideListItem
        id={6}
        faTitle="تماس با من"
        enTitle="Contact me"
        icon={headset}
        isSelected={sideBarSelectedINdex == 6}
        onClick={() => {
          setSelectedIndex(6);
          document
            .getElementById("sec-6")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      />
      <VStack
        width="100%"
        height="100%"
        justifyContent="end"
        paddingBottom="50px"
      >
        <YxSeprator />
        <YxLanguageSwitch />
        <YxThemeModeSwitch />
        <Show below="lg">
          <Box height="7vh" />
        </Show>
        <Show above="lg">
          <YxSeprator />
          <Box width="80%" alignSelf="center" marginTop="10%">
            <YxButton
              faTitle="PDF دانلود رزومه بصورت"
              enTitle="Donwload PDF Resume"
              width="100%"
            />
          </Box>
        </Show>
      </VStack>
    </VStack>
  );
};

export default YxSideBar;
