import { Box } from "@chakra-ui/react";
import HeroSection from "./sections/HeroSection";
import SkillSection from "./sections/SkillsSection";
import { useEffect, useRef } from "react";
import PortfoliosSection from "./sections/PortfoliosSection";
import EducationalExperienceSection from "./sections/EducationalExperienceSection";
import YxContactMe from "../../custom/YxContactMe";
import ContactMeSection from "./sections/ContactMeSection";
import { useYxStore } from "../../../store";
import { mobilePortfolios, webPortfolios } from "../../../data";
import laptop from "../../../assets/vectors/laptop.svg";

const YxHome = () => {
  const {
    setSelectedIndex,
    setShowPortfolioDrawer,
    setCurrentPortfolioDrawer,
    setCurrentPortfolioType,
    setTextDirection,
  } = useYxStore();
  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onScroll = () => {
    setTimeout(() => {
      if (scrollY < 600) {
        setSelectedIndex(1);
      } else if (scrollY < 1000) {
        setSelectedIndex(2);
      } else if (scrollY < 1550) {
        setSelectedIndex(3);
      } else if (scrollY < 2400) {
        setSelectedIndex(4);
      } else if (scrollY < 3500) {
        setSelectedIndex(6);
      }
    }, 1000);
  };
  useEffect(() => {
    if (window.location.href.includes("?portfolio")) {
      const portfolioId = Number(
        window.location.href.split("?")[1].split("=")[1].split("&")[0]
      );

      if (window.location.href.includes("&lang")) {
        const lang = window.location.href.split("&lang")[1].split("=")[1];
        if (lang == "rtl" || lang == "ltr") setTextDirection(lang);
      }

      if (portfolioId >= 1 && portfolioId <= mobilePortfolios.length) {
        setSelectedIndex(2);
        setCurrentPortfolioDrawer(
          mobilePortfolios.filter((movie) => movie.id == portfolioId)[0]
        );
        setCurrentPortfolioType("");
        document
          .getElementById("sec-4")
          ?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setShowPortfolioDrawer(true), 1000);
      } else if (
        portfolioId >= mobilePortfolios.length &&
        portfolioId <= mobilePortfolios.length + webPortfolios.length
      ) {
        setSelectedIndex(2);
        setCurrentPortfolioDrawer(
          webPortfolios.filter((movie) => movie.id == portfolioId)[0]
        );
        setCurrentPortfolioType(laptop);
        document
          .getElementById("sec-3")
          ?.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setShowPortfolioDrawer(true), 1000);
      }
    }
  }, [
    setCurrentPortfolioDrawer,
    setCurrentPortfolioType,
    setSelectedIndex,
    setShowPortfolioDrawer,
  ]);
  return (
    <Box>
      <HeroSection />
      <SkillSection />
      <PortfoliosSection />
      <YxContactMe />
      <EducationalExperienceSection />
      <ContactMeSection />
    </Box>
  );
};

export default YxHome;
