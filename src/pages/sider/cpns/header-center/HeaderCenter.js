import React, { memo } from 'react'
import { HeaderCenterWrapper } from "./style"
import { useNavigate } from "react-router-dom"

const HeaderCenter = memo(() => {

  const navigate = useNavigate()

  return (
    <HeaderCenterWrapper>
      <span onClick={() => navigate("/store")}>门店</span>
      <span onClick={() => navigate("/account")}>我的账户</span>
      <span onClick={() => navigate("/menu")}>菜单</span>
    </HeaderCenterWrapper>
  )
})

export default HeaderCenter