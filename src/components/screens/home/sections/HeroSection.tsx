import {
  Box,
  Text,
  SimpleGrid,
  HStack,
  Image,
  Center,
  Show,
  useColorModeValue,
} from "@chakra-ui/react";
import linkedin from "../../../../assets/icons/linkedin.svg";
import github from "../../../../assets/icons/github.svg";
import telegram from "../../../../assets/icons/telegram.svg";
import profile from "../../../../assets/images/me.jpg";
import bglight from "../../../../assets/vectors/sec1-bglight.svg";
import bgdark from "../../../../assets/vectors/sec1-bgdark.svg";
import { useYxStore } from "../../../../store";
import useLanguageValue from "../../../../hooks/useLanguageValue";
import YxButton from "../../../custom/YxButton";
import YxDrawer from "../../../custom/YxDrawer";

const HeroSection = () => {
  const { textDirection, setSelectedIndex } = useYxStore();
  const bg = useColorModeValue(bglight, bgdark);
  const nameColor = useColorModeValue(
    "linear-gradient(221deg, #6691FF 0%, #2763FF 58.85%, #0047FF 100%);",
    "linear-gradient(180deg, #6B95FF 0%, #3A71FF 100%);"
  );
  const borderColor = useColorModeValue(
    "rgba(0,0,0,0.1)",
    "rgba(255,255,255,0.1)"
  );
  const descColor = useColorModeValue(
    "rgba(0, 0, 0, 0.40);",
    "rgba(255,255,255,.35)"
  );
  const bgTextColor = useColorModeValue(
    "linear-gradient(180deg, rgba(0, 30, 106, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%, rgba(0, 30, 106, 0.10) 100%);",
    "linear-gradient(180deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.00) 100%)"
  );
  const profileBgColor = useColorModeValue(
    "rgba(54, 38, 167, 0.05);",
    "rgba(255,255,255,0.05)"
  );
  const buttonTextColor = useColorModeValue("rgba(0, 30, 106, 0.80);", "#FFF");
  const name = useLanguageValue(" هاشم زاده", "YOUSOF HASHEMZADEH");
  const desc = useLanguageValue(
    "با ترکیبِ علاقه به کامپیوتر و چیز ساختن وارد این حوزه شدم و بعد از بسیاری تلاشهای ناکام در زمینه های مختلف، بخشِ مورد علاقه خودم رو پیدا کردم و شدم یه جوجه برنامه نویسِ فول استک اپلیکیشن های موبایل و وب اپلیکیشن ها:)",
    "with a strong passion for IT and building things, I entered this field and after plenty of time to working on different areas, I finally found my favorite part of this huge field and became a tiny little mobile-web full-stack developer:)"
  );
  const alt = useLanguageValue(
    "عکس شخصی برای رزومه یوسف هاشم زاده،  شماره یک",
    "personal picture of yousof hashemzade of portfolio, number one"
  );
  const profileDimenstions = {
    base: "90%",
    xl: "80%",
  };
  return (
    <Box
      id="sec-1"
      backgroundImage={bg}
      backgroundSize="cover"
      overflow="hidden"
      height={{ xl: "105vh", "2xl": "105vh" }}
      paddingBottom={{ base: "5vh", sm: "5vh", md: "5vh" }}
      paddingTop={{
        base: "15vh",
        xl: "10%",
      }}
      style={{
        minHeight: "55px",
        WebkitBoxSizing: "border-box",
        MozBoxSizing: "border-box",
        boxSizing: "border-box",
      }}
    >
      <Box
        paddingRight={
          textDirection == "rtl"
            ? { base: "10%", lg: "22%", xl: "22%", "2xl": "22%" }
            : ""
        }
        paddingLeft={
          textDirection == "ltr"
            ? { base: "10%", lg: "22%", xl: "22%", "2xl": "22%" }
            : ""
        }
      >
        <SimpleGrid columns={{ lg: 2 }} alignItems="center">
          <Box
            width={profileDimenstions}
            paddingBottom={profileDimenstions}
            height="0"
            bg={profileBgColor}
            border={`1px solid ${borderColor}`}
            backdropFilter="blur(50px)"
          >
            <Center>
              <Image
                src={profile}
                padding="5%"
                fit="cover"
                loading="lazy"
                alt={alt}
              />
            </Center>
          </Box>
          <Box>
            <Text
              marginTop="1.9em"
              fontSize="1.8em"
              fontWeight="black"
              bgClip="text"
              bgGradient={nameColor}
              zIndex={1}
              position="absolute"
            >
              {name}
            </Text>
            <Text
              width="6.1em"
              marginTop=".5em"
              lineHeight="32px"
              fontSize="2.5em"
              fontWeight="black"
              bgClip="text"
              bgGradient={bgTextColor}
              style={{
                WebkitTextFillColor: "transparent",
              }}
            >
              MOBILE DEVELOPER
            </Text>
            <Text
              fontWeight={400}
              fontSize=".87em"
              width="80%"
              lineHeight="21px"
              marginTop="1.2em"
              color={descColor}
            >
              {desc}
            </Text>
            <HStack marginTop="1.5em">
              <YxButton
                faTitle="تماس با من"
                enTitle="Contact me"
                color={buttonTextColor}
                onClick={() => {
                  setSelectedIndex(6);
                  document
                    .getElementById("sec-6")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              />
              <YxButton
                icon={github}
                padding="13px"
                to="//www.github.com/YOUSSSOF"
              />
              <YxButton icon={linkedin} padding="13px" />
              <YxButton
                icon={telegram}
                padding="13px"
                to="//www.t.me/YOUDEXSOF"
              />
            </HStack>
          </Box>
        </SimpleGrid>
      </Box>
      <Show below="lg">
        <YxDrawer />
      </Show>
    </Box>
  );
};

export default HeroSection;
