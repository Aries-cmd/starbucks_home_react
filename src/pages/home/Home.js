import React, { memo } from "react";
import CarouselHome from "../../components/carousel/Carousel";
import FootCard from "./cpns/foot-card/FootCard";
import ProgramMsr from "./cpns/program-msr/ProgramMsr";
import Promotion from "./cpns/promotion/Promotion";
import TmallCenter from "./cpns/tmall/TmallCenter";

const Home = memo(() => {
  return (
    <div>
      <CarouselHome />
      <Promotion />
      <ProgramMsr />
      <TmallCenter />
      <FootCard />
    </div>
  );
});

export default Home;
