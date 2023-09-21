import { Button, Image, Link, useColorModeValue } from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";

interface Props {
  faTitle?: string;
  enTitle?: string;
  icon?: string;
  onClick?: () => void;
  padding?: string;
  color?: string;
  backgroundColor?: string;
  height?: number;
  width?: string;
  to?: string;
  download?: boolean;
}

const YxButton = ({
  faTitle,
  enTitle,
  icon,
  padding,
  color,
  backgroundColor,
  width,
  height,
  to,
  download,
  onClick,
}: Props) => {
  const bg = useColorModeValue(
    "rgba(0, 30, 106, 0.05);",
    "rgba(255,255,255,0.0.5)"
  );
  const text = useColorModeValue("black", "white");
  const title = useLanguageValue(faTitle!, enTitle!);
  return (
    <Link
      href={to}
      target="_blank"
      rel={download ? "" : "noopener noreferrer"}
      style={{ textDecoration: "none" }}
      download={download}
    >
      <Button
        width={width}
        height={height ?? 50}
        className={padding ? "" : ""}
        borderRadius={0}
        paddingX={padding ?? 6}
        paddingY={padding ?? 0}
        onClick={onClick}
        color={color ?? text}
        backgroundColor={backgroundColor ?? bg}
        fontSize=".75em"
        fontWeight="regular"
        letterSpacing="-0.24px"
      >
        {title}
        {icon && <Image src={icon} />}
      </Button>
    </Link>
  );
};

export default YxButton;
