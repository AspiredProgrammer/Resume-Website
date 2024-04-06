import "./ResumeStyles.css"
const { AccordionItem, AccordionHeader, AccordionBody } = require("react-bootstrap");

function TechSkills({item}) {

    return(
        <div>
            {/* To ensure only 1 panel opens upon click, each item is assigned the title as the key: */}
            <AccordionItem eventKey={item.title} id="accordionItem">                                       
                <AccordionHeader id="accordion-header" >
                   {item.title}
               </AccordionHeader>
               <AccordionBody style={{backgroundColor: "#EBFAFE"}}>
                    {item.names} 
                </AccordionBody>

            </AccordionItem>
        </div>

    );
}
export default TechSkills;