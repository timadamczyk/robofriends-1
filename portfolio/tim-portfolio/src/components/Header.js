import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
    render() {
  return (
      <ul className="pa3 pa4-ns" >

<li className="link dim black b f6 f5-ns dib mr3" >
     Tim Adamczyk</li>
        <li className="link dim gray    f6 f5-ns dib mr3" >
          <Link to="/projects">Projects</Link>
        </li>
        <li className="link dim gray    f6 f5-ns dib mr3">
          <Link to="/about">About</Link>
        </li>
      </ul>
    );
    }
  
  }
  export default Header;