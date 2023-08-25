import React from "react";
import { styled } from "styled-components";

function DisneyBaner() {
  return (
    <Container id="disney-baner">
      <BackgroundImage src="/images/login-background1.jpg" alt="" />
      <TextContainer>
        <HeadingText>Tylko w Disney+</HeadingText>
        <Description>
          Hity filmowe, seriale oraz produkcje oryginalne, których nie
          znajdziesz w innych usługach streamingowych.
        </Description>
        <Spacer />
      </TextContainer>
    </Container>
  );
}

export default DisneyBaner;

const Container = styled.div`
  padding: 0;
  display: flex;
  position: relative;

  @media only screen and (max-width: 768px) {
    flex-direction: column-reverse;
    padding: 10vw 5vw;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;

  @media only screen and (min-width: 768px) {
    position: absolute;
    left: 0;
    padding-left: 5vw;
    top: 0;
    bottom: 0;
    width: 35%;
    text-align: left;
  }
`;

const HeadingText = styled.div`
  color: rgb(249, 249, 249);
  font-size: clamp(1.75rem, 2.5vw, 2.75rem);
  margin-bottom: 30px;
`;
const Description = styled.div`
  color: rgb(192, 192, 192);
  line-height: 1.75;
  margin-bottom: 20px;
`;

const Spacer = styled.div`
  margin-bottom: 100px;
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
`;
