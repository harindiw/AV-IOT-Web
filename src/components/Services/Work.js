import react from 'react';
import "./Work.css"

export const Work = () => {

    return (
  
      <div id="work">
    <h1 className="work-h">How We Work</h1>
    <h1 className="work-h1">Working with us is simple! </h1>
    
    <div class="row">
  <div class="work-column">
    <div class="work-card">
    <h1 className="card-blue">1.Discussion</h1>
    <h1 className="card-para">Engage with clients, analyze needs including 
functionalities, scalability, security, and budget.</h1>
    </div>
  </div>

  <div class="work-column">
    <div class="work-card">
    <h1 className="card-green">2.Define</h1>
    <h1 className="card-para">Collaborate on IoT strategy, design architecture detailing device roles and interactions.</h1>
    </div>
  </div>
  
  <div class="work-column">
    <div class="work-card">
    <h1 className="card-purple">3.Develop</h1>
    <h1 className="card-para">Select hardware, develop software, and configure connectivity based on client needs.</h1>
    </div>
  </div>
  
</div>

<div class="row">
  <div class="work-column">
    <div class="work-card">
    <h1 className="card-blue">4.Test</h1>
    <h1 className="card-para">Implement robust security measures, conduct comprehensive testing to ensure reliability.</h1>
    </div>
  </div>

  <div class="work-column">
    <div class="work-card">
    <h1 className="card-green">5.Support</h1>
    <h1 className="card-para">Deploy, integrate IoT solution, provide training, support for seamless operation.</h1>
    </div>
  </div>
  
  <div class="work-column">
    <div class="work-card">
    <h1 className="card-purple">6.Update</h1>
    <h1 className="card-para">Gather feedback, iterate solution with new features, technologies for continuous improvement.</h1>
    </div>
  </div>
  
</div>
  </div>
    );
  };