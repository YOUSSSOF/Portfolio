import { SimpleGrid, Text, VStack, useColorModeValue } from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import YxSkillLabel from "./YxSkillLabel";
import { DiRubyRough } from "@react-icons/all-files/di/DiRubyRough";
import { DiWordpress } from "@react-icons/all-files/di/DiWordpress";
import { DiJavascript } from "@react-icons/all-files/di/DiJavascript";
import { DiPython } from "@react-icons/all-files/di/DiPython";
import { SiDart } from "@react-icons/all-files/si/SiDart";
import { SiFastly } from "@react-icons/all-files/si/SiFastly";
import { SiReact } from "@react-icons/all-files/si/SiReact";
import { SiRails } from "@react-icons/all-files/si/SiRails";
import { SiDjango } from "@react-icons/all-files/si/SiDjango";
import { SiFlutter } from "@react-icons/all-files/si/SiFlutter";
import { SiHtml5 } from "@react-icons/all-files/si/SiHtml5";
import { SiCss3 } from "@react-icons/all-files/si/SiCss3";

const YxHardSkills = () => {
  const hardSkill = useLanguageValue("مهارت های فنی", "Hard Skills");
  const hardSkillDesc = useLanguageValue(
    "مهارت های بخش نرم افزارِ من، شامل حوزه های اپلیکیشن موبایل، وب اپلیکشن و برنامه نویسی سمت سرور. ",
    "My software skills including mobile applications, web applications and serverside programming"
  );
  const skillColor = useColorModeValue(
    "rgba(0, 30, 106, 0.80);",
    "rgba(255, 255, 255, 0.80);"
  );
  const skillDescColor = useColorModeValue(
    "rgba(0, 30, 106, 0.40);",
    "rgba(255, 255, 255, 0.40);"
  );
  return (
    <VStack alignItems="start" width="90%">
      <Text fontSize="2.1em" fontWeight="700" color={skillColor}>
        {hardSkill}
      </Text>
      <Text fontSize="1em" color={skillDescColor}>
        {hardSkillDesc}
      </Text>
      <SimpleGrid
        gap={2}
        columns={{ base: 2, sm: 2, md: 2, lg: 2, xl: 3, "2xl": 4 }}
        marginTop="10px"
      >
        <YxSkillLabel
          text="Dart"
          icon={<SiDart color="white" />}
          to="https://dart.dev/"
        />
        <YxSkillLabel
          text="Flutter"
          icon={<SiFlutter color="white" />}
          to="https://flutter.dev/"
        />
        <YxSkillLabel
          text="Python"
          icon={<DiPython color="white" />}
          to="https://www.python.org/"
        />
        <YxSkillLabel
          text="Django"
          icon={<SiDjango color="white" />}
          to="https://www.djangoproject.com/"
        />
        <YxSkillLabel
          text="Fastapi"
          icon={<SiFastly color="white" />}
          to="https://fastapi.tiangolo.com/"
        />
        <YxSkillLabel text="HTML" icon={<SiHtml5 color="white" />} />
        <YxSkillLabel text="CSS" icon={<SiCss3 color="white" />} />
        <YxSkillLabel text="Js" icon={<DiJavascript color="white" />} />
        <YxSkillLabel
          text="React"
          icon={<SiReact color="white" />}
          to="https://react.dev/"
        />

        <YxSkillLabel
          text="Ruby"
          icon={<DiRubyRough color="white" />}
          to="https://www.ruby-lang.org/en/"
        />
        <YxSkillLabel
          text="OnRails"
          icon={<SiRails color="white" />}
          to="https://rubyonrails.org/"
        />
        <YxSkillLabel
          text="WP"
          icon={<DiWordpress color="white" />}
          to="https://wordpress.org/"
        />
      </SimpleGrid>
    </VStack>
  );
};

export default YxHardSkills;
