import React from 'react'
const button = {
  background: "#fceef3"
}
const button1={
  background:"#fff0da"
}
const analytic = {
  color: "#ff689b"
}
const book={
 color:" #e98e06"
}
const button2={
  background:" #e6fdfc"
}
const paper={
  color:" #3fcdc7"
}
const button3={
  background:"#ecebff"
}
const clock={
  color:"#8660fe"
}
const button4={
  background:"#e1eeff"
}
const world={
  color:"2282ff"
}
const button5={
  background:"#eafde7"
}
const speedometer={
  color:"#41cf2e"
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
                      <div className="icon" style={button}><i class="ion-ios-analytics-outline" style={analytic}></i></div>
                        <h4 class="title"><a href="">Lorem Ipsum</a></h4>
                          <p class="description">Voluptatum deleniti atque corrupti quos dolores et quas 
                             molestias excepturi sint occaecati cupiditate non provident</p>
                    </div>
                  </div>
  
                  <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button1}><i class="ion-ios-bookmarks-outline" style={book}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button2}><i class="ion-ios-paper-outline" style={paper}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button1}><i class="ion-ios-bookmarks-outline"style={book}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button3}><i class="ion-ios-clock-outline" style={clock}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button1}><i class="ion-ios-bookmarks-outline" style={book}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button4}><i class="ion-ios-world-outline" style={world}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button2}><i class="ion-ios-paper-outline" style={paper}></i></div>
                              <h4 class="title"><a href="">Dolor Sitema</a></h4>
                                <p class="description">Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata</p>
                         </div>
                      </div>
  
                      <div class="col-md-6 col-lg-4 wow bounceInUp" data-wow-duration="1.4s">
                      <div class="box">
                          <div class="icon" style={button5}><i class="ion-ios-speedometer-outline" style={speedometer}></i></div>
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
  export default Services