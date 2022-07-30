import React from "react";

const HttpRequestsList = ({ mainArray, ...props }) => {
  const dangerous = <b>Dangerous</b>;
  const notDangerous = <p style={{ display: "inline-block" }}>Not Dangerous</p>;

  const getCloseDistanceNumber = (asteroid) => {
    const closeDistanceString =
      asteroid["close_approach_data"][0]["miss_distance"].lunar;
    const closeDistanceNumberFix = Number(closeDistanceString).toFixed();
    return closeDistanceNumberFix;
  };

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
              <p>
                Diameter--
                {`${asteroid["estimated_diameter"].meters[
                  "estimated_diameter_max"
                ].toFixed()}  meters`}
              </p>
              <p>{`Closest aproach distance:${getCloseDistanceNumber(
                asteroid
              )}LD x 384,399km *LD:Lunar Distance`}</p>
              <p>{`id:${asteroid.id}`}</p>
            </div>
          </div>
        );
      })}
    </li>
  );
};

export default HttpRequestsList;
