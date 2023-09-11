import { Box, HStack, Text, useToast } from "@chakra-ui/react";
import { useState } from "react";
import useLanguageValue from "../../hooks/useLanguageValue";
import { useYxStore } from "../../store";
import { AiFillGithub } from "@react-icons/all-files/ai/AiFillGithub";
import { BsLink } from "@react-icons/all-files/bs/BsLink";
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

interface Props {
  blue: boolean;
  text: string;
  to?: string;
  copy?: boolean;
  tool?: string;
}
const YxTechnologyLabel = ({ blue, text, to, copy, tool }: Props) => {
  const { textDirection } = useYxStore();
  const [scale, setScale] = useState(1);
  const [radius, setRadius] = useState(0);
  const toast = useToast();
  const title = useLanguageValue("!متاسفم", "Sorry!");
  const desc = useLanguageValue(
    ".سورس کد اپلیکیشن مورد نظر در دسترس نیست",
    "Source code isn't currently available."
  );
  function getIcon() {
    if (blue) {
      switch (tool) {
        case "flutter":
          return <SiFlutter />;
        case "django":
          return <SiDjango />;
        case "react":
          return <SiReact />;
        case "fastapi":
          return <SiFastly />;
        case "python":
          return <DiPython />;
        case "WP":
          return <DiWordpress />;
        case "rails":
          return <SiRails />;
        case "ruby":
          return <DiRubyRough />;
        case "dart":
          return <SiDart />;
        case "JS":
          return <DiJavascript />;
        default:
          return <BsLink />;
      }
    } else {
      if (copy) {
        return <BsLink />;
      } else {
        return <AiFillGithub />;
      }
    }
  }
  return (
    <Box
      bg={blue ? "rgba(58, 113, 255, 0.50);" : "rgba(60, 48, 139, 0.50);"}
      border={`1px solid ${
        blue ? "rgba(58, 113, 255, 0.60);" : "rgba(60, 48, 139, 0.60);"
      }`}
      dir="rtl"
      paddingY="3px"
      paddingBottom={1}
      width="8em"
      cursor="pointer"
      rel="noopener noreferrer"
      transition="all .1s linear"
      transform={`scale(${scale});`}
      borderRadius={radius}
      onClick={() => {
        if (blue) {
          null;
        } else {
          if (copy) {
            void navigator.clipboard.writeText(to!);
            toast({ title: textDirection == "rtl" ? "کپی شد" : "copied" });
          } else {
            to == "#"
              ? toast({ title: title, description: desc })
              : window.open(to);
          }
        }
      }}
      onMouseEnter={() => {
        setRadius(1);
        setScale(1.05);
      }}
      onMouseLeave={() => {
        setRadius(0);
        setScale(1);
      }}
    >
      <HStack justifyContent="space-between" alignItems="center" marginX="1em">
        {getIcon()}
        <Text fontSize="1em" color="rgba(255, 255, 255, 0.70)">
          {text}
        </Text>
      </HStack>
    </Box>
  );
};

export default YxTechnologyLabel;
