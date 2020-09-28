import React from "react";



const Testimonial = () => {
    return(
        <section class="section section-height-3 bg-color-grey-scale-1 border-0 m-0 appear-animation animated fadeIn appear-animation-visible" data-appear-animation="fadeIn" style={{ animationDelay: "100ms" }}>
            <div class="container">
                <div class="row">
                    <div class="col appear-animation animated fadeInUpShorter appear-animation-visible" data-appear-animation="fadeInUpShorter" data-appear-animation-delay="200" style={{ animationDelay: "200ms" }}>
                        
                        <div class="owl-carousel owl-theme stage-margin stage-margin-lg nav-dark nav-style-2 mb-0 owl-loaded owl-drag owl-carousel-init" data-plugin-options="{'items': 1, 'margin': 100, 'loop': false, 'nav': true, 'dots': false, 'stagePadding': 100, 'autoHeight': true}" style={{ height: "auto" }}>
                            
                            
                        <div class="owl-stage-outer owl-height" style={{ height: "274.117px" }}><div class="owl-stage" style={{ transform: "translate3d(0px, 0px, 0px)", transition: "all 0s ease 0s", width: "2220px", paddingLeft: "100px", paddingRight: "100px"}}><div class="owl-item active" style={{ width: "910px", marginRight: "100px" }}><div>
                                <div class="testimonial testimonial-style-2 mb-0">
                                    <div class="testimonial-author">
                                        <img src="/static/img/clients/client-1.jpg" class="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <blockquote>
                                        <p class="text-color-dark text-5 line-height-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex.</p>
                                    </blockquote>
                                    <div class="testimonial-author">
                                        <p><strong class="font-weight-extra-bold text-2">- John Smith. Okler</strong></p>
                                    </div>
                                </div>
                            </div></div><div class="owl-item" style={{ width: "910px", marginRight: "100px" }}><div>
                                <div class="testimonial testimonial-style-2 mb-0">
                                    <div class="testimonial-author">
                                        <img src="/static/img/clients/client-1.jpg" class="img-fluid rounded-circle" alt="" />
                                    </div>
                                    <blockquote>
                                        <p class="text-color-dark text-5 line-height-5 mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                    </blockquote>
                                    <div class="testimonial-author">
                                        <p><strong class="font-weight-extra-bold text-2">- John Smith. Okler</strong></p>
                                    </div>
                                </div>
                            </div></div></div></div><div class="owl-nav"><button type="button" role="presentation" class="owl-prev disabled"></button><button type="button" role="presentation" class="owl-next"></button></div><div class="owl-dots disabled"></div></div>

                    </div>
                </div>
            </div>
        </section>
       );
}

export default Testimonial;