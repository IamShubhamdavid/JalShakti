import React from 'react';
import { Link } from 'react-router-dom';
import './Features.css';

// const Features = () => {
//   return (
//     <section className="features">
//       <div className="container">
//         <div className="section-title">
//           <h2>Key Features</h2>
//           <p>Comprehensive groundwater management tools for researchers and policymakers</p>
//         </div>
        
//         <div className="features-grid">
//           <div className="feature-card">
//             <div className="feature-icon">
//               <i className="fas fa-chart-line"></i>
//             </div>
//             <h3>Real-time Analytics</h3>
//             <p>Monitor water level fluctuations and trends with high-frequency data from DWLR stations</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">
//               <i className="fas fa-map-marked-alt"></i>
//             </div>
//             <h3>Interactive Mapping</h3>
//             <p>Visualize groundwater resources and changes across different regions of India</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">
//               <i className="fas fa-tint"></i>
//             </div>
//             <h3>Recharge Estimation</h3>
//             <p>Dynamic calculation of groundwater recharge rates based on real-time data</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">
//               <i className="fas fa-exclamation-triangle"></i>
//             </div>
//             <h3>Alert System</h3>
//             <p>Receive notifications for critical water levels and unusual patterns</p>
//           </div>
          
//           <div className="feature-card">
//             <div className="feature-icon">
//               <i className="fas fa-download"></i>
//             </div>
//             <h3>Data Export</h3>
//             <p>Download reports and data for further analysis and research</p>
//           </div>
          
//             <div className="feature-card">
//               <div className="feature-icon">
//               <i className="fas fa-chart-line"></i>
//             </div>
//             <h3>Real-time Analytics</h3>
//             <p>Monitor water level fluctuations and trends with high-frequency data from DWLR stations</p>
//             <Link to="/data" className="btn" style={{marginTop: '1rem', padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
//               Explore Data
//             </Link>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
//};

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="section-title">
          <h2>Key Features</h2>
          <p>Comprehensive groundwater management tools for researchers and policymakers</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Real-time Analytics</h3>
            <p>Monitor water level fluctuations and trends with high-frequency data from DWLR stations</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-map-marked-alt"></i>
            </div>
            <h3>Interactive Mapping</h3>
            <p>Visualize groundwater resources and changes across different regions of India</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-tint"></i>
            </div>
            <h3>Recharge Estimation</h3>
            <p>Dynamic calculation of groundwater recharge rates based on real-time data</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-exclamation-triangle"></i>
            </div>
            <h3>Alert System</h3>
            <p>Receive notifications for critical water levels and unusual patterns</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-download"></i>
            </div>
            <h3>Data Export</h3>
            <p>Download reports and data for further analysis and research</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-users"></i>
            </div>
            <h3>Collaboration Tools</h3>
            <p>Share insights and collaborate with other researchers and policymakers</p>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Features;