import React from "react";
import Prisoner from "./Prisoner";

const PrisonOverview = props => {
  return (
    <div>
      <div>
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
  );
};

export default PrisonOverview;
