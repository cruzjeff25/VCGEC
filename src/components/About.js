import React from 'react'
import profile from '../img/profile.jpg'

const About = () => {
//   var btns = document.getElementByClassName("bg");
//   for (var i = 0; i <= btns.length; i++) {
//   btns[i].addEventListener("click", function() {
//   var current = document.getElementByClassName("active");
//   current[0].className = current[0].className.replace(" active", "");
//   this.className += " active";
//   });
// }
  return (
    <div>
        <section className="about-container">
          <div className="about-sub-container" >
            <h2 id="bg1" className="active" onClick={changeContentOne}>Mission</h2>
            <h2 id="bg2" onClick={changeContentTwo}>Vision</h2>
          </div>
          <div className="desc-container">
          
            <p id="desc">Enabling members to improve their standard of living through the quality products and services that we provide and to institutionalize socical programs on education and livelihood as well as support and actively participate in the social programs of the community</p>
          </div>
        </section>

        <section className='accreditation'>
          <h2>VCGEC is a member of the following:</h2>
          <ul>
            <li>National Capital Region League Philippine Federation of Credit Coopertive (NCRL-PFCCO)</li>
            <li>Valenzuela Coopertive Managers Club (VCMC)</li>
            <li>Valenzuela Coopertive Development Council (VCDC)</li>
            <li>Metro South Coopertive Bank (MSCB)</li>
            <li>National Confederation of Coopertives (NATCO)</li>
          </ul>
        </section>

        <section className='achievements'>
          <h2>Achievements</h2>
          An Institution Based Cooperative
          <ul>
            <li>Best Performing Cooperative 16 yrs and above category</li>
            <li>2nd Most Outstanding Valenzuela Cooperative 2006 Valkoop Awards</li>
            <li>Most Outstanding Valenzuela Cooperative (Institutional Based Cooperative Category 2007 Valkoop Awards)</li>
            <li>Best in Financial Performance 2008 Valkoop Awards</li>
            <li>Best Performing Cooperative Best in Financial Operation (Medium Cooperative Category) 2009 Valkoop Awards</li>
            <li>Hall of Famer 2010 Valkoop Awards</li>
            <li>Best in Financial Management Best Performing Cooperative (Large Category-Institutional Association Level) 2016 Valkoop Awards</li>
            <li>Best Performing Cooperative (Large Category-Institutional Association Level) 2017 Valkoop Awards</li>
            <li>Best Performing Institutional Cooperative (Large Category-Institutional Association Level) 2018 Valkoop Awards</li>
            <li>Best Performing Institutional Cooperative for Institutional / Occupational / Associational Level (Large Category-Institutional Association Leve) 2019 Valkoop Awards</li>
            <li>Most Outstanding Cooperative (Hall of Famer)(Institutional Based Cooperative Category) 2021 Valenzuela Valkoop Awards</li>
          </ul>
        </section>

        <section className="team-container">
          <div className="header-container">
            <h2>Meet our Team</h2>
            <p>"Success is the best when it's shared"</p>
            <hr></hr>
          </div>
          <div className="profile-container">
            <details open>
              <summary>Board of Director</summary>
                <div className="sub-container">
                  <div class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Chairman</p>
                  </div>
                  <div class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Vice Chairman</p>
                  </div>
                  <div  class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Director</p>
                  </div>
                  <div  class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Director</p>
                  </div>
                  <div  class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Director</p>
                  </div>
                  <div  class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Director</p>
                  </div>
                  <div  class="profile">
                    <img src={profile} alt="profle" />
                    <p class="name">Juan T. Tamad</p>
                    <p class="resp">Director</p>
                  </div> 
                </div>
            </details>
            <details open>
              <summary>Management</summary>
                <details>
                  <summary>General Manager</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">General Manager</p>
                      </div>
                    </div>
              </details>
              <details>
                  <summary>Operation Unit</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Loan Officer</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Internal Control</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Liaison Officer</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Verifier</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Verifier</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Verifier</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Payroll Clerk</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Payroll Clerk</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Payroll Clerk</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Maintenance Officer</p>
                      </div>
                    </div>                   
              </details>
              <details>
                  <summary>Accounting Unit</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Accountant</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Bookkeeper</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Accounting Clerk</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Posting Clerk</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Audit Clerk</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Remittance Clerk</p>
                      </div>
                    </div>
              </details>
            </details>
            <details open>
              <summary>Committee</summary>
                <details>
                  <summary>Election Committee</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Vice Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Secretary54rrrrrrrr=</p>
                      </div>
                    </div>
              </details>
              <details>
                  <summary>Audit & Inventory Committee</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Vice Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Secretary</p>
                      </div>
                    </div>                   
              </details>
              <details>
                  <summary>Ethics Committee</summary>
                  <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Vice Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Secretary</p>
                      </div>
                    </div>       
              </details>
              <details>
                  <summary>Credit & Collection Committee</summary>
                  <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Vice Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Secretary</p>
                      </div>
                    </div>       
              </details>
              <details>
                  <summary>Mediation & Conciliation Committee</summary>
                  <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Vice Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Secretary</p>
                      </div>
                    </div>       
              </details>
              <details>
                  <summary>Education & Training Committee</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Chairman</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Member</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Member</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Member</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Member</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Member</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Member</p>
                      </div>
                    </div>
              </details>
            </details>
            <details>
                  <summary>Secretary & Treasure</summary>
                    <div className="sub-container">
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Secretary</p>
                      </div>
                      <div class="profile">
                        <img src={profile} alt="profle" />
                        <p class="name">Juan T. Tamad</p>
                        <p class="resp">Treasurer</p>
                      </div>
                    </div>
              </details>
          </div>
        </section>
    </div>
    
    
  )

}
  function changeContentOne(){
    document.getElementById('desc').innerHTML = "Enabling members to improve their standard of living through the quality products and services that we provide and to institutionalize socical programs on education and livelihood as well as support and actively participate in the social programs of the community";
    document.getElementById('bg1').style.color = "#fff";
    document.getElementById('bg1').style.backgroundColor = "#002d52";
    document.getElementById('bg1').style.flexShrink = "1";
    document.getElementById('bg2').style.backgroundColor = "#fff";
    document.getElementById('bg2').style.color = "#000";
    document.getElementById('bg2').style.flexShrink = "4";
    
    
  }
  function changeContentTwo(){
    document.getElementById('desc').innerHTML = '"Stable and progressive Life towards abundance"';
    document.getElementById('bg1').style.color = "#000";
    document.getElementById('bg1').style.backgroundColor = "#fff";
    document.getElementById('bg1').style.flexShrink = "4";
    document.getElementById('bg2').style.backgroundColor = "#002d52";
    document.getElementById('bg2').style.color = "#fff";
    document.getElementById('bg2').style.flexShrink = "1";
  }


export default About