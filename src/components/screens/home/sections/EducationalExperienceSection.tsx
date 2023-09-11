import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import useLanguageValue from "../../../../hooks/useLanguageValue";
import { useYxStore } from "../../../../store";
import YxEducationCard from "../../../custom/YxEducationCard";
import adab from "../../../../assets/images/Adabhg.jpg";
import uni from "../../../../assets/images/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg";
import bgdark from "../../../../assets/vectors/sec5-bgdark.svg";
import bglight from "../../../../assets/vectors/sec5-bglight.svg";
const EducationalExperienceSection = () => {
  const { textDirection } = useYxStore();

  const titleText = useLanguageValue("سوابق تحصیلی", "Educational Experience");
  const titleColor = useColorModeValue(
    "rgba(0, 30, 106, 0.80);",
    "rgba(255, 255, 255, 0.80);"
  );
  const descText = useLanguageValue(
    "علاقه ی خاص و بیش از اندازه ای به هنر داشتم اما هنگام انتخاب رشته رفتم سمت رشته ی ریاضی و مباحث کامپیوتر و مهندسی. سوابق و مدارک تحصیلی من ( این بخش به مرور زمان کامل تر میشه ) : ",
    "Had a special and uncommon love for art but in high school decided to continue with math and engineering subjects. my degrees and educational experiences ( this section will be more complete over time ) :"
  );
  const descColor = useColorModeValue(
    "rgba(0, 30, 106, 0.40);",
    "rgba(255, 255, 255, 0.70);"
  );
  const bg = useColorModeValue(bglight, bgdark);

  return (
    <Box
      id="sec-4"
      backgroundImage={bg}
      backgroundRepeat="no-repeat"
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
      paddingY="4em"
    >
      <Text color={titleColor} fontSize="2.1em" fontWeight="700">
        {titleText}
      </Text>
      <Text
        color={descColor}
        fontSize="1em"
        fontWeight="medium"
        marginTop="12px"
        width={{ base: "90%", lg: "60%" }}
      >
        {descText}
      </Text>
      <Flex flexDirection="row" flexWrap="wrap" paddingY="2em" gap="2em">
        <YxEducationCard
          faTitle="دبیرستان"
          enTitle="Hight School"
          faDesc="تحصیل دوره دبیرستان در دبیرستان ماندگار شهدای ادب در رشته ریاضی فیزیک و اخذ مدرک دیپلم."
          enDesc="spent high school in isfahan's Shohadaye Adab high school and obtained a mathematics and physics diploma."
          startYear={textDirection == "rtl" ? "1399" : "2020"}
          endYear={textDirection == "rtl" ? "1402" : "2023"}
          image={adab}
        />
        <YxEducationCard
          faTitle="دانشگاه"
          enTitle="Univercity"
          faDesc="به زودی..."
          enDesc="soon..."
          startYear={textDirection == "rtl" ? "1402" : "2023"}
          endYear="????"
          image={uni}
        />
      </Flex>
    </Box>
  );
};

export default EducationalExperienceSection;
