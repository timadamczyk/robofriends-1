import React , {Component} from 'react';

class Navigation extends Component {
render () {
return( 
  <nav className="pa3 pa4-ns">
        <p 
     
        className="link dim black b f6 f5-ns dib mr3" 
        href="#" 
        title="Home">
        Tim Adamczyk</p>
        <a
   
        className="link dim gray    f6 f5-ns dib mr3" 
        href="#" 
        title="About">
        About</a>
        <p 
        className="link dim gray    f6 f5-ns dib mr3" 
        href="#" 
        title="Store">
        Projects</p>
      </nav>
    
  );

} 
}

export default Navigation; 