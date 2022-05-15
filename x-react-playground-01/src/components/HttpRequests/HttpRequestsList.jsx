import React from "react";

const HttpRequestsList = ({ mainArray, ...props }) => {
  const dangerous = <b>Dangerous</b>;
  const notDangerous = <p style={{ display: "inline-block" }}>Not Dangerous</p>;

  return (
    <li>
      <h2>{mainArray[0]}</h2>
      {mainArray[1].map((asteroid, index) => {
        return (
          <div
            key={`${index} ${asteroid.name}`}
            style={{ border: "2px solid pink", margin: "5px" }}
          >
            {`${index + 1}. Name--`}
            <b>{asteroid.name}</b>
            <div>
              Is dangerous--
              {asteroid["is_potentially_hazardous_asteroid"]
                ? dangerous
                : notDangerous}
              <p>
                Diameter--
                {`${asteroid["estimated_diameter"].meters[
                  "estimated_diameter_max"
                ].toFixed()}  meters`}
              </p>
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default HttpRequestsList;
