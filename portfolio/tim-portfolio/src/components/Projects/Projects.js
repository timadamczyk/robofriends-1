import React, { Component } from "react";

import face from './face.png';
import mandm from './mandm.png';
import tim from './tim.png';
import welcome from './welcome.png';


class Projects extends Component {
    render() {
        return(
            <div >
            <article className="cf ph3 ph5-ns pv5 "> 
             <header className="fn fl-ns w-50-ns pr4-ns">
            <h1 className="mb3 mt0 lh-title">Projects</h1>
            <time className="f6 ttu tracked gray">Web Developement Projects</time>
            </header>
             </article>
                <main className="mw6 center">
          <article>
          
            <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="https://facespaceplace.herokuapp.com/">
              <div className="dtc w3">
                <img alt="face" src={face} className="db w-100"/>
              </div>
              <div className="dtc v-top pl2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">FaceSpacePlace</h1>
                <h2 className="f6 fw4 mt2 mb0 black-60">a face detection app using the Clarifai API</h2>
                <h2 className="f6 fw4 mt2 mb0 black-60">React, Node, Express,and PostgreSQL</h2>
        
              </div>
            </a>
          </article>
          <article>
            <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="http://marthaandmary.net/">
              <div className="dtc w3">
                <img alt= "mm" src={mandm} className="db w-100"/>
              </div>
              <div className="dtc v-top pl2">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">Martha + Mary</h1>
              <h2 className="f6 fw4 mt2 mb0 black-60">an easy to edit commerical website</h2>
              <h2 className="f6 fw4 mt2 mb0 black-60">Squarespace, HTML, and CSS</h2>
        
            </div>
            </a>
          </article>
          <article>
            <a className="link dt w-100 bb b--black-10 pb2 mt2 dim blue" href="http://welcomediner.net/">
              <div className="dtc w3">
                <img alt= "welcome" src={welcome} className="db w-100"/>
              </div>
              <div className="dtc v-top pl2">
                <h1 className="f6 f5-ns fw6 lh-title black mv0">Welcome Diner</h1>
                <h2 className="f6 fw4 mt2 mb0 black-60">an easy to edit website for a local resturant</h2>
                <h2 className="f6 fw4 mt2 mb0 black-60">Squarespace, HTML, and CSS</h2>
        
              </div>
            </a>
          </article>
          <article className="mt2 pb4">
            <a className="link dt w-100 bb b--black-10 dim blue" href="https://timadamczyk.herokuapp.com/">
              <div className="dtc w3">
                <img alt= "tim" src={tim} className="db w-100"/>
              </div>
              <div className="dtc v-top pl2">
              <h1 className="f6 f5-ns fw6 lh-title black mv0">TimAdamczyk</h1>
              <h2 className="f6 fw4 mt2 mb0 black-60">a simple portfolio website</h2>
              <h2 className="f6 fw4 mt2 mb0 black-60">React, and Node</h2>
        
            </div>
            </a>
          </article>
        </main>
        </div> 
        
        
        );
    }}

  export default Projects;