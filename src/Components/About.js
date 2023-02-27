import React from "react";
import '../CSS/About.css'
function About() {
    return (
      <div className="About">
        <div className="SubHeading">
            <hr className="Line"/>
            <h2 className="AboutSubHeading">About</h2>
        </div>
        <div className="AboutContent">
        <div className="Profile">
            <p>Hi, I'm James Kim, a web developer with a passion for crafting elagant designs and solving complex problems. </p>
            <p>I have a wide range of experience witih programming languages such as HTML, CSS, JS. I am also aquainted with frameworks such as React.</p>
            <p>In addition to my technical skills, I am deeply passionate about creating visually stunning websites that not only look great and provide an excellent user experience.</p>
            <p>Let's work together to create a website that not only meets but exceeds your expectations.</p>
        </div>
        <div className="TechIcons">
            <div className="Row Row1">
                <div className="Icon">
                    <i class="devicon-html5-plain colored"></i>
                    <div className="IconName">HTML</div>
                </div>
                <div className="Icon">
                    <i class="devicon-css3-plain colored"></i>
                    <div className="IconName">CSS</div>
                </div>
                <div className="Icon">
                    <i class="devicon-javascript-plain colored"></i>
                    <div className="IconName">JAVASCRIPT</div>
                </div>
                <div className="Icon">
                    <i class="devicon-react-original colored"></i>
                    <div className="IconName">REACT</div>
                </div>
                <div className="Icon">
                    <i class="devicon-webpack-plain colored"></i>
                    <div className="IconName">WEBPACK</div>
                </div>
            </div>
            <div className="Row Row2">
                <div className="Icon">
                    <i class="devicon-jest-plain colored"></i>
                    <div className="IconName">JEST</div>
                </div>                
                <div className="Icon">
                    <i class="devicon-git-plain colored"></i>
                    <div className="IconName">GIT</div>
                </div>                
                <div className="Icon">
                    <i class="devicon-nodejs-plain colored"></i>
                    <div className="IconName">NODE</div>
                </div>                
                <div className="Icon">
                    <i class="devicon-firebase-plain colored"></i>
                    <div className="IconName">FIREBASE</div>
                </div>                
                <div className="Icon">
                    <i class="devicon-npm-original-wordmark colored"></i>
                    <div className="IconName">NPM</div>
                </div>
            </div>
        </div>
        </div>
        
      </div>
    );
  }
  
  export default About;
  