import React from "react";
import Prisoner from "./Prisoner";
import "./PrisonOverview.css";

const PrisonOverview = props => {
  return (
    <div className="overview-container">
      <div className="overview-content">
        <div className="prison-info">
          <h2>{props.prisonInfo.name}</h2>
          <p>{props.prisonInfo.location}</p>
          <p>{props.prisonInfo.phoneNumber}</p>
        </div>

        {props.prisoners.map(p => (
          <Prisoner
            name={p.name}
            skills={p.skills}
            availability={p.availability}
            picture={p.picture}
            profile={p.profile}
          />
        ))}
      </div>
    </div>
  );
};

export default PrisonOverview;
