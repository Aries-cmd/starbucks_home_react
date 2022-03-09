import styled from "styled-components"

export const PromotionWrapper = styled.div`
  height: 261px;
  background-color: #f7f7f7;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  div {
    box-shadow: 0 0 2px #000;
    transition: all 0.5s;

    :hover {
      transform: translate(0, -10px);
      box-shadow: 0 0 5px #000;
    }
  }

  img {
    width: 337px;
    height: 213px;
    cursor: pointer;
  }
`