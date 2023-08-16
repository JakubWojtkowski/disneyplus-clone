import React from "react";
import { styled } from "styled-components";
import Baner from "./Baner";

function Login() {
  return (
    <Main>
      <Container>
        <Content>
          <ContentlogoOne src="/images/cta-logo-one.svg" alt="" />
          <SingUpBtn>GET ALL THERE</SingUpBtn>
          <Description>
            Get Premier Access to Raya and the Last Dragon for an additional fee
            with a Disney+ subscription. As of 03/26/23, the price of Disney+
            and The Disney Bundle will increase by $1.
          </Description>
          <ContentlogoTwo src="/images/cta-logo-two.png" alt="cta logos" />
        </Content>
        <DownArrow src="/images/down-arrow.svg" alt="down arrow" />
      </Container>
      <Baner />
    </Main>
  );
}

export default Login;

const Main = styled.div``;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: url("/images/login-background.jpg");
    background-position: top;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
    opacity: 0.75;
  }
`;

const Content = styled.div`
  max-width: 650px;
  width: 70%;
  padding: 80px 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const ContentlogoOne = styled.img``;

const SingUpBtn = styled.a`
  width: 100%;
  background-color: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 17px 0;
  color: #f9f9f9;
  border-radius: 4px;
  cursor: pointer;
  font-size: 18px;
  transition: all 250ms;
  letter-spacing: 1.5px;
  margin-top: 8px;
  margin-bottom: 12px;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.div`
  font-size: 11px;
  line-height: 1.5;
  letter-spacing: 1.5px;
  text-align: center;
`;

const ContentlogoTwo = styled.img`
  width: 90%;
`;

const DownArrow = styled.img`
  height: 5vh;
  margin-top: 25px;
  opacity: 0.4;
  cursor: pointer;
  animation: bounce 1.75s infinite;
  transition: all 250ms;

  @keyframes bounce {
    0%,
    20%,
    50%,
    80%,
    100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-7px);
    }
    60% {
      transform: translateY(-3.5px);
    }
  }

  &:hover {
    opacity: 1;
  }
`;
