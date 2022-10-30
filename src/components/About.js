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
          
            <p id="desc">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam distinctio unde at, repellat iusto velit hic maiores dignissimos consequatur quas quo rerum vel qui, animi tenetur vero ducimus deleniti veritatis!</p>
          </div>
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
    document.getElementById('desc').innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam distinctio unde at, repellat iusto velit hic maiores dignissimos consequatur quas quo rerum vel qui, animi tenetur vero ducimus deleniti veritatis!";
    document.getElementById('bg1').style.color = "#fff";
    document.getElementById('bg1').style.backgroundColor = "#002d52";
    document.getElementById('bg1').style.flexShrink = "1";
    document.getElementById('bg2').style.backgroundColor = "#fff";
    document.getElementById('bg2').style.color = "#000";
    document.getElementById('bg2').style.flexShrink = "4";
    
    
  }
  function changeContentTwo(){
    document.getElementById('desc').innerHTML = "Poutine is a dish of french fries and cheese curds topped with a brown gravy. It emerged in Quebec, Canada, in the late 1950s in the Centre-du-Québec region, though its origins are uncertain and there are several competing claims of having invented the dish.";
    document.getElementById('bg1').style.color = "#000";
    document.getElementById('bg1').style.backgroundColor = "#fff";
    document.getElementById('bg1').style.flexShrink = "4";
    document.getElementById('bg2').style.backgroundColor = "#002d52";
    document.getElementById('bg2').style.color = "#fff";
    document.getElementById('bg2').style.flexShrink = "1";
  }


export default About