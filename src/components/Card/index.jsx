import React from "react";
import { ColorValue } from "../ColorValue";
import { Winner } from "../Winner";
export default function Card({ props, data = [], city = "" }) {
  data = data.filter((data) => data.name === city)[0];
  const election = !data ? "" : data.election;

  return (
    <>
      {!data
        ? ""
        : election.map(({ candidate, percent, usercandidate, vote }) => {
            return (
              <div
                key={candidate}
                className="flex flex-row items-center justify-center "
              >
                <div
                  className={`shadow-lg p-4 m-2 w-64 h-64 rounded-xl 
                    flex flex-col items-center space-y-10
                    font-semibold text-xl`}
                >
                  <div className="flex flex-row space-x-8">
                    <img
                      className="w-24 h-24 rounded-full  "
                      src={`./img/${usercandidate}.png`}
                      alt=""
                      width="384"
                      height="512"
                    />
                    <div className="flex flex-col items-center">
                      <ColorValue
                        value={!data ? 0 : data.election[0].percent}
                        valuet={percent}
                      />
                      <p className="text-sm ...">{`${vote.toLocaleString(
                        "pt-BR"
                      )} votos`}</p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <strong>{candidate}</strong>
                    <Winner
                      value={!data ? 0 : data.election[0].percent}
                      valuet={percent}
                    />
                  </div>
                </div>
              </div>
            );
          })}
    </>
  );
}
