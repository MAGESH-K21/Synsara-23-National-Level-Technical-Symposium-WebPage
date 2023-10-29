import React from "react";

const AvatarDisplay = ({ name, designation, organisation, image }) => {
  return (
    <>
      <div
        className="text-center text-white p-4"
        style={{
          fontSize: "calc(13px + (14 - 13) * ((100vw - 300px) / (1600 - 300)))",
        }}
        data-aos="fade-up"
        data-aos-duration="400"
      >
        <img
          src={image}
          alt="person-face"
          className="rounded-circle"
          style={{
            width: "120px",
            height: "120px",
          }}
        />
        <div className="m-2">
          <div style={{ fontWeight: "bolder", fontSize: "1.1em" }}>{name}</div>
          <div>{designation}</div>
          {organisation.startsWith("+91") === true ? (
            <a href={"tel:" + organisation}>{organisation}</a>
          ) : (
            <div>{organisation}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default AvatarDisplay;
