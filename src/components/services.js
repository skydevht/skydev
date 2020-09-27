import React from 'react';
import ServiceCard from './serviceCard';


const Services = () => {
    return(
        <section class="page-header page-header-modern bg-color-light-scale-1 page-header-md">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 order-2 order-md-1 align-self-center p-static">
                        <h1 class="text-dark">Our <strong>Services</strong></h1>
                        <span class="sub-title text-dark">We Are Here To Help You</span>
                    </div>
                </div>
            </div>
            <div class="container py-4">
            <div class="row py-3 justify-content-center">
              <ServiceCard serviceImg="/static/img/generic/generic-corporate-3-3-full.jpg" serviceTitle="SEO Optimization" serviceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla non metus pulvinar."/> 
              <ServiceCard serviceImg="/static/img/generic/generic-corporate-3-3-full.jpg" serviceTitle="SEO Optimization" serviceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla non metus pulvinar."/> 
              <ServiceCard serviceImg="/static/img/generic/generic-corporate-3-3-full.jpg" serviceTitle="SEO Optimization" serviceDesc="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque rutrum pellentesque imperdiet. Nulla lacinia iaculis nulla non metus pulvinar."/> 
            </div>
            </div>
        </section>
    );
}

export default Services;