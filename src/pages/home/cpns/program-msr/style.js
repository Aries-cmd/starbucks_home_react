import styled from "styled-components"

export const ProgramMsrWrapper = styled.div`
  height: 249px;
  background-color: #fff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .program-msr-item1 {
    p {
      color: #707070;
      line-height: 30px;
      margin-bottom: 30px;

      a {
        color: #c2a661;
      }
    }
  }

  .program-msr-item2 {
    img {
      width: 236px;
      height: 72px;
    }
  }

  button {
    width: 70px;
    height: 39px;
    color: #00a862;
    border: 1px solid #00a862;
    background-color: #fff;
    border-radius: 20px;
    margin-right: 10px;
    cursor: pointer;
  }
`