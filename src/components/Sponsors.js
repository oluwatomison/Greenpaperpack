import React from 'react'

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
              <img src="/img/clients/client-1.png" alt="md"/>
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

export default Sponsors