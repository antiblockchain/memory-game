import React from "react";
import { useState } from "react";
import Image from "./image";

const images = [
  { src: "./img/img1.jpg" },
  { src: "./img/img2.jpg" },
  { src: "./img/img3.jpg" },
  { src: "./img/img4.jpg" },
  { src: "./img/img5.jpg" },
  { src: "./img/img6.jpg" },
];

function Memory() {
  const [imgs, setImg] = useState([]);

  const [turns, setTurns] = useState(0);
  const [gameStarted, setGameStarted] = useState(0);
  const [message, setMessage] = useState("Press to start.");
  const [highscore, setHighscore] = useState(0);

  const randomizeImg = () => {
    if (gameStarted === 0) {
      console.log("moved to randomize turns 0");
      const randomizedImg = [...images]
        .sort(() => Math.random() - 0.5)
        .map((img) => ({ ...img, id: Math.random(), isClicked: false }));
      setGameStarted(1);
      setMessage("Game started");

      setImg(randomizedImg);
    } else if (gameStarted > 0) {
      console.log("moved to randomize turns not 0");
      setImg(imgs.sort(() => Math.random() - 0.5));
    }
  };

  const handleChoice = (img) => {
    console.log("Moved to choice");
    console.log(img.isClicked);
    if (img.isClicked === true) {
      setTurns(0);
      setGameStarted(0);
      console.log("Lost!");
      setMessage("Lost!");
      setImg([]);
    } else if (img.isClicked === false) {
      setTurns(turns + 1);
      img.isClicked = true;
      randomizeImg();
      checkHighscore();
    }
    console.log(img.isClicked);
  };
  const checkHighscore = () => {
    if (turns >= highscore) {
      setHighscore(turns + 1);
    }
  };

  return (
    <div className="game-container">
      <h1>{message}</h1>
      <h3>Highscore: {highscore}</h3>
      <button onClick={randomizeImg}>Start Game</button>
      <h1>{turns}</h1>
      <div className="img-grid">
        {imgs.map((img) => (
          <Image
            key={img.id}
            img={img}
            handleChoice={handleChoice}
            isClicked={img.isClicked}
          ></Image>
        ))}
      </div>
    </div>
  );
}

export default Memory;
