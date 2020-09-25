
import React from "react";
import { Link } from "gatsby";
//import PropTypes from "prop-types";

const Header = () => (
  <React.Fragment>  
    <header id="header" className="header-transparent header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': true, 'stickyStartAt': 70, 'stickyChangeLogo': false, 'stickyHeaderContainerHeight': 70}">
      <div className="header-body border-top-0 bg-dark box-shadow-none">
        <div className="header-container container">
          <div className="header-row">
            <div className="header-column">
              <div className="header-row">
                <div className="header-logo appear-animation" data-appear-animation="fadeIn" data-plugin-options="{'accY': 100}">
                  <Link href="#" className="goto-top"><img alt="Porto" width="102" height="45" data-sticky-width="82" data-sticky-height="36" data-sticky-top="0" src="img/lazy.png" data-plugin-lazyload data-plugin-options="{'threshold': 500}" data-original="img/landing/logo.png" /></Link>
                </div>
              </div>
            </div>
            <div className="header-column justify-content-end">
              <div className="header-row">
                <div className="header-nav header-nav-links header-nav-light-text header-nav-dropdowns-dark">
                  <div className="header-nav-main header-nav-main-square header-nav-main-dropdown-no-borders header-nav-main-text-capitalize header-nav-main-text-size-2 header-nav-main-mobile-dark header-nav-main-effect-1 header-nav-main-sub-effect-1 appear-animation" data-appear-animation="fadeIn" data-plugin-options="{'accY': 100}">
                    <nav className="collapse">
                      <ul className="nav nav-pills" id="mainNav">
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="index.html">
                            Home
                          </a>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" data-hash data-hash-offset="130" href="#demos">
                            Demos
                          </a>
                        </li>
                        <li className="dropdown">
                          <a className="dropdown-item dropdown-toggle" href="#">
                            Features
                          </a>
                        </li>
                      </ul>
                    </nav>
                  </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
</React.Fragment>
)


export default Header;