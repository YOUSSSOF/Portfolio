import {
  Box,
  Button,
  ButtonGroup,
  HStack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import laptop from "../../assets/vectors/laptop.svg";
import { useYxStore } from "../../store";
import { webPortfolios, mobilePortfolios } from "../../data";
import { Dispatch, SetStateAction } from "react";
import { MdKeyboardArrowLeft } from "@react-icons/all-files/md/MdKeyboardArrowLeft";
import { MdKeyboardArrowRight } from "@react-icons/all-files/md/MdKeyboardArrowRight";

interface Props {
  currentWebPortfolio: number;
  currentMobilePortfolio: number;
  setCurrentWebPortfolio: Dispatch<SetStateAction<number>>;
  setCurrentMobilePortfolio: Dispatch<SetStateAction<number>>;
  portfolioType: string;
}

export function YxCarouselController({
  currentWebPortfolio,
  currentMobilePortfolio,
  portfolioType,
  setCurrentMobilePortfolio,
  setCurrentWebPortfolio,
}: Props) {
  const activeDot = useColorModeValue("#001E6A", "white");
  const inactiveDot = useColorModeValue(
    "rgba(255,255,255,0.5)",
    "rgba(255,255,255,0.5)"
  );
  const borderColor = useColorModeValue(
    "rgba(0, 0, 0, 0.10);",
    "rgba(255, 255, 255, 0.10);"
  );
  const numberGradientColor = useColorModeValue(
    "linear-gradient(270deg, #001E6A 0%, rgba(0, 30, 106, 0.00) 100%);",
    "linear-gradient(270deg, rgba(255, 255, 255, 0.20) 0%, rgba(255, 255, 255, 0.00) 100%);"
  );
  const getDotsColor = (type: string, val: number) => {
    if (type == laptop) {
      return currentWebPortfolio == val ? activeDot : inactiveDot;
    } else {
      return currentMobilePortfolio == val ? activeDot : inactiveDot;
    }
  };
  const next = (type: string) => {
    if (type == laptop) {
      currentWebPortfolio < webPortfolios.length - 1
        ? setCurrentWebPortfolio(currentWebPortfolio + 1)
        : null;
    } else {
      currentMobilePortfolio < mobilePortfolios.length - 1
        ? setCurrentMobilePortfolio(currentMobilePortfolio + 1)
        : null;
    }
  };
  const before = (type: string) => {
    if (type == laptop) {
      currentWebPortfolio > 0
        ? setCurrentWebPortfolio(currentWebPortfolio - 1)
        : null;
    } else {
      currentMobilePortfolio > 0
        ? setCurrentMobilePortfolio(currentMobilePortfolio - 1)
        : null;
    }
  };
  const { textDirection } = useYxStore();

  return (
    <HStack width="100%" justifyContent="space-between" dir={textDirection}>
      <Text
        fontSize="3.75em"
        fontWeight="black"
        bgClip="text"
        bgGradient={numberGradientColor}
      >
        0
        {(portfolioType == laptop
          ? currentWebPortfolio
          : currentMobilePortfolio) + 1}
      </Text>
      <HStack>
        {Array.from({
          length:
            portfolioType == laptop
              ? webPortfolios.length
              : mobilePortfolios.length,
        }).map((val, index) => (
          <Box
          key={index}
            height="8px"
            width="8px"
            borderRadius={20}
            bg={getDotsColor(portfolioType, index)}
          />
        ))}
      </HStack>
      <HStack>
        <ButtonGroup isAttached>
          <Button
            borderRadius={0}
            margin={0}
            border={`1px solid ${borderColor}`}
            size="lg"
            padding={0}
            onClick={() => before(portfolioType)}
          >
            {textDirection == "rtl" ? (
              <MdKeyboardArrowRight />
            ) : (
              <MdKeyboardArrowLeft />
            )}
          </Button>
          <Button
            borderRadius={0}
            margin={0}
            border={`1px solid ${borderColor}`}
            size="lg"
            padding={0}
            onClick={() => next(portfolioType)}
          >
            {textDirection == "rtl" ? (
              <MdKeyboardArrowLeft />
            ) : (
              <MdKeyboardArrowRight />
            )}
          </Button>
        </ButtonGroup>
      </HStack>
    </HStack>
  );
}
