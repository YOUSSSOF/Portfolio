import {
  Box,
  Center,
  HStack,
  Image,
  SimpleGrid,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { useYxStore } from "../../../../store";
import me from "../../../../assets/images/InShot_20230723_012524779-min.jpg";
import useLanguageValue from "../../../../hooks/useLanguageValue";
import YxContactForm from "../../../custom/YxContactForm";



const ContactMeSection = () => {
  const bg = useColorModeValue("#F5F5F5", "#171717");
  const { textDirection } = useYxStore();
  const phone = useLanguageValue("5644 565 913 98+", "+98 913 565 5644");
  const loc = useLanguageValue("ایران، اصفهان", "iran, isfahan");
  const alt = useLanguageValue(
    "عکس شخصی برای رزومه یوسف هاشم زاده،  شماره دو",
    "personal picture of yousof hashemzade of portfolio, number two"
  );
  return (
    <SimpleGrid
      id="sec-6"
      paddingY="4em"
      bg={bg}
      paddingRight={
        textDirection == "rtl" ? { lg: "22%", xl: "22%", "2xl": "22%" } : ""
      }
      paddingLeft={
        textDirection == "ltr" ? { lg: "22%", xl: "22%", "2xl": "22%" } : ""
      }
      columns={{ base: 1, lg: 2 }}
    >
      <YxContactForm />
      <Box
        position="relative"
        alignSelf="end"
        style={{
          WebkitUserSelect: "text",
          KhtmlUserSelect: "text",
          MozUserSelect: "text",
          msUserSelect: "text",
          userSelect: "text",
        }}
      >
        <Center marginTop={{ base: "2em", lg: "3em", "2xl": ".5em" }}>
          <Image
            src={me}
            width={{ base: "80vw", lg: "30vw" }}
            fit="contain"
            loading="lazy"
            alt={alt}
          />
          <HStack
            width={{ base: "80vw", lg: "30vw" }}
            position="absolute"
            bottom={10}
            paddingX="2em"
            display="inline-flex"
            justifyContent="space-between"
            bg="rgba(54, 38, 167, 0.40);"
            backdropFilter="blur(25px)"
            paddingY={{ base: "1.5em", lg: ".5em", xl: "1em", "2xl": "1.5em" }}
          >
            <Text
              fontSize={{ base: "8px", md: "12px", lg: "10px" }}
              color="#FFF"
            >
              {loc}
            </Text>
            <Text
              fontSize={{ base: "8px", md: "12px", lg: "10px" }}
              color="#FFF"
            >
              {phone}
            </Text>
            <Text
              fontSize={{ base: "8px", md: "12px", lg: "10px" }}
              color="#FFF"
            >
              yousofh255@gmail.com
            </Text>
          </HStack>
        </Center>
      </Box>
    </SimpleGrid>
  );
};

export default ContactMeSection;
