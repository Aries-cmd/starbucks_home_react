import React, { memo } from "react";
import { AppWrapper } from "./style";
import { Layout } from "antd";
import SiderMenu from "../pages/sider/SiderMenu";
import Router from "../router";
const { Sider, Content } = Layout;

const App = memo(() => {
  return (
    <AppWrapper>
      <Layout style={{ height: "100vh" }}>
        <Sider className="app-sider" width={474}>
          <SiderMenu />
        </Sider>
        <Content className="app-content">
          {Router()}
        </Content>
      </Layout>
    </AppWrapper>
  );
});

export default App;