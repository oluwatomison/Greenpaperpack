import React from 'react'
import team1 from '../assests/img/team-1.jpg'
import team2 from '../assests/img/team-2.jpg'
import team3 from '../assests/img/team-3.jpg'
import team4 from '../assests/img/team-4.jpg'
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
                      <img src={team1}className="img-fluid" alt="jjj"/>
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
                      <img src={team2} className="img-fluid" alt="jjj"/>
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
                      <img src={team3} className="img-fluid" alt="jjj"/>
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
                      <img src= {team4}className="img-fluid" alt="jjj"/>
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
  export default Team