import React from 'react'
import test1 from '../assests/img/testimonial-1.jpg'
import test2 from '../assests/img/testimonial-2.jpg'
import test3 from '../assests/img/testimonial-3.jpg'
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
  
                  <div className="testimonial-item">
                   <img src={test1} className="testimonial-img" alt=""/>
                      <h3>Sara Wilsson</h3>
                         <h4>Designer</h4>
                    <p>
                    Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                   </p>
                      </div>
  
                      <div className="testimonial-item">
                        <img src={test2}className="testimonial-img" alt=""/>
                          <h3>Jena Karlis</h3>
                            <h4>Store Owner</h4>
                  <p>
                    Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                  </p>
                    </div>
  
                  <div class="testimonial-item">
                      <img src={test3} class="testimonial-img" alt=""/>
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
  export default Clients