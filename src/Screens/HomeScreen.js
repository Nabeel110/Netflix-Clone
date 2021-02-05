import React from "react";
import "./HomeScreen.css";
import Nav from "../Components/Nav";
import Banner from "../Components/Banner";
import requests from "../Request";
import Row from "../Components/Row";
import Footer from "../Components/Footer";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* Nav */}
      <Nav />

      {/* Banner */}
      <Banner />

      {/* Row */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Documantaries" fetchURL={requests.fetchDocumantaries} />

      {/* footer */}
      <Footer />
    </div>
  );
};

export default HomeScreen;
