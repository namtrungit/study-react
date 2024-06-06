import styled from "styled-components";

export const DefaultFormStyled = styled.div`
  background-color: ${(props) => props.backgroundColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: auto;
  width: 30rem;
  height: 100vh;
`;

export const DefaultFormLineStyled = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  text-align: ${(props) => props.textAlign};
  .ant-typography {
    display: inline-block;
    width: 100%;
    text-align: left;
    &.label-checkbox {
      width: unset;
      margin-right: 0.4rem;
    }
  }
`;

export const DefaultFormButtonsGroupStyled = styled.div`
  .ant-btn {
    margin-left: 0.4rem;
  }
`;
