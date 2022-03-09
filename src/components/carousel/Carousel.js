import React, { memo, useRef } from "react";
import { Carousel } from "antd";
import { CarouselWrapper } from "./style";
import { Icon } from "@ricons/utils";
import { ChevronForward } from "@ricons/ionicons5";

const CarouselHome = memo(() => {

  const carouselRef = useRef()

  return (
    <CarouselWrapper>
      <Carousel autoplay ref={carouselRef} dots={false}>
        <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/club_upgrade/banner.jpg" />
        </div>
        <div>
          <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/featured/default_banner/banner1.png" />
        </div>
      </Carousel>
      <div className="icon" onClick={() => nextClick()}>
        <Icon size={50}>
          <ChevronForward />
        </Icon>
      </div>
    </CarouselWrapper>
  );

  function nextClick() {
    carouselRef.current.next()
  }
});

export default CarouselHome;
