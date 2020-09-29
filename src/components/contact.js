import React from 'react';


const Contact = () => {
    return (
        <div class="container py-5">
            <div class="row">
                <div class="col">
                    <hr class="my-5" />
                </div>
            </div>

            <div class="row">
                <div class="col">
                    <h3 class="text-color-quaternary font-weight-bolder text-capitalize mb-2">Send a Message</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat ex finibus urna tincidunt, auctor ullamcorper risus luctus.</p>
                    <form className="contact-form custom-form-style-1" data-appear-animation="fadeIn" data-appear-animation-delay="100" action="php/contact-form.php" method="POST">
                        <div class="contact-form-success alert alert-success d-none mt-4">
                            <strong>Success!</strong> Your message has been sent to us.
                        </div>
                        <div class="contact-form-error alert alert-danger d-none mt-4">
									<strong>Error!</strong> There was an error sending your message.
									<span class="mail-error-message text-1 d-block"></span>
								</div>
								<div class="form-row">
									<div class="form-group col-lg-6">
										<input type="text" placeholder="Your Name" value="" data-msg-required="Please enter your name." maxlength="100" class="form-control" name="name" required />
									</div>
									<div class="form-group col-lg-6">
										<input type="email" placeholder="Your E-mail" value="" data-msg-required="Please enter your email address." data-msg-email="Please enter a valid email address." maxlength="100" class="form-control" name="email" required />
									</div>
								</div>
								<div class="form-row">
									<div class="form-group col">
										<input placeholder="Subject" type="text" value="" data-msg-required="Please enter the subject." maxlength="100" class="form-control" name="subject" required />
									</div>
								</div>
								<div class="form-row">
									<div class="form-group col">
										<textarea placeholder="Your Message..." maxlength="5000" data-msg-required="Please enter your message." rows="10" class="form-control" name="message" required></textarea>
									</div>
								</div>
								<div class="form-row">
									<div class="form-group col">
										<input type="submit" value="Send Message" class="btn btn-primary px-4 py-3 text-center text-uppercase font-weight-semibold" data-loading-text="Loading..." />
									</div>
								</div>
                    </form>
                </div>
            </div>
        </div> 
    );
}


export default Contact;