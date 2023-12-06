import Resume1 from "../images/image0.jpeg";
import Button from "react-bootstrap/Button";
function Resume() {
  return (
    <>
      <div className="reshead">
        <h1>My Resume</h1>
      </div>
      <div className="resdoc">
        <img className="resumepic" src={Resume1}></img>
      </div>
      <div className="download">
        <a href={Resume1} download="resume">
          <Button variant="secondary">Download Resume</Button>{" "}
        </a>
      </div>
    </>
  );
}

export default Resume;
