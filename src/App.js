import React from 'react';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Intro />
      <Aboutus />
      <Services />
      <WhyUs />
      <Action />
      <Features />
      <Clients/>
      <Team/>
      <Sponsors />
      <Faq />
      <Footer />
     
    </div>
  );
}

class Header extends React.Component{
  render(){
    return(
      <header id="header">
        <div id="topbar">
          <div className="container">
           <div className="social-links">
           <a href="app.pluralsight.com" class="twitter"><i class="fa fa-twitter"></i></a>
          <a href="app.pluralsight.com" class="facebook"><i class="fa fa-facebook"></i></a>
          <a href="app.pluralsight.com" class="linkedin"><i class="fa fa-linkedin"></i></a>
          <a href="app.pluralsight.com" class="instagram"><i class="fa fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="logo float-left">
          <h1 className="text-light"><a href="#info" className="scrollto"><span>Greenpaperbag</span></a></h1>
        </div>
        <nav className="main-nav float-right d-none d-lg-block">
          <ul>
          <li class="active"><a href="#intro">Home</a></li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#team">Team</a></li>
          <li class="drop-down"><a href="app.pluralsight.com">Drop Down</a>
            <ul>
            <li><a href="app.pluralsight.com">Drop Down 1</a></li>
              <li class="drop-down"><a href="app.pluralsight.com">Drop Down 2</a>
              <ul>
              <li><a href="app.pluralsight.com">Deep Drop Down 1</a></li>
                  <li><a href="app.pluralsight.com">Deep Drop Down 2</a></li>
                  <li><a href="app.pluralsight.com">Deep Drop Down 3</a></li>
                  <li><a href="app.pluralsight.com">Deep Drop Down 4</a></li>
                  <li><a href="app.pluralsight.com">Deep Drop Down 5</a></li>
              </ul>
              </li>
              <li>
              <li><a href="app.pluralsight.com">Drop Down 3</a></li>
              <li><a href="app.pluralsight.com">Drop Down 4</a></li>
              <li><a href="app.pluralsight.com">Drop Down 5</a></li>
              </li>
          </ul>
          </li>
          <li><a href="#footer">Contact Us</a></li>
          </ul>
        </nav>
      </div>

      </header>
    )
  }
}

class Intro extends React.Component{
  render(){
    return(
        <section id="intro" className="clearfix">
          <div className="container d-flex h-100">
            <div className="row justify-content-center align-self-center">
              <div className="col-md-6 intro-info order-md-first order-last">
              <h2>Rapid Solutions<br/>for Your <span>Business!</span></h2>
                <div>
                <a href="#about" class="btn-get-started scrollto">Get Started</a>
                </div>
              </div>
                <div className="col-md-6 intro-img order-md-last order-first">
                  <img src="./img/intro-img.svg" alt="dfff" className="img-fluid"></img>
                </div>
            </div>
          </div>
        </section>
    )
  }
}

class Aboutus extends React.Component{
  render(){
    return(
      <main id="main">
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-5 col-md-6">
                <div className="about-img">
                  <img src="img/about-img.jpg" alt="hnahf"></img>
                </div>
                </div>

              <div className="col-lg-7 col-md-6">
                <div className="about-content">
                  <h2>About Us</h2>
                  <h3>Odio sed id eos et laboriosam consequatur eos earum soluta.</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              <p>Aut dolor id. Sint aliquam consequatur ex ex labore. Et quis qui dolor nulla dolores neque. Aspernatur consectetur omnis numquam quaerat. Sed fugiat nisi. Officiis veniam molestiae. Et vel ut quidem alias veritatis repudiandae ut fugit. Est ut eligendi aspernatur nulla voluptates veniam iusto vel quisquam. Fugit ut maxime incidunt accusantium totam repellendus eum error.
                 Et repudiandae eum iste qui et ut ab alias.</p>
                 <ul>
                 <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                 <li><i class="ion-android-checkmark-circle"></i> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                 <li><i class="ion-android-checkmark-circle"></i> Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate trideta 
                storacalaperda mastiro dolore eu fugiat nulla pariatur.</li>
                 </ul>
                </div>
              </div>
            </div>
            </div>
        </section>
      </main>
    )
  }
}

class Services extends React.Component{
  render(){
    return(
        <main id="main">
          <section id="services" className="section-bg">
            <div className = "container">
              <header className="section-header">
                <h3>services</h3>
                <p>dnfjhiajfdnjnndfjsnfjdn</p> 
              </header>

              <div className="row">
                <div className="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                  <div className="box">
                    <div className="icon"><i class="ion-ios-analytics-outline"></i></div>
                      <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                        <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas 
                           molestias excepturi sint occaecati cupiditate non provident</p>
                  </div>
                </div>

                <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-bookmarks-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-world-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-paper-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>

                    <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                    <div class="box">
                        <div class="icon"><i class="ion-ios-speedometer-outline"></i></div>
                            <h4 class="title"><a href="">Dolor Sitema</a></h4>
                              <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                       </div>
                    </div>
              </div>
            </div>
          </section>
        </main>
    )
  }
}

