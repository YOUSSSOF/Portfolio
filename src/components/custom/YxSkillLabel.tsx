import { HStack, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
interface Props {
  text: string;
  icon?: JSX.Element;
  to?: string;
}
const YxSkillLabel = ({ text, icon, to }: Props) => {

  const [scale, setScale] = useState(1);
  const [radius, setRadius] = useState(0);

  return (
    <Link
      bg={icon ? "#3A71FF" : "#3C308B"}
      dir="rtl"
      paddingY="3px"
      paddingBottom={1}
      width="8em"
      cursor="pointer"
      style={{ textDecoration: "none" }}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
      transition="all .1s linear"
      transform={`scale(${scale});`}
      borderRadius={radius}
      onMouseEnter={() => {
        setRadius(1);
        setScale(1.05);
      }}
      onMouseLeave={() => {
        setRadius(0);
        setScale(1);
      }}
    >
      <HStack
        justifyContent={icon ? "space-between" : "center"}
        alignItems="center"
        marginX="1em"
      >
        {icon}
        <Text fontSize="1em" color="rgba(255, 255, 255, 0.70)">
          {text}
        </Text>
      </HStack>
    </Link>
  );
};

export default YxSkillLabel;
