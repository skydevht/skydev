import React from "react";
import { Link } from "gatsby";


const LinkItem = ({link, title}) => {
  return (
    <li class="dropdown">
      <Link class="dropdown-item dropdown-toggle" to={link}>
       {title} 
      </Link> 
    </li>
  );
}
const Header = () => {
    return (
      <header id="header" data-plugin-options="{'stickyEnabled': true, 'stickyEnableOnBoxed': true, 'stickyEnableOnMobile': true, 'stickyStartAt': 45, 'stickySetTop': '-45px', 'stickyChangeLogo': true}">
      <div class="header-body">
        <div class="header-container container">
          <div class="header-row">
            <div class="header-column">
              <div class="header-row">
                <div class="header-logo pt-4">
                  <a href="index.html">
                    <img alt="Skydev Logo" width="100" height="48" data-sticky-width="82" data-sticky-height="40" src="/static/img/logo.png" />
                  </a>
                </div>
              </div>
            </div>
            <div class="header-column justify-content-end">
              <div class="header-row">
                <div class="header-nav pt-4">
                  <div class="header-nav-main header-nav-main-effect-1 header-nav-main-sub-effect-1">
                    <nav class="collapse">
                      <ul class="nav nav-pills" id="mainNav">
                       <LinkItem link="/" title="HOME" /> 
                       <LinkItem link="/" title="SERVICE" /> 
                       <LinkItem link="/" title="RESUME" /> 
                       <LinkItem link="/" title="CONTACT" /> 
                       <LinkItem link="/" title="POST" /> 
                      </ul>
                    </nav>
                  </div>
                  <button class="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav">
											<i class="fas fa-bars"></i>
									</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>  
    );
}

export default Header;