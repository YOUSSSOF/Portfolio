import { TabPanel, Text, VStack, useColorModeValue } from "@chakra-ui/react";

const YxTabPanel = ({
  currentPortfolioTitle,
  currentPortfolioDesc,
}: {
  currentPortfolioTitle: string;
  currentPortfolioDesc: string;
}) => {
  const tabColor = useColorModeValue(
    "rgba(0, 30, 106, 0.80);",
    "rgba(255, 255, 255, 0.80);"
  );
  const contentColor = useColorModeValue(
    "rgba(0, 30, 106, 0.40);",
    "rgba(250, 250, 250, 0.70);"
  );
  return (
    <TabPanel>
      <VStack alignItems="start">
        <Text fontSize="1.25em" fontWeight="bold" color={tabColor}>
          {currentPortfolioTitle}
        </Text>
        <Text fontSize="0.87em" color={contentColor}>
          {currentPortfolioDesc.split(".")[0] +
            ". " +
            currentPortfolioDesc.split(".")[1] +
            "..."}
        </Text>
      </VStack>
    </TabPanel>
  );
};

export default YxTabPanel;
