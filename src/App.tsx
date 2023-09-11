import { HStack, Show } from "@chakra-ui/react";
import { useYxStore } from "./store";
import YxNavBar from "./components/custom/YxNavBar";
import YxHome from "./components/screens/home/HomeScreen";
import YxSideBar from "./components/custom/YxSideBar";
import YxFooter from "./components/custom/YxFooter";
import { useEffect } from "react";

function App() {
  const { textDirection } = useYxStore();
  useEffect(() => {
    const title =
      textDirection == "rtl"
        ? "وبسایت رزومه یوسف هاشم زاده، برنامه نویس موبایل و وب اپلیکیشن"
        : "Yousof Hashemzadeh's portfolio website, mobile and web developer";
    document.title = title;
  }, [textDirection]);
  return (
    <div
      dir={textDirection}
      style={{
        WebkitUserSelect: "none",
        KhtmlUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none",
      }}
    >
      <Show below="lg">
        <YxNavBar />
      </Show>
      <HStack>
        <YxHome />
        <Show above="lg">
          <YxSideBar />
        </Show>
      </HStack>
      <YxFooter />
    </div>
  );
}

export default App;
