import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import './RealTimeData.css';

const RealTimeData = () => {
  const [lastUpdateTime, setLastUpdateTime] = useState('Just now');
  const realtimeChartRef = useRef(null);
  const [realTimeData, setRealTimeData] = useState({
    waterLevel: 18.6,
    rechargeRate: 2.4,
    stationsReporting: '5,217/5,260',
    criticalRegions: 43
  });
  
  useEffect(() => {
    const realtimeCtx = realtimeChartRef.current.getContext('2d');
    const realtimeChart = new Chart(realtimeCtx, {
      type: 'line',
      data: {
        labels: [],
        datasets: [{
          label: 'Water Level (m)',
          data: [],
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
            display: true
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
    
    // Simulate real-time data updates
    const interval = setInterval(() => {
      const now = new Date();
      setLastUpdateTime(now.toLocaleTimeString());
      
      // Update real-time chart with new data point
      const label = now.toLocaleTimeString([], {hour: '2-digit', minute: '2-digit'});
      const newData = 18 + Math.random() * 2;
      
      if (realtimeChart.data.labels.length > 15) {
        realtimeChart.data.labels.shift();
        realtimeChart.data.datasets[0].data.shift();
      }
      
      realtimeChart.data.labels.push(label);
      realtimeChart.data.datasets[0].data.push(newData);
      realtimeChart.update();
      
      // Update data cards with slight variations
      setRealTimeData({
        waterLevel: (18 + Math.random() * 0.5).toFixed(1),
        rechargeRate: (2.3 + Math.random() * 0.2).toFixed(1),
        stationsReporting: '5,217/5,260',
        criticalRegions: 43
      });
    }, 5000);
    
    return () => {
      clearInterval(interval);
      realtimeChart.destroy();
    };
  }, []);
  
  return (
    <section className="realtime-data">
      <div className="container">
        <div className="section-title">
          <h2>Real-Time Groundwater Data</h2>
          <p>Live monitoring from DWLR stations across India</p>
        </div>
        
        <div className="data-header">
          <h3>Current Readings</h3>
          <div className="refresh-info">
            <i className="fas fa-sync-alt"></i>
            <span>Updated: <span>{lastUpdateTime}</span></span>
          </div>
        </div>
        
        <div className="data-grid">
          <div className="data-card">
            <h3>Average Water Level</h3>
            <div className="data-value">{realTimeData.waterLevel}<span className="data-unit"> meters</span></div>
          </div>
          
          <div className="data-card">
            <h3>Recharge Rate</h3>
            <div className="data-value">{realTimeData.rechargeRate}<span className="data-unit"> cm/day</span></div>
          </div>
          
          <div className="data-card">
            <h3>Stations Reporting</h3>
            <div className="data-value">{realTimeData.stationsReporting}</div>
          </div>
          
          <div className="data-card critical">
            <h3>Critical Regions</h3>
            <div className="data-value">{realTimeData.criticalRegions}<span className="data-unit"> areas</span></div>
          </div>
        </div>
        
        <div className="chart-container">
          <canvas ref={realtimeChartRef}></canvas>
        </div>
      </div>
    </section>
  );
};

export default RealTimeData;