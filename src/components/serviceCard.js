import React from "react";


const ServiceCard = ({ serviceIcon, serviceTitle, serviceDesc}) => {
    return(
        <div class="col-lg-4 appear-animation animated appear-animation-visible" data-appear-animation="fadeInUpShorter">
        <div class="feature-box feature-box-style-2">
            <div class="feature-box-icon">
                <i class={`icons icon-${serviceIcon}  text-color-light`}></i>
            </div>
            <div class="feature-box-info">
                <h4 class="font-weight-bold text-color-light text-4 mb-2">{ serviceTitle }</h4>
                <p class="talternative-fon text-color-light opacity-7">{ serviceDesc }</p>
            </div>
        </div>
    </div> 
);
}

export default ServiceCard;