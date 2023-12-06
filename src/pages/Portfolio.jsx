import React from "react";
import img1 from "../images/coding.png";
function Portfolio() {
  return (
    <>
      <h1>My Work</h1>
      <section>
        <div className="work">
          <ul className="projects">
            <li>
              <h3>Tech Blog</h3>
              <a href="https://mvctechblog124-c97290ab27bd.herokuapp.com/">
                <img src={img1} className="img1" />
              </a>
            </li>
            <li>
              <a href="https://github.com/FranklinBrad/MVC-blog.git">
                Link To Repository
              </a>
            </li>
            <li>
              <h3>Note Taker</h3>
              <a href="https://note-taker12543-19467088c2ec.herokuapp.com/">
                <img src={img1} className="img1" />
              </a>
            </li>
            <li>
              <a href="https://github.com/FranklinBrad/Note-Taker-homework.git">
                Link To Repository
              </a>
            </li>
            <li>
              <h3>E-Commerse Site</h3>
              <a href="https://github.com/FranklinBrad/e-commerce-site#readme">
                <img src={img1} className="img1" />
              </a>
            </li>
            <li>
              <a href="https://github.com/FranklinBrad/e-commerce-site#readme">
                Link To Repository
              </a>
            </li>
            <li>
              <h3>Note Taker PWA</h3>
              <a href="https://jate-pwa19-3f32060688f0.herokuapp.com/Links to an external site.">
                <img src={img1} className="img1" />
              </a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/FranklinBrad/19-PWA.git">
                Link To Repository
              </a>
            </li>
            <li>
              <h3>Logo Generator</h3>
              <a href="https://github.com/FranklinBrad/Logo-Generator.git">
                <img src={img1} className="img1" />
              </a>
            </li>
            <li>
              <a href="https://github.com/FranklinBrad/Logo-Generator.git">
                Link To Repository
              </a>
            </li>
            <li>
              <h3>Weather App</h3>
              <a href="https://franklinbrad.github.io/Weather-App/Links to an external site.">
                <img src={img1} className="img1" />
              </a>
            </li>
            <li>
              <a href="https://github.com/FranklinBrad/Weather-App.gitLinks to an external site.">
                Link To Repository
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
