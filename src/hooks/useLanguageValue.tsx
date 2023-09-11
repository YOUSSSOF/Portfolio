import { useYxStore } from "../store";

const useLanguageValue = (faVal: string, enVal: string) => {
  const { textDirection } = useYxStore();
  return textDirection == "rtl" ? faVal : enVal;
};

export default useLanguageValue;
