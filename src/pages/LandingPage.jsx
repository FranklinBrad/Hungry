import React from "react"
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import me from "../images/me-photo.jpeg"


function AboutMe(){
    return (
        <>
       <h1 className="abtH">Franklin Bradley</h1>
   <div className="meimg">
   <img src={me} className="me" />
   </div>
    <p className="abtP">Hello my name is Franklin Bradley. I am 18 and based out of Minneapolis. I graduated from the University of Minnesota Full Stack Web Development Program and got my certificate in december of 2023.
        With this class I have found a passion for coding and am eagar to persue a career in Web Development. My main coding langauge is JavaScript but I'am willing to be agile and learn new coding languages and skills. Right now I have knowlage in JavaScript, HTML, CSS, Bootstrap, Node, Mysql, Mongo DB, and react. Please take a look at some of my work as well as my resume, and feel free to contact me if you have any questions!
    </p>
    <div className="logos">
    <a href="https://github.com/FranklinBrad">
    <FaGithub className="github" />
    </a>
    <a href="https://www.linkedin.com/in/franklin-bradley-520a8b286/">
    <FaLinkedin className="linkedin"/>
    </a>
    </div>
    </>
    );
}

export default AboutMe