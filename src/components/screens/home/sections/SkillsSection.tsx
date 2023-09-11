import { SimpleGrid, useColorModeValue } from "@chakra-ui/react";
import { useYxStore } from "../../../../store";
import YxHardSkills from "../../../custom/YxHardSkills";
import YxSoftSkills from "../../../custom/YxSoftSkills";

const SkillSection = () => {
  const { textDirection } = useYxStore();
  const bg = useColorModeValue("#F5F5F5", "#171717");

  return (
    <SimpleGrid
      id="sec-2"
      bg={bg}
      gap={{ base: 10, xl: 0, "2xl": 0 }}
      columns={{ lg: 2 }}
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
      <YxHardSkills />
      <YxSoftSkills />
    </SimpleGrid>
  );
};

export default SkillSection;
