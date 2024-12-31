import React from "react";

import CmsBanner from "../../banner/CmsBanner";

import { Button } from "../ui/button";
import { CarouselDemo } from "@/crousel/CarouselDemo";
import SmallBanner from "@/banner/SmallBanner";

function Home() {
  return (
    <>
      <SmallBanner />
      <CarouselDemo />
      <Button />
      <CmsBanner />
    </>
  );
}

export default Home;
