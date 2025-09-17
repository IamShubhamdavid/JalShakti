import React, { useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const waterLevelChartRef = useRef(null);
  const rechargeChartRef = useRef(null);
  const stationsChartRef = useRef(null);
  
  useEffect(() => {
    // Water Level Chart
    const waterLevelCtx = waterLevelChartRef.current.getContext('2d');
    const waterLevelChart = new Chart(waterLevelCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
          label: 'Water Level (m)',
          data: [45, 52, 48, 40, 35, 30, 42, 55, 60, 58, 52, 47],
          borderColor: '#1a6fb4',
          backgroundColor: 'rgba(26, 111, 180, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: false,
            grid: {
              drawBorder: false
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
    
    // Recharge Rate Chart
    const rechargeCtx = rechargeChartRef.current.getContext('2d');
    const rechargeChart = new Chart(rechargeCtx, {
      type: 'bar',
      data: {
        labels: ['North', 'South', 'East', 'West', 'Central'],
        datasets: [{
          label: 'Recharge Rate (%)',
          data: [65, 45, 75, 35, 55],
          backgroundColor: [
            'rgba(32, 201, 151, 0.7)',
            'rgba(26, 111, 180, 0.7)',
            'rgba(32, 201, 151, 0.7)',
            'rgba(255, 107, 107, 0.7)',
            'rgba(26, 111, 180, 0.7)'
          ],
          borderColor: [
            'rgb(32, 201, 151)',
            'rgb(26, 111, 180)',
            'rgb(32, 201, 151)',
            'rgb(255, 107, 107)',
            'rgb(26, 111, 180)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            grid: {
              drawBorder: false
            }
          },
          x: {
            grid: {
              display: false
            }
          }
        }
      }
    });
    
    // Stations Chart
    const stationsCtx = stationsChartRef.current.getContext('2d');
    const stationsChart = new Chart(stationsCtx, {
      type: 'doughnut',
      data: {
        labels: ['Normal', 'Above Average', 'Below Average', 'Critical'],
        datasets: [{
          data: [2860, 1250, 750, 400],
          backgroundColor: [
            'rgba(26, 111, 180, 0.7)',
            'rgba(32, 201, 151, 0.7)',
            'rgba(255, 107, 107, 0.7)',
            'rgba(255, 193, 7, 0.7)'
          ],
          borderColor: [
            'rgb(26, 111, 180)',
            'rgb(32, 201, 151)',
            'rgb(255, 107, 107)',
            'rgb(255, 193, 7)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: {
            position: 'bottom'
          }
        }
      }
    });
    
    return () => {
      waterLevelChart.destroy();
      rechargeChart.destroy();
      stationsChart.destroy();
    };
  }, []);
  
  return (
    <section className="dashboard">
      <div className="container">
        <div className="section-title">
          <h2>National Groundwater Dashboard</h2>
          <p>Real-time data and analytics for informed decision-making</p>
        </div>
        
        <div className="dashboard-grid">
          <div className="dashboard-card">
  <div className="card-header">
    <h3>Current Water Levels</h3>
  </div>
  <div className="card-body">
    <div className="stat">
      <div className="stat-value">62.3%</div>
      <div className="stat-label">National Average</div>
    </div>
    <div className="chart-container">
      <canvas ref={waterLevelChartRef}></canvas>
    </div>
    <div style={{textAlign: 'center', marginTop: '1rem'}}>
      <Link to="/data" className="btn" style={{padding: '0.5rem 1rem', fontSize: '0.9rem'}}>
        View Details
      </Link>
    </div>
  </div>
</div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Recharge Rates</h3>
            </div>
            <div className="card-body">
              <div className="stat">
                <div className="stat-value">42.8%</div>
                <div className="stat-label">Above Critical Level</div>
              </div>
              <div className="chart-container">
                <canvas ref={rechargeChartRef}></canvas>
              </div>
            </div>
          </div>
          
          <div className="dashboard-card">
            <div className="card-header">
              <h3>Stations Overview</h3>
            </div>
            <div className="card-body">
              <div className="stat">
                <div className="stat-value">5,260</div>
                <div className="stat-label">Active DWLR Stations</div>
              </div>
              <div className="chart-container">
                <canvas ref={stationsChartRef}></canvas>
              </div>
            </div>
          </div>
        </div>
    </section>
  );
};

export default Dashboard;