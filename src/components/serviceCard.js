import React from "react";
import Services from "./services";



const ServiceCard = ({ serviceImg, serviceTitle, serviceDesc}) => {
    return(
        <div class="col-sm-8 col-md-4 appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" data-appear-animation-delay="500" style={{ animationDelay: "500ms" }}>
            <article>
                <div class="row">
                    <div class="col">
                        <a href="#" class="text-decoration-none">
                            <img src={serviceImg} class="img-fluid hover-effect-2 mb-3" alt="" />
                        </a>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <h3 class="mb-0 text-4 text-uppercase font-weight-bold pt-2 d-block text-dark text-decoration-none" >{serviceTitle}</h3>
                        <p class="mb-2 lead text-4">{serviceDesc}</p>
                    </div>
                </div>
            </article>
        </div>
);
}

export default ServiceCard;