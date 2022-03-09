import React, { memo } from "react";
import { Icon } from "@ricons/utils";
import { PersonCircle } from "@ricons/ionicons5";
import { LoginIconWrapper } from "./style";

const LoginIcon = memo(() => {
  return (
    <LoginIconWrapper>
      <div>
        <Icon size={30}>
          <PersonCircle />
        </Icon>
        <span>登录</span>
      </div>
      <button>注册</button>
    </LoginIconWrapper>
  );
});

export default LoginIcon;
