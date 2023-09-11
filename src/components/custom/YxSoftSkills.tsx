import { SimpleGrid, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import YxSkillLabel from "./YxSkillLabel";

const YxSoftSkills = () => {
  const skillColor = useColorModeValue(
    "rgba(0, 30, 106, 0.80);",
    "rgba(255, 255, 255, 0.80);"
  );
  const skillDescColor = useColorModeValue(
    "rgba(0, 30, 106, 0.40);",
    "rgba(255, 255, 255, 0.40);"
  );
  const softSkill = useLanguageValue("مهارت های نرم", "Soft Skills");
  const softSkillDesc = useLanguageValue(
    "مهارت های فردی ای که تا الان درونِ خودم پرورش دادم و سعی دارم طی مرورِ زمان بیشترشون کنم.",
    "My social skills that i tried and earned till now and plan to develope more over time."
  );
  const english = useLanguageValue("انگلیسی", "english");
  const persian = useLanguageValue("فارسی", "persian");
  const criticizable = useLanguageValue("انتقاد پذیر", "criticizable");
  const attentive = useLanguageValue("شنونده خوب", "attentive");
  const patience = useLanguageValue("صبور", "patience");
  const techSavvy = useLanguageValue("به روز", "tech-savvy");

  return (
    <VStack
      alignSelf="start"
      alignItems="start"
      width="90%"
      justifyContent="start"
    >
      <Text fontSize="2.1em" fontWeight="700" color={skillColor}>
        {softSkill}
      </Text>
      <Text fontSize="1em" color={skillDescColor}>
        {softSkillDesc}
      </Text>
      <SimpleGrid
        gap={2}
        columns={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3, "2xl": 4 }}
        marginTop="10px"
      >
        <YxSkillLabel text={english} />
        <YxSkillLabel text={persian} />
        <YxSkillLabel text={criticizable} />
        <YxSkillLabel text={techSavvy} />
        <YxSkillLabel text={attentive} />
        <YxSkillLabel text={patience} />
      </SimpleGrid>
    </VStack>
  );
};

export default YxSoftSkills;