class WhyUs extends React.Component{
  render(){
    return(
      <main id="main">
        <section id="why-us" className="wow fadeIn">
          <div className="container-fluid">
            <header className="section-header">
              <h3> why choose us</h3>
              <p> we are the best thing that is happening</p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                <div className="why-us-img">
                <img src="./img/why-us.jpg" alt="coming up" class="img-fluid"/>
                </div>
              </div>

            <div className="col-lg-6">
              <div className="why-us-content">
              <p>
                Explicabo repellendus quia labore. Non optio quo ea ut ratione et quaerat. Porro facilis deleniti porro consequatur
                et temporibus. Labore est odio.

                Odio omnis saepe qui. Veniam eaque ipsum. Ea quia voluptatum quis explicabo sed nihil repellat..
              </p>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-diamond"></i>
                <h4>Corporis dolorem</h4>
                <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
              </div>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-object-group"></i>
                <h4>Eum ut aspernatur</h4>
                <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
              </div>

              <div class="features wow bounceInUp clearfix">
                <i class="fa fa-language"></i>
                <h4>Voluptates dolores</h4>
                <p>Voluptates nihil et quis omnis et eaque omnis sint aut. Ducimus dolorum aspernatur. Totam dolores ut enim ullam voluptas distinctio aut.</p>
                </div>
              `</div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row counters">
            
            <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">274</span>
            <p>Clients</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">421</span>
            <p>Projects</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">1,364</span>
            <p>Hours Of Support</p>
          </div>

          <div class="col-lg-3 col-6 text-center">
            <span data-toggle="counter-up">18</span>
            <p>Hard Workers</p>
          </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}


class Action extends React.Component{
  render(){
    return(
      <main id="main">
        <section id="call-to-action"  className="wow fadeInUp">
          <div class="container">
            <div className="row">
             <div className="col-lg-9 text-center text-lg-left">
              <h3 class="cta-title">Call To Action</h3>
               <p class="cta-text"> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, 
            sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              </div>
                 <div className="col-lg-3 cta-btn-container text-center">
                    <a class="cta-btn align-middle" href="jjndfs">Call To Action</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

class Features extends React.Component{
  render(){
    return(
      
      <main id="main">
      <section id="features"></section>
        <div className="container">
        
        <div className="row feature-item">
          <div className="col-lg-6 wow fadeInUp">
           <img src="./img/features-1.svg" class="img-fluid" alt="jnjdfjd"/> 
          </div>
          <div  className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
            <h4>nuejfnjnnjnafdnanfdn</h4>
            <p>jnjjafnjnafdnafnaoodnfmannfd</p>
            <p>jnajdnfjanjnfodnfnammf</p>
          </div>
        </div>

          <div className="row feature-item mt-5 pt-5">
            <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
              <img src="./img/features-2.svg" className="img-fluid" alt="jadfj"/>
            </div>
                <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                  <h4> wzjdnfnajfndnmmajdfiamifjidml</h4>
                    <p>nejdfnjfnnjnafjnanufdamfoaiifdmmamfanfmdmamfdai</p>
                    <p>naundefmnefundammfafinammfn</p>
                </div>
          </div>
        </div>
        <section/>
      </main>
    )
  }
}

class Clients extends React.Component{
  render(){
    return(
      <main id="main">

        <section id="testimonials">
          <div className="container">
            <header className = "section-header">
                <h3>Testimonials</h3>
            </header>
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonials-carousel wow fadeInUp">

                  <div className="testimonials-item">
                    <img src="img/test-1.jpg" className="testimonial-img" alt="iosfmg"/>
                      <h3> anfdm</h3>
                      <h4>ceo &amp; Founder</h4>
                      <p>
                        narfnsnmfgn
                      </p>
                  </div>

                <div className="testimonial-item">
                 <img src="img/testimonial-2.jpg" className="testimonial-img" alt=""/>
                    <h3>Sara Wilsson</h3>
                       <h4>Designer</h4>
                  <p>
                  Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                 </p>
                    </div>

                    <div className="testimonial-item">
                      <img src="img/testimonial-3.jpg" className="testimonial-img" alt=""/>
                        <h3>Jena Karlis</h3>
                          <h4>Store Owner</h4>
                <p>
                  Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                </p>
                  </div>

                <div class="testimonial-item">
                    <img src="img/testimonial-4.jpg" class="testimonial-img" alt=""/>
                        <h3>Matt Brandon</h3>
                          <h4>Freelancer</h4>
                            <p>
                               enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                 </p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

class Team extends React.Component{
  render(){
    return(
      <main id="main">
        <section id="team" className="section-bg">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
                <p>ndjfnjanjfjdnjnf</p>
            </div>

              <div className="row">
                <div className="col-lg-3 col-md-6 wow fadeInUp">
                  <div className="member">
                    <img src="img/team-1.jpg" className="img-fluid" alt="jjj"/>
                    <div className="member-info">
                      <div className="member-info-content">
                      <h4>David Azemoh</h4>
                        <span>Chief Executive Officer</span>
                          <div className="social">
                          <a href="www.azemoh.com"><i className="fa fa-twitter"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-facebook"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-google-plus"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 wow fadeInUp">
                  <div className="member">
                    <img src="img/team-1.jpg" className="img-fluid" alt="jjj"/>
                    <div className="member-info">
                      <div className="member-info-content">
                      <h4>David Azemoh</h4>
                        <span>Chief Executive Officer</span>
                          <div className="social">
                          <a href="www.azemoh.com"><i className="fa fa-twitter"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-facebook"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-google-plus"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 wow fadeInUp">
                  <div className="member">
                    <img src="img/team-1.jpg" className="img-fluid" alt="jjj"/>
                    <div className="member-info">
                      <div className="member-info-content">
                      <h4>David Azemoh</h4>
                        <span>Chief Executive Officer</span>
                          <div className="social">
                          <a href="www.azemoh.com"><i className="fa fa-twitter"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-facebook"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-google-plus"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-6 wow fadeInUp">
                  <div className="member">
                    <img src="img/team-1.jpg" className="img-fluid" alt="jjj"/>
                    <div className="member-info">
                      <div className="member-info-content">
                      <h4>David Azemoh</h4>
                        <span>Chief Executive Officer</span>
                          <div className="social">
                          <a href="www.azemoh.com"><i className="fa fa-twitter"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-facebook"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-google-plus"></i></a>
                          <a href="www.azemoh.com"><i className="fa fa-linkedin"></i></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </section>
      </main>
    )
  }
}

class Sponsors extends React.Component{
  render(){
    return(
      <main id= "main">
        <section id="clients" className="wow fadeInUp">
          <div className="container">
            <header className="section-header">
              <h3>Our Clients</h3>
            </header>

            <div className="owl-carousel clients-carousel">
            <img src="img/clients/client-1.png" alt="md"/>
            <img src="img/clients/client-2.png" alt="mdof"/>
           <img src="img/clients/client-3.png" alt="dmf"/>
           <img src="img/clients/client-4.png" alt="md"/>
            <img src="img/clients/client-5.png" alt=",ld"/>
           <img src="img/clients/client-6.png" alt="llf"/>
           <img src="img/clients/client-7.png" alt="lf"/>
           <img src="img/clients/client-8.png" alt="f"/>
            </div>
          </div>
        </section>
      </main>
    )
  }
}

class Faq extends React.Component{
 render(){
   return(
     <main id="main">
      <section id="faq">
      <div className="container">
        <header className="section-header">
          <h3>Frequently Asked Questions</h3>
            <p> Ask Us Anything, we are going to Answer</p>
        </header>

        <ul id="faq-list" class="wow fadeInUp">
          <li>
            <a data-toggle="collapse" class="collapsed" href="#faq1">Non consectetur a erat nam at lectus urna duis? <i class="ion-android-remove"></i></a>
            <div id="faq1" class="collapse" data-parent="#faq-list">
              <p>
                Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq2" class="collapsed">Feugiat scelerisque varius morbi enim nunc faucibus a pellentesque? <i class="ion-android-remove"></i></a>
            <div id="faq2" class="collapse" data-parent="#faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq3" class="collapsed">Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi? <i class="ion-android-remove"></i></a>
            <div id="faq3" class="collapse" data-parent="#faq-list">
              <p>
                Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
              </p>
            </div>
            </li>

            <li>
            <a data-toggle="collapse" href="#faq4" class="collapsed">Ac odio tempor orci dapibus. Aliquam eleifend mi in nulla? <i class="ion-android-remove"></i></a>
            <div id="faq4" class="collapse" data-parent="#faq-list">
              <p>
                Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq5" class="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i class="ion-android-remove"></i></a>
            <div id="faq5" class="collapse" data-parent="#faq-list">
              <p>
                Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in
              </p>
            </div>
          </li>

          <li>
            <a data-toggle="collapse" href="#faq6" class="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i class="ion-android-remove"></i></a>
            <div id="faq6" class="collapse" data-parent="#faq-list">
              <p>
                Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque. Pellentesque diam volutpat commodo sed egestas egestas fringilla phasellus faucibus. Nibh tellus molestie nunc non blandit massa enim nec.
              </p>
            </div>
          </li>
          </ul>
          </div>
      </section>
     </main>
   )
 } 
}

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

export default App;


