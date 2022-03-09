import styled from "styled-components";

export const TmallCenterWrapper = styled.div`
  height: 416px;
  background-color: #f7f7f7;
  display: flex;
  flex-direction: column;
  align-items: center;

  .top-text {
    margin: 35px 0;
    margin-top: 45px;
    text-align: center;

    h1,p {
      line-height: 30px;
    }

    p {
      color: #6c6c6c;
    }
  }

  .card {
    display: flex;
  }

  .card-item {
    width: 162px;
    height: 197px;
    background-color: #fff;
    text-align: center;
    margin-right: 25px;
  }

  .card-item>div {
    transform: translate(0, -20px);
  }

  .card > div :nth-child(3) {
    color: #707070;
    line-height: 25px;
  }

  .card > div :nth-child(2) {
    font-weight: 700;
    font-size: 18px;
  }

  img {
    width: 101px;
    height: 72px;
  }

  a {
    color: #d8c599;
  }
`;
