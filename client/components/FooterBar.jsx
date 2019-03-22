import React from "react";

class FooterBar extends React.Component {
  render() {
    return (
  <footer className="mainfooter" role="contentinfo">
  <div className="footer-bottom">
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <p className="text-xs-center">&copy; Copyright 2019 - OSM-FINC.  All rights reserved.</p>
        </div>
      </div>
    </div>
  </div>
</footer>
    );
  }
}

export default FooterBar;
