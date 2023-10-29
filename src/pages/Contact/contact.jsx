import React from "react";
import AvatarDisplay from "./avatarDisplay";
import ContactDetails from "./contactDetails.json";
import StudentDetails from "./studentDetails";
import Nav from "../../components/Nav/Nav";
import Footer from "../../components/Footer/Footer";
import "./contact.css";

const Contact = () => {
  return (
    <>
      <Nav/>
      <div style={{ overflow: "hidden" }}>
      <div className="con-title-main" style={{ fontSize: "1.8em", fontWeight: "bolder"}}>
          Contact Us
          </div>
          <br />
        <div className="student-holder">
          <div className="con-title" style={{ fontSize: "1.3em", fontWeight: "bolder"}}>
          STAFF COORDINATORS
          </div>
          <div className="student-details">
            {ContactDetails["staff"].map((person, index) => {
              return (
                <StudentDetails
                  key={index}
                  name={person.name}
                  phoneNo={person.contactNumber}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div className="student-holder">
          <div className="con-title" style={{ fontSize: "1.3em"}}>
            STUDENT COORDINATORS
          </div>
          <div className="student-details">
            {ContactDetails["students"].map((person, index) => {
              return (
                <StudentDetails
                  key={index}
                  name={person.name}
                  phoneNo={person.contactNumber}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div className="student-holder">
          <div className="con-title" style={{ fontSize: "1.4em"}}>
            WEBSITE DEVELOPERS
          </div>
          <div className="student-details">
            {ContactDetails["WebsiteDevelopers"].map((person, index) => {
              return (
                <StudentDetails
                  key={index}
                  name={person.name}
                  phoneNo={person.contactNumber}
                  index={index}
                />
              );
            })}
          </div>
        </div>
        <div className="event-coordinator-holder">
          <div className="con-title" style={{ fontSize: "1.3em"}}>
            EVENT COORDINATORS
          </div>
          <div className="student-details">
            {ContactDetails["eventCoordinators"].map((person, index) => {
              return (
                <StudentDetails
                  key={index}
                  name={person.name}
                  event={person.event}
                  phoneNo={person.contactNumber}
                  index={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Contact;
