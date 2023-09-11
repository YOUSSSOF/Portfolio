import { Image, Link } from "@chakra-ui/react";
import logo from "../../assets/vectors/logo.svg";

const YxLogo = () => {
  return (
    <Link href={"//" + window.location.host}>
      <Image src={logo} height="2em" width="4em" />
    </Link>
  );
};

export default YxLogo;
