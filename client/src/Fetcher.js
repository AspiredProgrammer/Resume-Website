import React, { useEffect, useState } from 'react';
import ResumeUi from './ResumeUi';

function Fetcher() {
    
    const [contactInfo, setContactInfo] = useState({});
    const [techSkills, setTechSkills] = useState([]);
    const [softSkills, setSoftSkills] = useState([]);
    const [education, setEducation] = useState([]);
    const [workExp, setWorkExp] = useState({});
    const [overview, setOverview] = useState({});
    
    useEffect(() => {
          
        fetch("https://resume-website-client.vercel.app/getContactInfo")
            .then((response) => response.json() )
            .then((data) => setContactInfo(data))
            .catch((error) => console.log("Error fetching contact details", error));
            

        fetch("https://resume-website-client.vercel.app/getOverview")
            .then((response) => response.json())
            .then((data) => setOverview(data))
            .catch((error) => console.log("Error fetching overview details", error));
        
        fetch("https://resume-website-client.vercel.app/getTechSkills")
            .then((response) => response.json())
            .then((data) => setTechSkills(data))
            .catch((error) => console.log("Error fetching tech skills", error));
         

        fetch("https://resume-website-client.vercel.app/getSoftSkills")
            .then((response) => response.json())
            .then((data) => setSoftSkills(data))
            .catch((error) => console.log("Error fetching soft skills", error));
          
        
        fetch("https://resume-website-client.vercel.app/getEducation")
            .then((response) => response.json())
            .then((data) => setEducation(data))
            .catch((error) => console.log("Error fetching education details", error));
            
        
        fetch("https://resume-website-client.vercel.app/getExperience")
            .then((response) => response.json())
            .then((data) => setWorkExp(data))
            .catch((error) => console.log("Error fetching work experience details", error));
           

    }, []); 
       
    return (    
        // To separate the fetching, the fetched will be sent over as props to another component:
        <ResumeUi
            contactInfo={contactInfo}
            overview={overview}
            techSkills={techSkills}
            softSkills={softSkills}
            education={education}
            workExp={workExp}
        />        
    );
}
export default Fetcher;
