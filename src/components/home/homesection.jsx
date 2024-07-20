import React from 'react';
import GameCard from './gamecard'; 

function HomeSection() {
  return (
    <div>
      <div className="largeContainer">
        <h1>Featured Games</h1>
        <button className="slide prev"><i className="icon">prev</i></button>
        <div className="container">
          <GameCard />
        </div>
        <button className="slide next"><i className="icon">next</i></button>
      </div>
      <div className="largeContainer">
        <h1>Trending Games</h1>
        <button className="slide prev"><i className="icon">prev</i></button>
        <div className="container">
          <GameCard />
        </div>
        <button className="slide next"><i className="icon">next</i></button>
      </div>
      <div className="largeContainer">
        <h1>New Games</h1>
        <button className="slide prev"><i className="icon">prev</i></button>
        <div className="container">
          <GameCard />
        </div>
        <button className="slide next"><i className="icon">next</i></button>
      </div>
      <div className="largeContainer">
        <h1>Soon To Release Games</h1>
        <button className="slide prev"><i className="icon">prev</i></button>
        <div className="container">
          <GameCard />
        </div>
        <button className="slide next"><i className="icon">next</i></button>
      </div>
    </div>
  );
}

export default HomeSection;