import React, { memo } from "react";
import { TmallCenterWrapper } from "./style";

const TmallCenter = memo(() => {
  return (
    <TmallCenterWrapper>
      <div className="top-text">
        <h1>星巴克精选</h1>
        <p>在星巴克天猫旗舰店发现更多咖啡心意</p>
      </div>
      <div className="card">
        <div className="card-item">
          <div>
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png" />
            <p>会员星礼包</p>
            <p>
              星享卡新升级
              <br />
              更多心意好礼
            </p>
            <a>了解更多 &gt;</a>
          </div>
        </div>
        <div className="card-item">
          <div>
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png" />
            <p>会员星礼包</p>
            <p>
              星享卡新升级
              <br />
              更多心意好礼
            </p>
            <a>了解更多 &gt;</a>
          </div>
        </div>
        <div className="card-item">
          <div>
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png" />
            <p>会员星礼包</p>
            <p>
              星享卡新升级
              <br />
              更多心意好礼
            </p>
            <a>了解更多 &gt;</a>
          </div>
        </div>
        <div className="card-item">
          <div>
            <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/homepage/tmall-card-01-update.png" />
            <p>会员星礼包</p>
            <p>
              星享卡新升级
              <br />
              更多心意好礼
            </p>
            <a>了解更多 &gt;</a>
          </div>
        </div>
      </div>
    </TmallCenterWrapper>
  );
});

export default TmallCenter;
