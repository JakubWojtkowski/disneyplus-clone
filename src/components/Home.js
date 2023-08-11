import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Viewers from "./Viewers";
import Movies from "./Movies";
import { db } from "../firebase";
import { collection, onSnapshot, doc, getDocs } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setMovies } from "../features/movie/movieSlice";

function Home() {
  async function queryCollection() {
    const moviesRef = collection(db, "movies");
    const movies = await getDocs(moviesRef);
    movies.forEach((movie) => {
      console.log(movie.data());
    });
  }

  useEffect(() => {
    queryCollection();
  }, []);

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
  overflow-x: hidden;

  &:before {
    background: url(/images/home-background.png) center center / cover no-repeat
      fixed;
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
  }
`;
