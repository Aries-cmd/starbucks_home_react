import React, { memo } from "react";
import { FootCardWrapper } from "./style";
import { Card } from "antd";

const { Meta } = Card;

const FootCard = memo(() => {
  return (
    <FootCardWrapper>
      <div className="foot-text">
        <h1>1912 派克街 | 咖啡星讲堂</h1>
        <p>了解更多星巴克咖啡文化</p>
      </div>
      <div className="card">
        <Card
          className="foot-card"
          hoverable
          cover={
            <img
              alt="example"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
            />
          }
        >
          <Meta title="咖啡的起源与种植" className="meta" />
          <span>咖啡知识</span>
        </Card>
        <Card
          className="foot-card"
          hoverable
          cover={
            <img
              alt="example"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
            />
          }
        >
          <Meta title="咖啡的起源与种植" className="meta" />
          <span>咖啡知识</span>
        </Card>
        <Card
          className="foot-card"
          hoverable
          cover={
            <img
              alt="example"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
            />
          }
        >
          <Meta title="咖啡的起源与种植" className="meta" />
          <span>咖啡知识</span>
        </Card>
        <Card
          className="foot-card"
          hoverable
          cover={
            <img
              alt="example"
              src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/coffeehouse-coffee-cultivation-kv.jpg"
            />
          }
        >
          <Meta title="咖啡的起源与种植" className="meta" />
          <span>咖啡知识</span>
        </Card>
      </div>
      <div className="foot-text">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/icpicon.png" />
        <span>沪公网安备31010402000253号 | 沪ICP备17003747号</span>
      </div>
    </FootCardWrapper>
  );
});

export default FootCard;
