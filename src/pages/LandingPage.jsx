import Lottie from "lottie-react";
import animation1 from "../images/fork.json";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Recipe from "./Recipe";
export function HomePage() {
  return (
    <>
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "100px",
          }}
        >
          Hungry?
        </h1>
      </div>
      <div
        style={{
          height: "300px",
          width: "300px",
          justifyContent: "center",
          margin: "auto",
        }}
      >
        <Lottie animationData={animation1} loop={true} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Link to="/Recipe">
          <Button
            style={{
              backgroundColor: "teal",
              fontSize: "50px",
              borderColor: "teal",
            }}
            variant="primary"
          >
            Find A Recipe!
          </Button>
        </Link>
      </div>
    </>
  );
}

export default HomePage;