import React, { Component } from "react";

class About extends Component {
    render() {
        return(
            <article class="cf ph3 ph5-ns pv5">
            <header class="fn fl-ns w-50-ns pr4-ns">
              <h1 class="mb3 mt0 lh-title">About</h1>
              {/* <time class="f6 ttu tracked gray">feugiat in</time> */}
            </header>
            <div class="fn fl-ns w-50-ns">
              <p class="lh-copy measure mt4 mt0-ns">
              Tim Adamczyk is an artist and web developer based in Phoenix, born and raised in Chicago. His work is interdisciplinary, conceptual, and often in conversation with design or real-world economies. Tim received his Bachelor of Fine Arts degree  in sculpture from the School of the Art Institute of Chicago in 2015 and since has been working in sectors of architecture, web development, and arts administration. This website currently serves as a portfolio for his recent web-based projects.
              </p>
            </div>
          </article>
        );
    }}

  export default About;