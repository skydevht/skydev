import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { Helmet } from 'react-helmet'

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

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

        <link rel="stylesheet" href="/assets/css/custom.css" />

        <script src="/assets/vendor/modernizr/modernizr.min.js"></script>
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
          <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
          <main>{children}</main>
        </div>
      </body>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
