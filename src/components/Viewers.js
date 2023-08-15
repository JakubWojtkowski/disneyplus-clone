import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" alt="" />
        <video src="/videos/disney.mp4" type="video/mp4" autoPlay muted loop />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" alt="" />
        <video src="/videos/pixar.mp4" type="video/mp4" autoPlay muted loop />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" alt="" />
        <video src="/videos/marvel.mp4" type="video/mp4" autoPlay muted loop />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" alt="" />
        <video
          src="/videos/star-wars.mp4"
          type="video/mp4"
          autoPlay
          muted
          loop
        />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" alt="" />
        <video
          src="/videos/national-geo.mp4"
          type="video/mp4"
          autoPlay
          playsInline
          muted
          loop
        />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 30px;
  padding: 30px 0 26px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  grid-gap: 25px;

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`;

const Wrap = styled.div`
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: rgb(0 0 0 /69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border-radius: 10px;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  position: relative;
  background: rgba(0, 0, 0, 0.1);
  overflow: hidden;
  padding-top: 56.25%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    z-index: 1;
    opacity: 1;
  }

  video {
    width: 100%;
    height: 100%;
    position: absolute;
    object-fit: cover;
    top: 0px;
    opacity: 0;
    transition: all 250ms;
    z-index: 0;
  }

  &:hover {
    transform: scale(1.05);
    border-color: rgba(249, 249, 249, 0.7);
    box-shadow: rgb(0 0 0 /80%) 0px 40px 58px -16px,
      rgb(0 0 0 / 73%) 0px 30px 22px -10px;

    video {
      opacity: 1;
    }
  }
`;
