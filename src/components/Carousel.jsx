import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
  let [index, setIndex] = useState(0);
  console.log(images);

  function moveBack() {
    setIndex((index) => (index + 2) % 3);
  }

  function moveFront() {
    setIndex((index) => (index + 1) % 3);
  }

  return (
    <>
      <div className="container">
        <button onClick={() => moveBack()} className="two">
          <ArrowBackIosIcon />
        </button>
        <div>
          <img src={images[index].img} alt="" />
          <h2>{images[index].title}</h2>
          <h5>{images[index].subtitle}</h5>
        </div>

        <button onClick={() => moveFront()} className="one">
          <ArrowForwardIosIcon />
        </button>
      </div>
    </>
  );
}

export default Carousel;
