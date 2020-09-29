import React from "react";



const Testimonial = () => {
    return(
        <section class="parallax section section-text-light section-parallax section-center mt-0 mb-0" data-plugin-parallax="" data-plugin-options="{'speed': 1.5}" data-image-src="/static/img/parallax/parallax-2.jpg" style={{ position: "relative", overflow: "hidden" }}><div class="parallax-background" style={{backgroundImage: `url(&quot /static/img/parallax/parallax-2.jpg&quot)`, backgroundSize: "cover", position: "absolute", top: "0px", left: "0px", width: "100%", height: "180%", transform: "translate3d(0px, -74.3286px, 0px)", backgroundPositionX: "50%" }}></div>
        <div class="container">
            <div class="row justify-content-center">
                <div class="col-lg-10">
                    <div class="owl-carousel owl-theme nav-bottom rounded-nav owl-loaded owl-drag owl-carousel-init" data-plugin-options="{'items': 1, 'loop': false}" style={{height: "auto" }}>
                        
                        
                    <div class="owl-stage-outer"><div class="owl-stage" style={{ transform: "translate3d(-920px, 0px, 0px)", transition: "all 0.25s ease 0s", width: "1840px" }}><div class="owl-item" style={{ width: "920px" }}><div>
                            <div class="testimonial testimonial-style-2 testimonial-with-quotes mb-0">
                                <div class="testimonial-author">
                                    <img src="/static/img/clients/client-1.jpg" class="img-fluid rounded-circle" alt="" />
                                </div>
                                <blockquote>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Fusce ante tellus, convallis non consectetur sed, pharetra nec ex.</p>
                                </blockquote>
                                <div class="testimonial-author">
                                    <p><strong class="font-weight-extra-bold">John Smith</strong><span>CEO &amp; Founder - Okler</span></p>
                                </div>
                            </div>
                        </div></div><div class="owl-item active" style={{ width: "920px" }} ><div>
                            <div class="testimonial testimonial-style-2 testimonial-with-quotes mb-0">
                                <div class="testimonial-author">
                                    <img src="/static/img/clients/client-1.jpg" class="img-fluid rounded-circle" alt="" />
                                </div>
                                <blockquote>
                                    <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget risus porta, tincidunt turpis at, interdum tortor. Suspendisse potenti. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </blockquote>
                                <div class="testimonial-author">
                                    <p><strong class="font-weight-extra-bold">John Smith</strong><span>CEO &amp; Founder - Okler</span></p>
                                </div>
                            </div>
                        </div></div></div></div><div class="owl-nav disabled"><button type="button" role="presentation" class="owl-prev"></button><button type="button" role="presentation" class="owl-next"></button></div><div class="owl-dots"><button role="button" class="owl-dot"><span></span></button><button role="button" class="owl-dot active"><span></span></button></div></div>
                </div>
            </div>
        </div>
    </section>  
       );
}

export default Testimonial;