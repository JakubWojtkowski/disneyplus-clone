import React from "react";
import { styled } from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="/images/bao.jpg" alt=""></img>
      </Background>

      <Title>
        <img src="/images/bao-logo.png" alt="" />
      </Title>

      <Controls>
        <PlayBtn>
          <img src="/images/play-icon-black.png" alt="" />
          <span>PLAY</span>
        </PlayBtn>
        <TrailerBtn>
          <img src="/images/play-icon-white.png" alt="" />
          <span>TRAILER</span>
        </TrailerBtn>
        <AddBtn>
          <span>+</span>
        </AddBtn>
        <GroupWatchBtn>
          <img src="/images/group-icon.png" alt="" />
        </GroupWatchBtn>
      </Controls>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: -1;
  opacity: 0.8;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Title = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
`;

const PlayBtn = styled.button`
  display: flex;
  align-items: center;
  border-radius: 4px;
  font-size: 15px;
  padding: 0 24px;
  margin-right: 22px;
  height: 56px;
  background: rgb(249, 249, 249);
  letter-spacing: 1.8px;
  cursor: pointer;
  border: none;

  &:hover {
    background: rgb(199, 199, 199);
  }
`;

const TrailerBtn = styled(PlayBtn)`
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid rgb(249, 249, 249);
  color: rgb(249, 249, 249);
`;

const AddBtn = styled.button`
  border-radius: 50%;
  width: 44px;
  height: 44px;
  display: flex;
  justify-content: center;
  border: 2px solid #fff;
  background: rgba(0, 0, 0, 0.6);
  margin-right: 16px;
  cursor: pointer;

  span {
    font-size: 30px;
    color: #fff;
  }
`;

const GroupWatchBtn = styled(AddBtn)`
  background: rgba(0, 0, 0);
`;
