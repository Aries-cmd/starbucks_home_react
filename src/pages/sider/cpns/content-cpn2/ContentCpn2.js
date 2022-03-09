import React, { memo } from "react";
import LoginIcon from "../../../../components/login-icon/LoginIcon";
import { ContentCpn2Wrapper } from "./style";

const ContentCpn2 = memo(() => {
  return (
    <ContentCpn2Wrapper>
      <div className="content-cpn2-item"> 
        <div>
          <a>门店</a>
        </div>
        <div>
          <a>星享俱乐部</a>
        </div>
        <div>
          <a>菜单</a>
        </div>
        <hr />
        <div>
          <a>星巴克移动应用</a>
        </div>
        <div>
          <a>星礼卡</a>
        </div>
        <div>
          <a>星巴克臻选™</a>
        </div>
        <div>
          <a>啡快™ － 在线点 到店取</a>
        </div>
        <div>
          <a>专星送™</a>
        </div>
        <div>
          <a>咖啡星讲堂</a>
        </div>
        <div>
          <a>上海烘焙工坊</a>
        </div>
        <div>
          <a>关于星巴克</a>
        </div>
        <div>
          <a>帮助中心</a>
        </div>
        <hr />
      </div>
      <div>
        <LoginIcon />
      </div>
    </ContentCpn2Wrapper>
  );
});

export default ContentCpn2;
