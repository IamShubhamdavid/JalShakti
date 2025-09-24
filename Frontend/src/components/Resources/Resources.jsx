import React, { useState } from 'react';
import './Resources.css';

const Resources = () => {
  const [activeResource, setActiveResource] = useState(null);
  
  const toggleResource = (index) => {
    if (activeResource === index) {
      setActiveResource(null);
    } else {
      setActiveResource(index);
    }
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
          pages: "42"
        },
        { 
          title: "Sustainable Groundwater Management", 
          link: "#", 
          icon: "fas極端 fa-file-pdf",
          description: "Strategies and best practices for sustainable groundwater management in arid regions.",
          author: "National Water Institute",
          date: "January 2023",
          pages: "36"
        },
        { 
          title: "Climate Change Impact on Water Resources", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Analysis of how changing climate patterns are affecting groundwater resources across India.",
          author: "Climate Research Center",
          date: "November 2022",
          pages: "28"
        },
        { 
          title: "Aquifer Recharge Techniques", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Evaluation of various artificial recharge methods and their effectiveness in different geological settings.",
          author: "Dr. Priya Sharma",
          date: "August 2022",
          pages: "51"
        },
        { 
          title: "Remote Sensing in Water Management", 
          link: "#", 
          icon: "fas fa-file-pdf",
          description: "Application of satellite imagery and remote sensing technologies for groundwater monitoring.",
          author: "ISRO Space Applications Centre",
          date: "June 2022",
          pages:極端 "39"
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
          pages: "64"
        },
        { 
          title: "Groundwater Management Guidelines", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Detailed guidelines for state governments on groundwater management and regulation.",
          author: "Central Ground Water Board",
          date: "September 2022",
          pages: "48"
        },
        { 
          title: "State Water Conservation Policies", 
         極端 link: "#", 
          icon: "fas fa-file-contract",
          description: "Compilation of water conservation極端 policies adopted by various state governments.",
          author: "NITI Aayog",
          date: "July 2022",
          pages: "72"
        },
        { 
          title: "Water Rights Framework", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Legal framework defining water rights and allocation mechanisms in water-stressed regions.",
          author: "Law Commission of India",
          date: "February 2022",
          pages: "56"
        },
        { 
          title: "Irrigation Management Policies", 
          link: "#", 
          icon: "fas fa-file-contract",
          description: "Policies for efficient irrigation water management and reducing agricultural water waste.",
          author: "Ministry of Agriculture",
          date: "May 2022",
          pages: "41"
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
          duration: "2h 15m"
        },
        { 
          title: "Water Conservation Guide", 
          link: "#", 
          icon: "fas fa-book",
          description: "Practical guide for households and communities on water conservation techniques.",
          author: "Jal Shakti Ministry",
          date: "March 2022",
          pages: "38"
        },
        { 
          title: "Data Interpretation Manual", 
          link: "#", 
          icon: "fas fa-book-open",
          description: "Guide to interpreting groundwater data, understanding hydrographs, and analyzing trends.",
          author: "Central Ground Water Board",
          date: "January 2023",
          pages: "63"
        },
        { 
          title: "Case Studies Collection", 
          link: "#", 
          icon: "fas fa-folder-open",
          description: "Compilation of successful groundwater management case studies from across India.",
          author: "NITI Aayog",
          date: "December 2022",
          pages: "89"
        },
        { 
          title: "Training Webinars", 
          link: "#", 
          icon: "fas fa-chalkboard-teacher",
          description: "Series of training webinars for water resource professionals and policymakers.",
          author: "National Water Academy",
          date: "Ongoing",
          duration: "12 sessions"
        }
      ]
    }
  ];
  
  return (
    <section className="resources">
      <div className="container">
        <div className="section-title">
          <h2>Knowledge Resources</h2>
          <p>Access research, policy documents, and educational materials</p>
        </div>
        
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
              <div className="resource-content">
                <div className="resource-list">
                  {resource.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="resource-item">
                      <a href={item.link}>
                        <i className={item.icon}></i>
                        {item.title}
                      </a>
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
    </section>
  );
};

export default Resources;