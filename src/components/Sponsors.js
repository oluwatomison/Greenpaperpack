import React from 'react'
import client1 from '../assests/img/clients/client-1.png'
import client2 from '../assests/img/clients/client-2.png'
import client3 from '../assests/img/clients//client-3.png'
import client4 from '../assests/img/clients/client-4.png'
import client5 from '../assests/img/clients/client-5.png'
import client6 from '../assests/img/clients/client-6.png'
import client7 from '../assests/img/clients/client-7.png'
import client8 from '../assests/img/clients/client-8.png'
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
              <img src={client1} alt="md"/>
              <img src={client2} alt="mdof"/>
             <img src={client3} alt="dmf"/>
             <img src={client4} alt="md"/>
              <img src={client5} alt=",ld"/>
             <img src={client6} alt="llf"/>
             <img src={client7} alt="lf"/>
             <img src={client8} alt="f"/>
            </div>
            </div>
          </section>
        </main>
      )
    }
  }

export default Sponsors