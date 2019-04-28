import React from 'react'

class Footer extends React.Component{
    render(){
      return(
          <footer id="footer" className="section-bg">
            <div className="footer-top">
              <div className="container">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="row">
                      <div className="col-sm-6">
                        <div className="footer-info">
                            <h3>Rapid</h3>
                            <p>The give chase and they are lie me which is very wonderful</p>
                          </div>
  
                          <div className="footer-newsletter">
                            <h4>Our Newsletter</h4>
                            <p>You can sub to our service</p>
                              <form action="" method="post">
                              <input type="email" name="email"/><input type="submit"  value="Subscribe"/>
                              </form>
                          </div>
                        </div>
  
                          <div className="col-sm-6">
                            <div className="footer-links">
                              <h4>Useful Links</h4>
                              <ul>
                              <li><a href="#About">Home</a></li>
                              <li><a href="#About">About us</a></li>
                              <li><a href="#Services">Services</a></li>
                              <li><a href="#Terms">Terms of service</a></li>
                              <li><a href="Privacy">Privacy policy</a></li>
                              </ul>
                            </div>
                              <div className="footer-links">
                                <h4>Contact Us</h4>
                                  <p>
                                    A100 Kells Street <br/>
                                    Abuja, WU 33423<br/>
                                    Nigeria <br/>
                                    </p>     
                              </div>
  
                              <div className="social-links">
                              <a href="#twitter" class="twitter"><i class="fa fa-twitter"></i></a>
                              <a href="#facebook" class="facebook"><i class="fa fa-facebook"></i></a>
                              <a href="#Instagram" class="instagram"><i class="fa fa-instagram"></i></a>
                               <a href="#Linkedin" class="linkedin"><i class="fa fa-linkedin"></i></a>
                              </div>
                          </div>
                       </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form">
                      <h4>Send us a message</h4>
                        <p> You are absolutely free to send us a message</p>
                          <form action="" method="post" role="form" className="ContactForm">
                            <div className="form-group">
                            <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation"></div>
                            </div>
  
                            <div className="form-group">
                            <input type="text" name="email" className="form-control" id="email" placeholder="Your Email" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
                            <div className="validation"></div>
                            </div>
  
                            <div class="form-group">
                             <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
                            <div className="validation"></div>
                            </div>
  
                            <div class="form-group">
                            <textarea className="form-control" name="message" rows="5" data-rule="required" data-msg="Please write something for us" placeholder="Message"></textarea>
                             <div className="validation"></div>
                             </div>
  
                             <div id="sendmessage">Your message has been sent. Thank you!</div>
                                <div id="errormessage"></div>
  
                                  <div className="text-center"><button type="submit" title="Send Message">Send Message</button></div>
                          </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
  
            <div className="container">
          <div className="copyright">
            &copy; Copyright <strong>Green PaperBag</strong>. All Rights Reserved
          </div>
          <div className="credits">
            <p>Designed By PaperBag Team</p>
          </div>
        </div>
          </footer>
      )
    }
  }
  export default Footer