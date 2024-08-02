import { useState } from "react";
import HomeDesktop from "./HomeDesktop/HomeDesktop";
import HomeMobile from "./HomeMobile/HomeMobile";
import { useIsMobile } from "../../../shared/hooks/useIsMobile";


const Home = () => {
  const isMobile = useIsMobile();

  if (isMobile) {
    return <HomeMobile />;
  } else {
    return <HomeDesktop />;
  }
};


export default Home