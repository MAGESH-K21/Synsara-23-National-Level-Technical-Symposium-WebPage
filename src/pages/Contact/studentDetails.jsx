import React from "react";
import "./studentDetails.css";
function StudentDetails({ name, event, phoneNo, index }) {
  return (
    <>
      <div
        id="studentDetails"
        data-aos={index & 1 ? "fade-up-left" : "fade-up-right"}
        data-aos-duration="400"
      >
        <div id="student-body">
          <p className="content-display">{name}</p>
          {event && <p className="content-display">Event: {event}</p>}
          <p className="content-display">
            Phone no:{" "}
            <a href={"tel:" + phoneNo} className="number">
              {phoneNo}
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default StudentDetails;
