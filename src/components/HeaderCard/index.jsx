import React from "react";

const HeaderCard = ({ props, data = [], city = "" }) => {
  data = data.filter((data) => data.name === city);

  return (
    <>
      <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
        <div className="flex items-center justify-center">
          <strong>Eleição em Asgard</strong>
        </div>
        <div className="flex items-center justify-center">
          <h3 className="text-slate-900 dark:text-white  text-base font-medium p-2 ">
            Total de eleitores:
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-0.5 ">
            {data.length === 0
              ? 0
              : data[0].votingPopulation.toLocaleString("pt-BR")}{" "}
          </p>
          <h3 className="text-slate-900 dark:text-white text-base font-medium p-2">
            Abstenção:
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-0.5 ">
            {data.length === 0 ? 0 : data[0].absence.toLocaleString("pt-BR")}{" "}
          </p>
          <h3 className="text-slate-900 dark:text-white text-base font-medium p-2 ">
            Comparecimentos:
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-0.5 ">
            {data.length === 0 ? 0 : data[0].presence.toLocaleString("pt-BR")}{" "}
          </p>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h3 className="text-slate-900 dark:text-white text-base font-medium p-2 ">
            Numero de candidatos
          </h3>
          <p className="text-slate-500 dark:text-slate-400 mt-0.5 ">
            {data.length === 0 ? 0 : data[0].election.length}{" "}
          </p>
        </div>
      </div>
    </>
  );
};

export default HeaderCard;
