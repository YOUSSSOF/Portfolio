import { Drawer, DrawerBody, DrawerContent } from "@chakra-ui/react";
import YxSideBar from "./YxSideBar";
import { useYxStore } from "../../store";

const YxDrawer = () => {
  const { showDrawer, setShowDrawer, textDirection } = useYxStore();

  return (
    <Drawer
      isOpen={showDrawer}
      placement={textDirection == "rtl" ? "right" : "left"}
      onClose={() => setShowDrawer(false)}
      isFullHeight={true}
    >
      <DrawerContent bg="transparent" dir={textDirection}>
        <DrawerBody p={0}>
          <YxSideBar />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default YxDrawer;
