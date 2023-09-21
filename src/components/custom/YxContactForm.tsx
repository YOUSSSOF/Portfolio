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
import { useState } from "react";
import { useYxStore } from "../../store";

const YxContactForm = () => {
  const toast = useToast();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const { setShowLoader } = useYxStore();
  const headText = useLanguageValue("باهام در تماس باش", "");
  const subText = useLanguageValue(
    "اگه صحبتی هست میتونی از طریق این فرم بهم ایمیل بدی، اگه هم از ایمیل خوشت نمیاد، شماره م همونجاست، زنگ بزن بهم یا پیامک بده:)",
    "you can email me with this form and if you're not a fan of email, my phone number is right there, call or text me:)"
  );
  const buttonText = useLanguageValue("ارسال", "Send");
  const toastSuccessTitle = useLanguageValue("! ممنون", "thank you!");
  const toastSuccessDesc = useLanguageValue(
    ". پیام شما با موفقیت ارسال شد",
    "message delivered successfully."
  );
  const toastErrorTitle = useLanguageValue("! خطا", "error!");
  const toastErrorDesc = useLanguageValue(
    ".مشکلی پیش آمده، لطفا بعدا دوباره تلاش کنید",
    "There was a problem, please try again later."
  );
  const toastEmptyTitle = useLanguageValue("! خطا", "error!");
  const toastEmptyDesc = useLanguageValue(
    ".لطفا تمام فیلد ها را پر کنید",
    "please fill all fields."
  );
  function isStringEmpty(str: string) {
    return /^\s*$/.test(str);
  }
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
            <YxField
              faPlaceholder="نام"
              enPlaceholder="name"
              setValue={setName}
              value={name}
            />
            <YxField
              faPlaceholder="ایمیل"
              enPlaceholder="email"
              setValue={setEmail}
              value={email}
            />
          </HStack>
          <VStack width="100%" gap={0}>
            <YxField
              faPlaceholder="موضوع"
              enPlaceholder="subject"
              setValue={setSubject}
              value={subject}
            />
            <YxField
              multiline={true}
              faPlaceholder="پیام"
              enPlaceholder="message"
              height="30vh"
              setValue={setMessage}
              value={message}
            />
          </VStack>
          <Button
            width="100%"
            borderRadius={0}
            bg="rgba(60, 48, 139, 0.70);"
            border="1px solid #3624A"
            color="#FFF"
            onClick={() => {
              if (
                isStringEmpty(name) ||
                isStringEmpty(subject) ||
                isStringEmpty(email) ||
                isStringEmpty(message)
              ) {
                toast({
                  title: toastEmptyTitle,
                  description: toastEmptyDesc,
                  isClosable: true,
                  colorScheme: "red",
                });
                return;
              }
              setShowLoader(true);
              const requestOptions = {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ name, subject, email, message }),
              };
              console.log(requestOptions.body);

              void fetch(
                "https://portfolio-emails-server.iran.liara.run/send-email",
                requestOptions
              )
                .then(({ status }) => {
                  if (status == 200) {
                    toast({
                      title: toastSuccessTitle,
                      description: toastSuccessDesc,
                      isClosable: true,
                      colorScheme: "green",
                    });
                    setMessage("");
                    setName("");
                    setSubject("");
                    setEmail("");
                  } else {
                    toast({
                      title: toastErrorTitle,
                      description: toastErrorDesc,
                      isClosable: true,
                      colorScheme: "red",
                    });
                  }
                })
                .catch(() => {
                  toast({
                    title: toastErrorTitle,
                    description: toastErrorDesc,
                    isClosable: true,
                    colorScheme: "red",
                  });
                })
                .finally(() => {
                  setShowLoader(false);
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
