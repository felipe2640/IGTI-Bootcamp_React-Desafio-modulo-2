import { useState } from "react";
import Card from "./components/Card";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import SelectInput from "./components/SelectInput";
import { Data } from "./Data/data";

export default function App() {
  const [city, setCity] = useState("");
  function handleCitySelected(citySelected) {
    setCity(citySelected);
  }
  return (
    <div>
      <Header />
      <Main>
        <div className="items-center mb-4">
          <SelectInput
            labelSelect={"Escolha o municipio"}
            inputOption={Data[0].cities}
            onInputChange={handleCitySelected}
            autoFocus
          />
        </div>
        <div className="max-w mx-auto bg-white rounded-xl shadow-md overflow-hidden ">
          <div className="grid md:grid-cols-3 sm:grid-cols-1">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </Main>
    </div>
  );
}
