import { Link } from "react-router-dom";
import { FaCamera } from "react-icons/fa";
import "./GetWithHeader.css";

const GetWithHeader = (ChildrenComponent) => {
  return function withHeader() {
    return (
      <>
        <div className="container">
          <nav className="header">
            <section className="logo">
              <img src={require("../../images/header.png")} alt="logo" />
            </section>
            <section className="camera-icon">
              <Link to="/PostCard">
                <div className="fa-icon">
                  <FaCamera size="3em" style={{ color: "white" }} />
                </div>
              </Link>
            </section>
          </nav>
          <ChildrenComponent />
        </div>
      </>
    );
  };
};
export default GetWithHeader;
