import React from 'react'
import intro from '../assests/img/undraw_successful_purchase_uyin.svg'
class Intro extends React.Component{
    render(){
      return(
          <section id="intro" className="clearfix">
            <div className="container d-flex h-100">
              <div className="row justify-content-center align-self-center">
                <div className="col-md-6 intro-info order-md-first order-last">
                <h2>Green PaperPack<br/>for Your <span>Business!</span></h2>
                  <div>
                  <a href="#about" class="btn-get-started scrollto">Get Started</a>
                  </div>
                </div>
                  <div className="col-md-6 intro-img order-md-last order-first">
                    <img src={intro} alt="dfff" className="img-fluid"></img>
                  </div>
              </div>
            </div>
          </section>
      )
    }
  }
  export default Intro