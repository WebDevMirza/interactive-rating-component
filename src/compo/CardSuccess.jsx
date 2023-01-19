import "./card.css";
import PicThanks from "../assets/images/illustration-thank-you.svg";
import { useLocation } from "react-router-dom";
const CardSuccess = () => {
  const location = useLocation();
  const rate = location.state.ratePass.rate;
  return (
    <>
      <div className="container text-center">
        <div className="img-thanks">
          <img src={PicThanks} alt="" width={162} height={108} />
        </div>

        <p className="message">
          {rate == 0 ? "NO CHEATING! GO BACK AND GIVE RATING" : `You selected ${rate} out of 5`}
        </p>

        <h1>Thank you!</h1>
        <p>
          We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in
          touch!
        </p>
      </div>
    </>
  );
};

export default CardSuccess;
