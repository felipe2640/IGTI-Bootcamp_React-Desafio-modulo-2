import { useState, useEffect } from "react";
import Card from "./components/Card";
import { Header } from "./components/Header";
import HeaderCard from "./components/HeaderCard";

import { Main } from "./components/Main";
import SelectInput from "./components/SelectInput";
import { apiGetElection } from "./Data/data";

export default function App() {
  const [city, setCity] = useState(" ");

  const [election, setElection] = useState(null);
  useEffect(() => {
    async function getElection() {
      const backendElection = await apiGetElection();
      setElection(backendElection);
    }

    getElection();
  }, []);

  if (!election) {
    return <p>Carregando...</p>;
  }

  function handleCitySelected(citySelected, election) {
    setCity(citySelected);
  }

  return (
    <div>
      <Header />
      <Main>
        <div className="items-center mb-4">
          <SelectInput
            labelSelect={"Escolha o municipio"}
            inputOption={election}
            onInputChange={handleCitySelected}
            autoFocus
          />
        </div>

        <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
          <HeaderCard data={election} city={city} />
          <div className="flex flex-row items-center justify-center flex-wrap">
            <Card data={election} city={city} />
          </div>
        </div>
      </Main>
    </div>
  );
}
