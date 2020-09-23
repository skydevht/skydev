import React from "react";
//import { Link } from "gatsby";
//import PropTypes from "prop-types";
import { Helmet } from 'react-helmet';

const Header = ({ siteTitle }) => (
  <React.Fragment>  
    <Helmet>
      <meta charset="utf-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />	

      <title>{siteTitle}</title>	

      <meta name="keywords" content="HTML5 Template" />
      <meta name="description" content="Skydev website" />
      <meta name="author" content="Reginad Victor" />
      <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
      <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />

      <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no" />

      <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7COpen+Sans:400,700,800" rel="stylesheet" type="text/css" />

      <link rel="stylesheet" href="vendor/bootstrap/css/bootstrap.min.css" />
      <link rel="stylesheet" href="vendor/fontawesome-free/css/all.min.css" />
      <link rel="stylesheet" href="vendor/animate/animate.min.css" />
      <link rel="stylesheet" href="vendor/simple-line-icons/css/simple-line-icons.min.css" />
      <link rel="stylesheet" href="vendor/owl.carousel/assets/owl.carousel.min.css" />
      <link rel="stylesheet" href="vendor/owl.carousel/assets/owl.theme.default.min.css" />
      <link rel="stylesheet" href="vendor/magnific-popup/magnific-popup.min.css" />

      <link rel="stylesheet" href="css/theme.css" />
      <link rel="stylesheet" href="css/theme-elements.css" />
      <link rel="stylesheet" href="css/theme-blog.css" />
      <link rel="stylesheet" href="css/theme-shop.css" />
      
      <link rel="stylesheet" href="css/demos/demo-landing.css" />

      <link rel="stylesheet" href="css/skins/skin-landing.css" /> 

      <link rel="stylesheet" href="css/custom.css" />

      <script src="vendor/modernizr/modernizr.min.js"></script>
    </Helmet>
    <body className="alternative-font-4 loading-overlay-showing" data-plugin-page-transition data-loading-overlay data-plugin-options="{'hideDelay': 100}">
		<div className="loading-overlay">
			<div className="bounce-loader">
				<div className="bounce1"></div>
				<div className="bounce2"></div>
				<div className="bounce3"></div>
			</div>
		</div>
		
		<div className="body">
			<header id="header" className="header-transparent header-effect-shrink" data-plugin-options="{'stickyEnabled': true, 'stickyEffect': 'shrink', 'stickyEnableOnBoxed': false, 'stickyEnableOnMobile': true, 'stickyStartAt': 70, 'stickyChangeLogo': false, 'stickyHeaderContainerHeight': 70}">
				<div className="header-body border-top-0 bg-dark box-shadow-none">
					<div className="header-container container">
						<div className="header-row">
							<div className="header-column">
								<div className="header-row">
									<div className="header-logo appear-animation" data-appear-animation="fadeIn" data-plugin-options="{'accY': 100}">
										<a href="#" className="goto-top"><img alt="Porto" width="102" height="45" data-sticky-width="82" data-sticky-height="36" data-sticky-top="0" src="img/lazy.png" data-plugin-lazyload data-plugin-options="{'threshold': 500}" data-original="img/landing/logo.png"></a>
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
														<ul className="dropdown-menu">
															<li>
																<a className="dropdown-item" href="index.html">
																	Landing Page
																</a>
															</li>
															<li>
																<a className="dropdown-item" href="index.html#demos">
																	Demos
																</a>
															</li>
															<li className="dropdown-submenu">
																<a className="dropdown-item" href="#">classNameic</a>
															
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
										<a className="btn btn-gradient btn-rounded font-weight-semibold px-4 ml-3 appear-animation" data-appear-animation="fadeIn" data-plugin-options="{'accY': 100}" href="https://themeforest.net/item/porto-responsive-html5-template/4106987" target="_blank">BUY PORTO NOW!</a>
										<button className="btn header-btn-collapse-nav" data-toggle="collapse" data-target=".header-nav-main nav"><i className="fa fa-bars"></i></button>
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
