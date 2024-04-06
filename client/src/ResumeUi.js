// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

import "./ResumeStyles.css";
import { Accordion, Card, CardBody, CardHeader } from "react-bootstrap";
import TechSkills from "./TechSkillsAcc";
import image from "./assets/Images/profilePicture.jpg";

const ResumeUi = (props) => {
  return (
    <div>
      <nav class="navbar sticky-top navbar-collapse">
        <div class="container-fluid">
          <a href="a" class="navbar-brand px-5">
            Welcome
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarDropDown"
            aria-controls="navbarDropDown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>{" "}
            {/*the three line button in the navigational bar*/}
          </button>
          <div class="collapse navbar-collapse" id="navbarDropDown">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#top">
                  Top
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#skills">
                  Skills
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#edu">
                  Education
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link active " aria-current="page" href="#wrk">
                  Work Experience
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div class="container mt-5 mb-5">
        <div className="contact">
          <h2>{props.contactInfo.title}</h2>
          <div class="card" id="contactList">
            <li>{props.contactInfo.address}</li>
            <li>{props.contactInfo.phone}</li>
            <li>
              <a href={props.contactInfo.linkedin}>LinkedIn</a>
            </li>
            <li>
              <a href={props.contactInfo.mail}>{props.contactInfo.mail}</a>
            </li>
            <li>
              <a href={props.contactInfo.git}>GitHub</a>
            </li>
          </div>
        </div>
        {/* Backup contact list to display the information properly as when the screen got smaller, the text shifted awkwardly */}
        <div class="container my-5">
          <div className="otherContact">
            <h2>{props.contactInfo.title}</h2>
            <div class="card" id="contactList">
              <li>{props.contactInfo.address}</li>
              <li>{props.contactInfo.phone}</li>
              <li>
                <a href={props.contactInfo.linkedin}>LinkedIn</a>
              </li>
              <li>
                <a href={props.contactInfo.mail}>{props.contactInfo.mail}</a>
              </li>
              <li>
                <a href={props.contactInfo.git}>GitHub</a>
              </li>
            </div>
          </div>
        </div>

        {/* Backup image in case user screen is smaller: */}
        <div className="image2">
          <img src={image} alt="profile" class="my-5"></img>
        </div>

        <div class="mb-5" className="overview">
          <h2>{props.overview.title}</h2>
          <div class=" d-flex">
            <div class="card p-3" style={{ border: "2px dashed black" }}>
              {props.overview.summary && props.overview.summary.join(" ")}
            </div>

            <img src={image} alt="profile" class="m-3"></img>
          </div>
        </div>

        <div id="skills" class="my-5">
          <h2>Summary of Skills</h2>
          <div id="tech" class="container mb-4 mt-4">
            {/* The only way the accordion worked, where you click and only ONE opens, 
                        was using the built-in "Accordion" in Bootstrap */}
            <Accordion style={{ boxShadow: "1px 1px 4px black" }}>
              {/* checking if techskills was fetched first 
                            before mapping as sometimes it throws an error saying it's undefined */}
              {props.techSkills &&
                props.techSkills.map((i) => (
                  <TechSkills key={i.title} item={i} />
                ))}
            </Accordion>
          </div>

          <div class="container" id="soft">
            {props.softSkills &&
              props.softSkills.map((item) => (
                // For whatever reason, creating the card only worked using the "Card" constant
                <Card
                  style={{
                    marginBottom: "10px",
                    boxShadow: "1px 1px 4px black",
                  }}
                >
                  <CardHeader style={{ backgroundColor: "#9EE6FA" }}>
                    {" "}
                    {item.title}:{" "}
                  </CardHeader>
                  <CardBody>{item.examples}</CardBody>
                </Card>
              ))}
          </div>
        </div>

        <div id="edu" class="my-5">
          <h2>Education</h2>
          <div>
            {props.education &&
              props.education.map((item) => (
                <div
                  class=" card mb-5 d-flex shadow"
                  style={{ border: "2px solid black" }}
                >
                  <h5
                    class="card-header"
                    style={{ backgroundColor: "#99EACD" }}
                  >
                    {item.title}
                  </h5>
                  <div class="card-body">
                    <p class="card-text">{item.date}</p>
                    <p class="card-text">{item.school}</p>
                    <div>
                      {/* since education has to be definied to reach this point, no check needed: */}
                      {item.points.map((pt) => (
                        <li class="card-text mb-3">{pt} </li>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div class="my-5" id="wrk">
          <h2>Work Experience</h2>
          <div class="card shadow">
            <h5 class="card-header" style={{ backgroundColor: "#9EE6FA" }}>
              {props.workExp.name}
            </h5>
            <div class="card-body">
              <p class="card-text">{props.workExp.type}</p>
              <p class="card-text">{props.workExp.date}</p>
              <p class="card-text">{props.workExp.company}</p>

              <ul style={{ listStyleType: "circle" }}>
                {props.workExp.points &&
                  props.workExp.points.map((pt) => (
                    <li class="card-text mb-3">{pt}</li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ResumeUi;
