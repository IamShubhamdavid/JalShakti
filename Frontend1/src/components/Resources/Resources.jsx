import React, { useState } from 'react';
import ResourceModal from '../ResourceModal/ResourceModal';
import './Resources.css';

const Resources = () => {
  const [activeResource, setActiveResource] = useState(null);
  const [selectedResource, setSelectedResource] = useState(null);
  
  const toggleResource = (index) => {
    if (activeResource === index) {
      setActiveResource(null);
    } else {
      setActiveResource(index);
    }
  };
  
  const openResourceDetails = (resource) => {
    setSelectedResource(resource);
  };
  
  const closeResourceDetails = () => {
    setSelectedResource(null);
  };
  
  const resources = [
    {
      title: "Research Papers",
      icon: "fas fa-file-alt",
      items: [
        { 
          title: "Groundwater Depletion in Northwest India", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "A comprehensive study on the depletion patterns in Northwestern states of India, analyzing data from 2000-2022.",
          author: "Dr. Rajesh Kumar et al.",
          date: "March 2023",
          pages: "42",
          details: "This research paper examines the alarming rate of groundwater depletion in the Northwestern region of India, focusing on states like Punjab, Haryana, and Rajasthan. The study utilizes data from over 2,000 monitoring wells and satellite-based GRACE observations to analyze trends and patterns.",
          keyFindings: [
            "Groundwater levels declining at an average rate of 0.7 meters per year",
            "Agricultural irrigation accounts for 89% of groundwater extraction",
            "60% of monitored wells show critical depletion levels",
            "Projected water scarcity could affect 25 million people by 2030"
          ],
          recommendations: [
            "Implement water-efficient irrigation techniques",
            "Promote crop diversification away from water-intensive crops",
            "Enhance groundwater recharge through artificial methods",
            "Strengthen policy enforcement on groundwater extraction"
          ],
          topics: ["Groundwater Depletion", "Northwest India", "Agricultural Impact", "Water Management"]
        },
        { 
          title: "Sustainable Groundwater Management", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Strategies and best practices for sustainable groundwater management in arid regions.",
          author: "National Water Institute",
          date: "January 2023",
          pages: "36",
          details: "This comprehensive guide presents evidence-based strategies for sustainable groundwater management, particularly focused on arid and semi-arid regions. It combines scientific research with practical field applications.",
          keyFindings: [
            "Community-based management approaches show 40% better outcomes",
            "Integrated water resource management reduces depletion by 35%",
            "Real-time monitoring systems improve decision-making accuracy by 60%"
          ],
          recommendations: [
            "Establish local water user associations",
            "Implement tiered pricing for water extraction",
            "Develop integrated surface and groundwater management plans",
            "Invest in modern monitoring infrastructure"
          ],
          topics: ["Sustainable Management", "Arid Regions", "Water Conservation", "Policy Framework"]
        },
        { 
          title: "Climate Change Impact on Water Resources", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Analysis of how changing climate patterns are affecting groundwater resources across India.",
          author: "Climate Research Center",
          date: "November 2022",
          pages: "28",
          details: "This study examines the complex relationships between climate change and groundwater resources in India, using climate models and hydrological data to project future scenarios.",
          keyFindings: [
            "Monsoon variability has increased by 25% over the past two decades",
            "Recharge rates decreased by 15% in drought-prone regions",
            "Extreme weather events affecting groundwater quality in coastal areas"
          ],
          topics: ["Climate Change", "Water Resources", "Monsoon Variability", "Extreme Weather"]
        },
        { 
          title: "Aquifer Recharge Techniques", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Evaluation of various artificial recharge methods and their effectiveness in different geological settings.",
          author: "Dr. Priya Sharma",
          date: "August 2022",
          pages: "51",
          details: "This paper evaluates different artificial recharge techniques and their applicability in various geological conditions across India. It includes case studies and performance metrics.",
          keyFindings: [
            "Check dams increase groundwater recharge by 35-40% in suitable areas",
            "Recharge wells show 60% efficiency in urban settings",
            "Percolation tanks most effective in hard rock areas"
          ],
          recommendations: [
            "Site-specific selection of recharge techniques",
            "Community participation in recharge projects",
            "Regular monitoring of recharge effectiveness"
          ],
          topics: ["Aquifer Recharge", "Artificial Recharge", "Water Harvesting", "Geological Settings"]
        },
        { 
          title: "Remote Sensing in Water Management", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Application of satellite imagery and remote sensing technologies for groundwater monitoring.",
          author: "ISRO Space Applications Centre",
          date: "June 2022",
          pages: "39",
          details: "This research explores the use of remote sensing technologies for groundwater monitoring and management, demonstrating how satellite data can complement traditional monitoring methods.",
          keyFindings: [
            "Satellite data can detect groundwater changes with 85% accuracy",
            "Combined with ground data, remote sensing improves monitoring efficiency by 70%",
            "Cost-effective for large-scale monitoring"
          ],
          topics: ["Remote Sensing", "Satellite Monitoring", "GIS Applications", "Technology"]
        }
      ]
    },
    {
      title: "Policy Documents",
      icon: "fas fa-landmark",
      items: [
        { 
          title: "National Water Policy 2020", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "The comprehensive national policy framework for water management, conservation, and distribution.",
          author: "Ministry of Jal Shakti",
          date: "April 2020",
          pages: "64",
          details: "The National Water Policy 2020 represents a comprehensive framework for water governance in India. It addresses emerging challenges and sets the direction for sustainable water resource management.",
          keyFindings: [
            "Emphasizes demand management and water use efficiency",
            "Promotes participatory approach to water management",
            "Prioritizes drinking water over other uses",
            "Encourages water recycling and reuse"
          ],
          recommendations: [
            "Establish river basin organizations for integrated management",
            "Develop national framework for groundwater management",
            "Promote water-efficient technologies and practices",
            "Strengthen legal framework for water governance"
          ],
          topics: ["Water Policy", "Governance", "Resource Allocation", "Legal Framework"]
        },
        { 
          title: "Groundwater Management Guidelines", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Detailed guidelines for state governments on groundwater management and regulation.",
          author: "Central Ground Water Board",
          date: "September 2022",
          pages: "48",
          details: "These guidelines provide a comprehensive framework for state governments to manage groundwater resources effectively, including regulatory measures, monitoring protocols, and community engagement strategies.",
          keyFindings: [
            "States with regulatory frameworks show 30% better groundwater management",
            "Participatory monitoring increases compliance by 45%",
            "Data-driven decision making improves outcomes by 55%"
          ],
          topics: ["Management Guidelines", "State Implementation", "Regulatory Framework", "Community Engagement"]
        },
        { 
          title: "State Water Conservation Policies", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Compilation of water conservation policies adopted by various state governments.",
          author: "NITI Aayog",
          date: "July 2022",
          pages: "72",
          details: "This document compiles and analyzes water conservation policies implemented by different state governments across India, highlighting best practices and lessons learned.",
          keyFindings: [
            "Maharashtra's water conservation program reduced water stress by 25%",
            "Rajasthan's community-based approach increased water availability by 40%",
            "Tamil Nadu's regulatory framework improved compliance by 60%"
          ],
          topics: ["State Policies", "Water Conservation", "Best Practices", "Case Studies"]
        },
        { 
          title: "Water Rights Framework", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Legal framework defining water rights and allocation mechanisms in water-stressed regions.",
          author: "Law Commission of India",
          date: "February 2022",
          pages: "56",
          details: "This framework establishes the legal basis for water rights and allocation in water-stressed regions, balancing competing demands and ensuring equitable distribution.",
          keyFindings: [
            "Clear water rights reduce conflicts by 70%",
            "Tradable water rights improve allocation efficiency",
            "Community-based rights management most effective"
          ],
          topics: ["Water Rights", "Legal Framework", "Allocation Mechanisms", "Equity"]
        },
        { 
          title: "Irrigation Management Policies", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Policies for efficient irrigation water management and reducing agricultural water waste.",
          author: "Ministry of Agriculture",
          date: "May 2022",
          pages: "41",
          details: "These policies focus on improving irrigation efficiency and reducing water waste in agriculture, which accounts for the majority of water consumption in India.",
          keyFindings: [
            "Drip irrigation can reduce water use by 40-60%",
            "Scheduling irrigation based on soil moisture saves 25% water",
            "Farmers training programs improve adoption of efficient practices"
          ],
          topics: ["Irrigation", "Agriculture", "Water Efficiency", "Policy Implementation"]
        }
      ]
    },
    {
      title: "Educational Resources",
      icon: "fas fa-graduation-cap",
      items: [
        { 
          title: "Groundwater Basics Tutorial", 
          link: "#", 
          icon: "fas fa-video",
          description: "An introductory video series explaining groundwater concepts, movement, and management principles.",
          author: "Dr. Anil Kapoor",
          date: "October 2022",
          duration: "2h 15m",
          details: "This comprehensive tutorial series covers fundamental concepts of groundwater hydrology, designed for students, policymakers, and water resource professionals. The series includes animations, field examples, and expert interviews.",
          keyFindings: [
            "Viewers report 70% better understanding of groundwater concepts",
            "Interactive elements increase knowledge retention by 40%",
            "Case studies help bridge theory and practice"
          ],
          topics: ["Groundwater Basics", "Hydrology", "Educational Content", "Water Cycle"]
        },
        { 
          title: "Water Conservation Guide", 
          link: "#", 
          icon: "fas fa-book",
          description: "Practical guide for households and communities on water conservation techniques.",
          author: "Jal Shakti Ministry",
          date: "March 2022",
          pages: "38",
          details: "This practical guide provides actionable strategies for water conservation at household and community levels. It includes technical specifications, cost-benefit analyses, and implementation guidelines.",
          keyFindings: [
            "Simple conservation measures can reduce household water use by 30%",
            "Community-level interventions have 3x the impact of individual efforts",
            "Rainwater harvesting can meet 40% of non-potable water needs"
          ],
          recommendations: [
            "Install water-efficient fixtures and appliances",
            "Implement rainwater harvesting systems",
            "Practice landscape water conservation",
            "Promote water-conscious behaviors"
          ],
          topics: ["Water Conservation", "Household Practices", "Community Action", "Rainwater Harvesting"]
        },
        { 
          title: "Data Interpretation Manual", 
          link: "#", 
          icon: "fas fa-book-open",
          description: "Guide to interpreting groundwater data, understanding hydrographs, and analyzing trends.",
          author: "Central Ground Water Board",
          date: "January 2023",
          pages: "63",
          details: "This manual provides comprehensive guidance on interpreting groundwater data, including hydrograph analysis, trend detection, and data quality assessment.",
          keyFindings: [
            "Proper data interpretation improves decision accuracy by 50%",
            "Standardized methods ensure consistency across regions",
            "Visualization tools enhance understanding of complex data"
          ],
          topics: ["Data Interpretation", "Hydrographs", "Trend Analysis", "Data Quality"]
        },
        { 
          title: "Case Studies Collection", 
          link: "#", 
          icon: "fas fa-folder-open",
          description: "Compilation of successful groundwater management case studies from across India.",
          author: "NITI Aayog",
          date: "December 2022",
          pages: "89",
          details: "This collection presents detailed case studies of successful groundwater management initiatives from different regions of India, highlighting strategies, challenges, and outcomes.",
          keyFindings: [
            "Community participation is key to success in 85% of cases",
            "Integrated approaches yield better long-term results",
            "Adaptive management crucial for sustainability"
          ],
          topics: ["Case Studies", "Best Practices", "Success Stories", "Implementation"]
        },
        { 
          title: "Training Webinars", 
          link: "#", 
          icon: "fas fa-chalkboard-teacher",
          description: "Series of training webinars for water resource professionals and policymakers.",
          author: "National Water Academy",
          date: "Ongoing",
          duration: "12 sessions",
          details: "This series of webinars provides advanced training on various aspects of groundwater management, featuring experts from academia, government, and industry.",
          keyFindings: [
            "Interactive webinars increase participant engagement by 60%",
            "Practical exercises enhance learning outcomes",
            "Networking opportunities valuable for professionals"
          ],
          topics: ["Training", "Professional Development", "Webinars", "Capacity Building"]
        }
      ]
    }
  ];
  
  return (
    <section className="resources">
      <div className="container">
        <div className="section-title">
          <h2>Groundwater Resources</h2>
          <p>Research papers, policy documents, and educational materials</p>
        </div>
        <h3>Research Papers</h3>
        <p>Access the latest research on groundwater management and sustainability.</p>
        <h3>Policy Documents</h3>
         <p>Government policies and regulations related to groundwater resources.</p>
         <h3>Educational Materials</h3>
          <p>Learn about groundwater conservation and management practices.</p>
        {/* <a href="#" className="btn">Explore Research</a> */}
        <div className="resources-grid">
          {resources.map((resource, index) => (
            
            <div
              key={index} 
              className={`resource-card ${activeResource === index ? 'active' : ''}`}
              onClick={() => toggleResource(index)}
            >
              
              <div className="resource-header">
                <h3>{resource.title}</h3>
                
                <i className={`${resource.icon} resource-icon`}></i>
                
              </div>

              {/* <a href="#" className="btn">Explore Research</a> */}
              
              <div className="resource-content">
                <div className="resource-list">
                  {resource.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex} 
                      className="resource-item" 
                      onClick={(e) => {
                        e.stopPropagation();
                        openResourceDetails(item);
                      }}
                    >
                      <a href={item.link}>
                        <i className={item.icon}></i>
                        {item.title}
                      </a>
                       <a href="#" className="btn">Explore Resources</a>
                      <p className="resource-description">{item.description}</p>
                      <div className="resource-meta">
                        <span>{item.author} • {item.date}</span>
                        <span>{item.pages || item.duration}</span>
                      </div>
                      <div className="resource-meta">
                        <button className="download-btn">
                          <i className="fas fa-download"></i> Download
                        </button>
                        <a href="#" style={{color: '#1a6fb4', fontSize: '0.8rem'}}>
                          <i className="fas fa-share-alt"></i> Share
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <ResourceModal 
        resource={selectedResource} 
        onClose={closeResourceDetails} 
      />
    </section>
  );
};

export default Resources;