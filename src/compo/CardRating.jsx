import "./card.css";
import IconStar from "../assets/images/icon-star.svg";
import { useState } from "react";
import { Link } from "react-router-dom";

const CardRating = () => {
  const [rate, setRate] = useState("0");

  function rateClicked(e) {
    if (rate != 0) {
      e.target.parentElement.children[0].classList.remove("rate-clicked");
      e.target.parentElement.children[1].classList.remove("rate-clicked");
      e.target.parentElement.children[2].classList.remove("rate-clicked");
      e.target.parentElement.children[3].classList.remove("rate-clicked");
      e.target.parentElement.children[4].classList.remove("rate-clicked");
    }
    e.target.classList.add("rate-clicked");

    setRate(() => {
      return e.target.textContent;
    });
  }

  return (
    <>
      <div className="container">
        <div className="icon">
          <img src={IconStar} alt="" />
        </div>

        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request. All feedback is appreciated to help us improve our
          offering!
        </p>

        <ul className="rate">
          <li onClick={rateClicked}>1</li>
          <li onClick={rateClicked}>2</li>
          <li onClick={rateClicked}>3</li>
          <li onClick={rateClicked}>4</li>
          <li onClick={rateClicked}>5</li>
        </ul>

        <div className="submit">
          <Link to="/interactive-rating-component/success/" state={{ ratePass: { rate } }}>
            Submit
          </Link>
        </div>
      </div>
    </>
  );
};

export default CardRating;
