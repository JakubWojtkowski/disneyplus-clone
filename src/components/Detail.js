import React, { useEffect, useState } from "react";
import { styled } from "styled-components";
import { useParams } from "react-router-dom";
import { db } from "../firebase";
import { collection, doc, getDoc } from "firebase/firestore";

function Detail() {
  const { id } = useParams();
  const [movie, setMovie] = useState();

  async function getMovieId() {
    const docRef = doc(db, "movies", id);
    const docSnap = await getDoc(docRef);

    docSnap.data() ? setMovie(docSnap.data()) : console.log("nie git");

    console.log("Movie is ", movie);
  }

  useEffect(() => {
    getMovieId();
  }, [id]);

  return (
    <Container>
      {movie && (
        <>
          <Background>
            <img src={movie.backgroundImg} alt=""></img>
          </Background>

          <ImgTitle>
            <img src="/images/bao-logo.png" alt="" />
          </ImgTitle>

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
          <Subtitle>{movie.subtitle}</Subtitle>
          <Description>{movie.description}</Description>
        </>
      )}
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

const ImgTitle = styled.div`
  height: 30vh;
  width: 35vw;
  min-height: 170px;
  min-width: 200px;
  margin-top: 60px;

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

const Subtitle = styled.div`
  color: rgb(249, 249, 249);
  font-size: 15px;
  min-height: 20px;
  margin-top: 20px;
`;
const Description = styled.div`
  color: rgb(249, 249, 249);
  line-height: 1.4;
  font-size: 20px;
  margin-top: 16px;
  max-width: 760px;
`;
