import { HStack, Show } from "@chakra-ui/react";
import { useYxStore } from "./store";
import YxNavBar from "./components/custom/YxNavBar";
import YxHome from "./components/screens/home/HomeScreen";
import YxSideBar from "./components/custom/YxSideBar";
import YxFooter from "./components/custom/YxFooter";
import { useEffect } from "react";
import YxLoader from "./components/custom/YxLoader";

function App() {
  const { textDirection, showLoader } = useYxStore();
  useEffect(() => {
    const title =
      textDirection == "rtl"
        ? "وبسایت رزومه یوسف هاشم زاده، برنامه نویس موبایل و وب اپلیکیشن"
        : "Yousof Hashemzadeh's portfolio website, mobile and web developer";
    document.title = title;
  }, [textDirection]);
  return (
    <>
      {showLoader ? <YxLoader /> : <></>}

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
    </>
  );
}

export default App;
