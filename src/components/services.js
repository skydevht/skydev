import React from 'react';
import ServiceCard from './serviceCard';


const Services = () => {
    return(
        <section id="services" class="section section-height-3 bg-primary border-0 m-0 appear-animation animated appear-animation-visible" data-appear-animation="fadeIn">
        <div class="container my-3">
            <div class="row mb-5">
                <div class="col text-center appear-animation animated appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200">
                    <h2 class="font-weight-bold text-color-light mb-2">Services</h2>
                    <p class="text-color-light opacity-7">LOREM IPSUM DOLOR SIT AMET, CONSECTETUR ADIPISCING ELIT</p>
                </div>
            </div>
            <div class="row">
             <ServiceCard serviceIcon="user" serviceTitle="Icon" serviceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla." />
             <ServiceCard serviceIcon="user" serviceTitle="Icon" serviceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla." />
             <ServiceCard serviceIcon="user" serviceTitle="Icon" serviceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla." />
            </div>
        </div>
    </section> 
    );
}

export default Services;