import React, { memo, useReducer } from "react";
import { SiderMenuWrapper } from "./style";
import Avatar from "./cpns/avatar/Avatar";
import HeaderCenter from "./cpns/header-center/HeaderCenter";
import HeaderIcon from "./cpns/header-icon/HeaderIcon";
import ContentCpn1 from "./cpns/content-cpn1/ContentCpn1";
import ContentCpn2 from "./cpns/content-cpn2/ContentCpn2";
import { toggleMenuContent } from "./cpns/reducer/ToggleMenuContent";
import { Animated } from "react-animated-css";

const SiderMenu = memo(() => {
  const [state, dispatch] = useReducer(toggleMenuContent, { key: true });

  return (
    <SiderMenuWrapper>
      <div className="sider-header">
        <div>
          <Avatar />
          <Animated
            animationIn="bounceIn"
            isVisible={true}
            style={{ display: state.key ? "block" : "none" }}
          >
            <HeaderCenter />
          </Animated>
        </div>
        <div>
          <HeaderIcon toogleContent={toogleContent} />
        </div>
      </div>
      <div
        className="sider-content1"
        style={{ display: state.key ? "block" : "none" }}
      >
        <Animated animationIn="bounceIn" isVisible={true}>
          <ContentCpn1 />
        </Animated>
      </div>
      <div
        className="sider-content2"
        style={{ display: state.key ? "none" : "block" }}
      >
        <Animated animationIn="bounceIn" isVisible={true}>
          <ContentCpn2 />
        </Animated>
      </div>
    </SiderMenuWrapper>
  );

  function toogleContent() {
    dispatch({ type: "toggleMenuContent" });
  }
});

export default SiderMenu;
