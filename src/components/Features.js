import React from 'react'
import feature from '../assests/img/features-1.svg'
import features from '../assests/img/features-2.svg'
class Features extends React.Component{
    render(){
      return(
        
        <main id="main">
        <section id="features"></section>
          <div className="container">
          
          <div className="row feature-item">
            <div className="col-lg-6 wow fadeInUp">
             <img src={feature} class="img-fluid" alt="jnjdfjd"/> 
            </div>
            <div  className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
              <h4>nuejfnjnnjnafdnanfdn</h4>
              <p>jnjjafnjnafdnafnaoodnfmannfd</p>
              <p>jnajdnfjanjnfodnfnammf</p>
            </div>
          </div>
  
            <div className="row feature-item mt-5 pt-5">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                <img src={features} className="img-fluid" alt="jadfj"/>
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
export default Features  