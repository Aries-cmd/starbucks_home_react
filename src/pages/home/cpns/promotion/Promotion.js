import React, { memo } from "react";
import { PromotionWrapper } from "./style";

const Promotion = memo(() => {
  return (
    <PromotionWrapper>
      <div>
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/tmall-2020-06-29-zh.jpg" />
      </div>
      <div>
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/starbucks-design-studio-web-china.jpg" />
      </div>
      <div>
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/images/pages/homepage-career-cn.jpg" />
      </div>
    </PromotionWrapper>
  );
});

export default Promotion;
