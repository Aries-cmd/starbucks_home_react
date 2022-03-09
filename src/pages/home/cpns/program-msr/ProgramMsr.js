import React, { memo } from "react";
import { ProgramMsrWrapper } from "./style";

const ProgramMsr = memo(() => {
  return (
    <ProgramMsrWrapper>
      <div className="program-msr-item1">
        <h2>星享俱乐部</h2>
        <p>
          开启您的星享之旅，星星越多、会员等级越高、
          <br />
          好礼越丰富。
          <a>了解更多 ›</a>
        </p>
        <div>
          <button>注册</button>
          <button>登录</button>
        </div>
      </div>
      <div className="program-msr-item2">
        <img src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo-msr-20210601.svg" />
      </div>
    </ProgramMsrWrapper>
  );
});

export default ProgramMsr;
