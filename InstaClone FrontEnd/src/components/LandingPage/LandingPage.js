import landingImage from "../../images/insta.jpg";
import { Link } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <>
      <div className="landing">
        <div className="landing-image">
          <img src={landingImage} alt="landing"></img>
        </div>
        <div className="landing-actions">
          <div className="landing-text">10x Instaclone</div>
          <Link to="/PostView">
            <div className="forward">
              <button className="button">Enter</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
export default LandingPage;
