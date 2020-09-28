import React from 'react';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';
const Layout = ({ children }) => {
    return (
        <>
            <Helmet>
                <meta charset="utf-8" />
                <meta http-equiv="X-UA-Compatible" content="IE=edge" />	

                <title>Skydev</title>	

                <meta name="keywords" content="HTML5 Template" />
                <meta name="description" content="Skydev website" />
                <meta name="author" content="Reginad Victor" />
                <link rel="shortcut icon" href="img/favicon.ico" type="image/x-icon" />
                <link rel="apple-touch-icon" href="img/apple-touch-icon.png" />

                <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1.0, shrink-to-fit=no" />

                <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700,800%7COpen+Sans:400,700,800" rel="stylesheet" type="text/css" />

                <link rel="stylesheet" href="/assets/vendor/bootstrap/css/bootstrap.min.css" />
                <link rel="stylesheet" href="/assets/vendor/fontawesome-free/css/all.min.css" />
                <link rel="stylesheet" href="/assets/vendor/animate/animate.min.css" />
                <link rel="stylesheet" href="/assets/vendor/simple-line-icons/css/simple-line-icons.min.css" />
                <link rel="stylesheet" href="/assets/vendor/owl.carousel/assets/owl.carousel.min.css" />
                <link rel="stylesheet" href="/assets/vendor/owl.carousel/assets/owl.theme.default.min.css" />
                <link rel="stylesheet" href="/assets/vendor/magnific-popup/magnific-popup.min.css" />

                <link rel="stylesheet" href="/assets/css/theme.css" />
                <link rel="stylesheet" href="/assets/css/theme-elements.css" />
                
                <link rel="stylesheet" href="/assets/css/demos/demo-landing.css" />
                <link rel="stylesheet" href="/assets/css/theme-blog.css" />
                <link rel="stylesheet" href="/assets/css/theme-shop.css" />
                <link rel="stylesheet" href="/assets/css/skins/skin-landing.css" /> 
                
                
                {/**css for the contact form */}
                <link rel="stylesheet" href="/assets/css/demos/demo-medical-2.css" /> 
                <link rel="stylesheet" href="/assets/css/skins/skin-medical-2.css" /> 


                <link rel="stylesheet" href="/assets/css/skins/default.css" /> 
                <link rel="stylesheet" href="/assets/css/custom.css" />

                <script src="/assets/vendor/modernizr/modernizr.min.js" />
                <script src="/assets/vendor/jquery/jquery.min.js" />
                <script src="/assets/vendor/jquery.appear/jquery.appear.min.js" />
                <script src="/assets/vendor/jquery.cookie/jquery.cookie.min.js" />
                <script src="/assets/vendor/popper/umd/popper.min.js" />
                <script src="/assets/vendor/bootstrap/js/bootstrap.min.js" />
                <script src="/assets/vendor/common/common.min.js" />
                <script src="/assets/vendor/jquery.validation/jquery.validate.min.js" />
                <script src="/assets/vendor/jquery.easy-pie-chart/jquery.easypiechart.min.js" />
                <script src="/assets/vendor/jquery.gmap/jquery.gmap.min.js" />
                <script src="/assets/vendor/jquery.lazyload/jquery.lazyload.min.js" />
                <script src="/assets/vendor/isotope/jquery.isotope.min.js" />
                <script src="/assets/vendor/owl.carousel/owl.carousel.min.js" />
                <script src="/assets/vendor/magnific-popup/jquery.magnific-popup.min.js" />
                <script src="/assets/vendor/vide/jquery.vide.min.js" />
                <script src="/assets/vendor/vivus/vivus.min.js" />

                <script src="/assets/js/views/view.contact.js"></script>
                <script src="/assets/js/demos/demo-medical-2.js"></script>
                <script src="/assets/js/custom.js"></script>
                {/* <script src="/assets/js/theme.init.js"></script> */}
                {/* <body className="alternative-font-4 loading-overlay-showing" data-plugin-page-transition data-loading-overlay data-plugin-options="{'hideDelay': 100}" /> */}
            </Helmet>
            <div class="loading-overlay">
                <div class="bounce-loader">
                    <div class="bounce1"></div>
                    <div class="bounce2"></div>
                    <div class="bounce3"></div>
                </div>
            </div> 
            <div className="body">
                <Header />
                  <div role="main" class="main" id="home">
                    {children}
                  </div>
                <Footer />
            </div>
        </>
    )
}

export default Layout;