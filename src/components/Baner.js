import React from "react";
import { styled } from "styled-components";

function Baner() {
  return (
    <Container>
      <Content>
        <Heading>Watch the way you like</Heading>
        <Descritpion>
          The greatest stories - whenever and wherever you want.
        </Descritpion>
        <ImgTitle>
          <img src="/images/login-background2.jpg" alt="" />
        </ImgTitle>
        <BanerIcons>
          <BanerIcon>
            <img src="/images/baner-cinema.png" alt="baner icon" />
            <BanerIconTitle>Entertainment without borders</BanerIconTitle>
            <BanerIconsDesc>
              Thousands of hours of series, movies and productions.
            </BanerIconsDesc>
          </BanerIcon>
          <BanerIcon>
            <img src="/images/baner-desktop.png" alt="baner icon" />
            <BanerIconTitle>Available on your favorite devices</BanerIconTitle>
            <BanerIconsDesc>
              Watch on four screens at once on supported devices.
            </BanerIconsDesc>
          </BanerIcon>
          <BanerIcon>
            <img src="/images/baner-parents.png" alt="baner icon" />
            <BanerIconTitle>Easy-to-use parental controls</BanerIconTitle>
            <BanerIconsDesc>
              Stay safe with intuitive parental controls.
            </BanerIconsDesc>
          </BanerIcon>
        </BanerIcons>
      </Content>
    </Container>
  );
}

export default Baner;

const Container = styled.div`
  padding: 10vh 5vw;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Heading = styled.div`
  color: rgb(249, 249, 249);
  font-size: clamp(1.75rem, 5vw, 2.75rem);
  min-height: 20px;
  margin-top: 20px;
  text-align: center;
`;

const Descritpion = styled.div`
  color: rgba(249, 249, 249, 0.7);
  margin-top: 20px;
  font-size: clamp(0.75rem, 2.5vw, 1rem);
  text-align: center;
`;

const ImgTitle = styled.div`
  img {
    width: 100%;
  }
`;

const BanerIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
  gap: 25px;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const BanerIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 15px;

  img {
    width: 100%;
  }
`;

const BanerIconTitle = styled.h3`
  color: rgb(249, 249, 249);
`;

const BanerIconsDesc = styled.p`
  color: rgba(249, 249, 249, 0.7);
`;
