import React from "react";

const SelectInput = ({
  props,
  labelSelect = "Digite a label",
  id = "id_do_input_text",
  inputValue = "Valor padrão do input",
  onInputChange = null,
  inputOption = [],
  autoFocus = false,
}) => {
  function handleInputChange({ currentTarget }) {
    if (onInputChange) {
      const newValue = currentTarget.value;
      onInputChange(newValue);
    }
  }

  return (
    <div className="text-center">
      <label className="block text-sm font-medium text-gray-700 mb-4">
        {labelSelect}
      </label>

      <select
        className=" sm:text-sm border-2  rounded-md "
        id={id}
        type="text"
        onChange={handleInputChange}
      >
        {inputOption.map((data, id) => {
          return (
            <option key={id} value={data.name}>
              {data.name}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default SelectInput;
