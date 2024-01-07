 import Resume2 from "../images/resume2.png"
import Button from "react-bootstrap/Button";
function Resume() {
  return (
    <>
      <div className="reshead">
        <h1>My Resume</h1>
      </div>
      <div className="resdoc">
        <img className="resumepic" src={Resume2}></img>
      </div>
      <div className="download">
        <a href={Resume2} download="resume">
          <Button variant="secondary">Download Resume</Button>{" "}
        </a>
      </div>
    </>
  );
}

export default Resume;
