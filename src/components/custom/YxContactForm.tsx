import {
  Button,
  Center,
  HStack,
  Text,
  useToast,
  VStack,
} from "@chakra-ui/react";
import useLanguageValue from "../../hooks/useLanguageValue";
import YxField from "./YxField";

const YxContactForm = () => {
  const toast = useToast();

  const headText = useLanguageValue("باهام در تماس باش", "");
  const subText = useLanguageValue(
    "اگه صحبتی هست میتونی از طریق این فرم بهم ایمیل بدی، اگه هم از ایمیل خوشت نمیاد، شماره م همونجاست، زنگ بزن بهم یا پیامک بده:)",
    "you can email me with this form and if you're not a fan of email, my phone number is right there, call or text me:)"
  );
  const buttonText = useLanguageValue("ارسال", "Send");
  const toastTitle = useLanguageValue("! ممنون", "thank you!");
  const toastDesc = useLanguageValue(
    ". پیام شما با موفقیت ارسال شد",
    "message delivered successfully."
  );
  return (
    <Center>
      <VStack alignItems="start" width="80vw">
        <Text fontSize="1.8em" marginTop=".5em">
          {headText}
        </Text>
        <Text fontSize="14px" opacity={0.8} width="80%" marginTop=".3em">
          {subText}
        </Text>
        <VStack marginTop="1em" width="100%">
          <HStack width="100%">
            <YxField faPlaceholder="نام" enPlaceholder="name" />
            <YxField faPlaceholder="ایمیل" enPlaceholder="email" />
          </HStack>
          <VStack width="100%" gap={0}>
            <YxField faPlaceholder="موضوع" enPlaceholder="subject" />
            <YxField
              multiline={true}
              faPlaceholder="پیام"
              enPlaceholder="message"
              height="30vh"
            />
          </VStack>
          <Button
            width="100%"
            borderRadius={0}
            bg="rgba(60, 48, 139, 0.70);"
            border="1px solid #3624A"
            color="#FFF"
            onClick={() => {
              toast({
                title: toastTitle,
                description: toastDesc,
                isClosable: true,
                colorScheme: "purple",
              });
            }}
          >
            {buttonText}
          </Button>
        </VStack>
      </VStack>
    </Center>
  );
};

export default YxContactForm;
