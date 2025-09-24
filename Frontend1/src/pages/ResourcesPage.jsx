import React from 'react';
import Resources from '../components/Resources/Resources';


const ResourcesPage = () => {
  //return (

  //   <section style={{padding: '4rem 0', minHeight: '60vh'}}>
  //     <div className="container">
  //       <div className="section-title">
  //         <h2>Groundwater Resources</h2>
  //         <p>Research papers, policy documents, and educational materials</p>
  //       </div>
        
  //       <div className="resources-grid">
  //         <div className="resource-card">
  //           <h3>Research Papers</h3>
  //           <p>Access the latest research on groundwater management and sustainability.</p>
  //           <a href="#" className="btn">Explore Research</a>
  //         </div>

  //         <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
  //      <Resources />
  //       </div>
          
  //         <div className="resource-card">
  //           <h3>Policy Documents</h3>
  //           <p>Government policies and regulations related to groundwater resources.</p>
  //           <a href="#" className="btn">View Policies</a>
  //         </div>
          
  //         <div className="resource-card">
  //           <h3>Educational Materials</h3>
  //           <p>Learn about groundwater conservation and management practices.</p>
  //           <a href="#" className="btn">Access Materials</a>
  //         </div>
  //       </div>
  //     </div>
  //   </section>

  // );

   return (
    <div className="container" style={{ paddingTop: '2rem', paddingBottom: '4rem' }}>
      <Resources />
    </div>
   );

};

export default ResourcesPage;