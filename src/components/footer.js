import React from 'react';


const Footer = () => {
    return (
        <footer id="footer" class="bg-color-dark-scale-2 border border-right-0 border-left-0 border-bottom-0 border-color-light-3 mt-0">
            <div class="container text-center my-3 py-5">
                <a href="#" class="goto-top">
                    <img src="img/lazy.png" data-plugin-lazyload data-plugin-options="{'threshold': 500}" data-original="img/landing/logo.png" width="102" height="45" class="mb-4 appear-animation" alt="Porto" data-appear-animation="fadeIn" data-appear-animation-delay="300" />
                </a>
                <ul class="social-icons social-icons-big social-icons-dark-2">
                    <li class="social-icons-facebook mx-2"><a href="https://www.facebook.com/hescaide?_rdc=1&_rdr" target="_blank" title="Facebook"><i class="fab fa-facebook-f"></i></a></li>
                    <li class="social-icons-twitter mx-2"><a href="https://twitter.com/hescaide" target="_blank" title="Twitter"><i class="fab fa-twitter"></i></a></li>
                    <li class="social-icons-linkedin mx-2"><a href="https://www.linkedin.com/in/holy-elie-scaide/" target="_blank" title="Linkedin"><i class="fab fa-linkedin-in"></i></a></li>
                </ul>
            </div>
            <div class="copyright bg-dark py-4">
                <div class="container text-center py-2">
                    <p class="mb-0 text-2">Copyright 2020 - SkyDev - All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;