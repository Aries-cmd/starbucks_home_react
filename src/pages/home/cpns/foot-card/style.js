import styled from "styled-components";

export const FootCardWrapper = styled.div`
  height: 420px;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;

  .foot-text {
    text-align: center;
    line-height: 30px;
    h1 {
      font-weight: 500;
    }

    p {
      color: #6f6f6f;
    }

    margin-top: 30px;
    margin-bottom: 20px;
  }

  .card {
    width: 100%;
    display: flex;
    justify-content: space-evenly;
  }

  .foot-card {
    width: 250px;
    height: 225px;
    position: relative;
    transition: all 0.5s;
    :hover {
      transform: translate(0, -10px);
    }

    img {
      width: 250px;
      height: 168px;
    }

    .meta {
      transform: translate(0, -10px);
    }

    span {
      display: block;
      color: #fff;
      background-color: #c2a661;
      width: 81px;
      height: 33px;
      text-align: center;
      line-height: 33px;
      position: absolute;
      left: -1px;
      top: 5px;
    }
  }

  .foot-text {
    color: #666666;
    img {
      width: 10px;
      height: 10px;
    }
  }
`;
