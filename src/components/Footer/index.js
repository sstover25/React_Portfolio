import React from "react";

function Footer() {
  return (
    <footer className="d-flex flex-column flex-md-row p-3 m-0 align-items-center justify-content-center navbar fixed-bottom">
      <a className="footer-link p-2" href="https://github.com/sstover25">
        GitHub
      </a>
      <a
        className="footer-link p-2"
        href="https://www.linkedin.com/in/shannon-s-939507219/"
      >
        LinkedIn
      </a>
      <a
        className="footer-link p-2"
        href="https://stackoverflow.com/users/17598022/shannon"
      >
        StackOverflow
      </a>
    </footer>
  );
}

export default Footer;
