import React, {Component} from 'react';

import timres from './timres.pdf';

class Footer extends Component {
    render() {
      return (
        <footer className="bg-near-black white-80 pv5 pv6-l ph4">
    <p className="f6"><span className="dib mr4 mr5-ns"> Tim Adamczyk </span>
    <a className="link white-80 hover-light-purple" href="/art">phoenix arizona</a> /
    <a className="link white-80 hover-gold" href={timres}> resume </a> /
    <a className="link white-80 hover-green" href="https://github.com/timadamczyk" > github </a>
  </p>
</footer>
      );
  }}

  export default Footer;