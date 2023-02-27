import React from "react";
import '../CSS/Projects.css'
import battleship from './battleship.png'
function Projects() {
    return (
      <div className="Projects">
        <div className="SubHeading">
            <hr className="Line"/>
            <h2 className="ProjectsSubHeading">Projects</h2>
        </div>
        <div className="Projects">
            <div className="Project">
                <div className="ProjectPhoto">
                    <div className="ProjectName">Battleship</div>
                    <img src={battleship} alt = 'Not Available'></img>
                </div>
                <div className="ProjectInfo">
                    <div className="Description">A clone of Battleship created with Webpack. Works best on computers</div>
                    
                    <div className="Links">
                        <a className = 'Link Live' href = 'https://cocodadestroyer.github.io/dist/'>Live Site</a>
                        <a className = 'Link Repo' href = 'https://github.com/CocoDaDestroyer/cocodadestroyer.github.io'>Git Repo</a>
                    </div>
                </div>
            </div>
        </div>
        
      </div>
    );
  }
  
  export default Projects;
  