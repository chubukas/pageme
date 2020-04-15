import React, { useEffect } from "react";
import $ from "jquery";

const Navbar = () => {
  useEffect(() => {
    $(window).scroll(function () {
      var scroll = $(window).scrollTop();

      if (scroll >= 1) {
        $(".navbar").addClass("bg-primari");
        $(".navbar a").addClass("newlink ");
      } else {
        $(".navbar").removeClass("bg-primari");
        $(".navbar a").removeClass("newlink ");
      }
    });
  }, []);
  return (
    <>
      {/* <!-- ====== Header ====== --> */}
      <header id="header" className="header">
        {/* <!-- ====== Navbar ====== --> */}
        <nav className="navbar navbar-expand-lg fixed-top" expand="lg">
          <div className="container">
            {/* <!-- Logo --> */}
            <a className="navbar-brand logo" href="index.html">
              {/* <img src="assets/images/logo.png" alt="logo" /> */}
            </a>
            {/* <!-- // Logo --> */}

            {/* <!-- Mobile Menu --> */}
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-expanded="false"
            >
              <span className="text-warning">menu</span>
            </button>
            {/* <!-- Mobile Menu --> */}

            <div
              className="collapse navbar-collapse main-menu"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="#home">
                    HOME
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about">
                    ABOUT
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#service">
                    SERVICE
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#portfolio">
                    PORTFOLIO
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#blog">
                    BLOG
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link pr0" href="#contact">
                    CONTACT
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!-- ====== // Navbar ====== --> */}
      </header>
      {/* <!-- ====== // Header ====== --> */}
    </>
  );
};

export default Navbar;
