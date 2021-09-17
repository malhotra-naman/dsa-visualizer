import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 7.5px;
  height: 50px;
  padding: 5 10px;
`;

export const Content = styled.div`
  position: relative;
  max-width: 100%;
  width: 100%;
  height: 55px;
  background: #eeeeee;
  margin: 0 auto;
  border-radius: 40px;
  color: white;
  img {
    position: absolute;
    left: 15px;
    top: 14px;
    width: 30px;
    @media screen and (max-width: 720px) {
      left: 14px;
      top: 13px;
      width: 26px;
    }
  }
  overflow-x: hidden;
  input {
    font-size: var(--fontBig);
    position: absolute;
    left: 0;
    margin: 8px 0;
    padding: 0 0 0 60px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: wheat;
    :focus {
      outline: none;
    }
    @media screen and (max-width: 720px) {
      font-size: var(--fontMed);
    }
  }
`;
