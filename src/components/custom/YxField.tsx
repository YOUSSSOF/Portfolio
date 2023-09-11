import { Input, Textarea, useColorModeValue } from "@chakra-ui/react";
import { useYxStore } from "../../store";
import useLanguageValue from "../../hooks/useLanguageValue";
import { pallet } from "../../theme";

interface Props {
  type?: string;
  faPlaceholder: string;
  enPlaceholder: string;
  height?: string;
  multiline?: boolean;
}

const YxField = ({
  type,
  faPlaceholder,
  enPlaceholder,
  height,
  multiline,
}: Props) => {
  const { textDirection } = useYxStore();
  const bg = useColorModeValue(
    "rgba(0, 30, 106, 0.10);",
    "rgba(255, 255, 255, 0.05);"
  );  const border = useColorModeValue(
    "rgba(0, 0, 0, 0.1);",
    "rgba(255, 255, 255, 0.1);"
  );
  const placeholder = useLanguageValue(faPlaceholder, enPlaceholder);
  if (multiline)
    return (
        <Textarea
          height={height}
          placeholder={placeholder}
          borderRadius={0}
          border={`1px solid ${border}`}
          borderBottom={0}
          borderLeft={textDirection == "rtl" ? 0 : ""}
          borderRight={textDirection == "rtl" ? "" : 0}
          bg={bg}
          paddingY="1.5em"
          focusBorderColor={pallet.purple600}
        />
    );
  return (
    <Input
      height={height}
      type={type}
      placeholder={placeholder}
      borderRadius={0}
      border={`1px solid ${border}`}
      borderBottom={0}
      borderLeft={textDirection == "rtl" ? 0 : ""}
      borderRight={textDirection == "rtl" ? "" : 0}
      bg={bg}
      paddingY="1.5em"
      focusBorderColor={pallet.purple600}
    />
  );
};

export default YxField;
