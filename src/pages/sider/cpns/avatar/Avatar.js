import React, { memo } from "react";
import { useNavigate } from "react-router-dom"
import { Avatar as AvatarSider } from "antd";

const Avatar = memo(() => {

  const navigate = useNavigate()

  return (
    <div onClick={() => navigate("/")} >
      <AvatarSider style={{width: "36px", height: "36px"}} src="https://www-static.chinacdn.starbucks.com.cn/prod/assets/images/logo.svg" />
    </div>
  );
});

export default Avatar;
