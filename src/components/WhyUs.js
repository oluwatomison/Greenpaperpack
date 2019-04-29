import React from 'react'
import black from '../assests/img/background-bags-black-346748.jpg'
const diamond={
  color:"#f058dc"
}
const fix={
  color:"#ffb774"
}
const lang={
  color:"#589af1"
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
                  <img src={black} alt="coming up" class="img-fluid"/>
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
                  <i class="fa fa-diamond" style={diamond}></i>
                  <h4>Corporis dolorem</h4>
                  <p>Commodi quia voluptatum. Est cupiditate voluptas quaerat officiis ex alias dignissimos et ipsum. Soluta at enim modi ut incidunt dolor et.</p>
                </div>
  
                <div class="features wow bounceInUp clearfix">
                  <i class="fa fa-object-group" style={fix}></i>
                  <h4>Eum ut aspernatur</h4>
                  <p>Molestias eius rerum iusto voluptas et ab cupiditate aut enim. Assumenda animi occaecati. Quo dolore fuga quasi autem aliquid ipsum odit. Perferendis doloremque iure nulla aut.</p>
                </div>
  
                <div class="features wow bounceInUp clearfix">
                  <i class="fa fa-language" style={lang}></i>
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
  export default WhyUs