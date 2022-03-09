import React, { memo, useReducer } from "react";
import { Icon } from "@ricons/utils";
import { Menu, Close } from "@ricons/ionicons5";
import { toggleMenuContent } from "../reducer/ToggleMenuContent";

const HeaderIcon = memo((props) => {

  const [state, dispatch] = useReducer(toggleMenuContent, {key: true})

  return (
    <div onClick={() => toggleClick()}>
      { state.key ? <Icon size={30}>
        <Menu />
      </Icon> : <Icon size={30}>
        <Close />
      </Icon> } 
    </div>
  );

  function toggleClick() {
    dispatch({type: "toggleMenuContent"})
    props.toogleContent()
  }
});

export default HeaderIcon;
