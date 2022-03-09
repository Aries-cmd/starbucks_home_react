import React, { memo } from "react";
import LoginIcon from "../../../../components/login-icon/LoginIcon";
import { ContentCpn1Wrapper } from "./style";

const ContentCpn1 = memo(() => {
  return (
    <ContentCpn1Wrapper>
      <h2>心情惬意，来杯咖啡吧 ☕</h2>
      <LoginIcon />
    </ContentCpn1Wrapper>
  );
});

export default ContentCpn1;
