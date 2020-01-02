import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div id="footerDiv">
        <footer id="footer" className="py-4 bg-dark text-white-50">
          <div className="container-fluid text-center">
            <div className="row justify-content-center">
              <div className="col-4">
                <small className="text-uppercase">Creators</small>
                <p>
                  <a href="https://github.com/jeremyamram" target={"_blank"}>
                    <small>Jeremy Amram</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://github.com/tishchungoora" target={"_blank"}>
                    <small>Tish Chungoora</small>
                  </a>
                </p>
              </div>
              <div className="col-4">
                <small className="text-uppercase">Tech Stack Used</small>
                <p>
                  <a href="https://reactjs.org/" target={"_blank"}>
                    <small>React</small>
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources"
                    target={"_blank"}
                  >
                    <small>JavaScript</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://getbootstrap.com/" target={"_blank"}>
                    <small>Bootstrap</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://www.ruby-lang.org/" target={"_blank"}>
                    <small>Ruby</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://rubyonrails.org/" target={"_blank"}>
                    <small>Rails</small>
                  </a>{" "}
                  |{" "}
                  <a
                    href="https://guides.rubyonrails.org/active_record_basics.html"
                    target={"_blank"}
                  >
                    <small>Active Record</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://www.postgresql.org/" target={"_blank"}>
                    <small>PostgreSQL</small>
                  </a>
                </p>
              </div>
              <div className="col-4">
                <small className="text-uppercase">Acknowledgements</small>
                <p>
                  <a href="https://flaticon.com/" target={"_blank"}>
                    <small>Flaticon</small>
                  </a>{" "}
                  |{" "}
                  <a href="https://startupresources.io/" target={"_blank"}>
                    <small>Startup Resources</small>
                  </a>
                </p>
              </div>
            </div>
            <div>
              <small>&copy; Vezear</small>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
