import { useState } from "react";

import { useGetBrands } from "../../hooks/useGetBrands";
import { useGetModels } from "../../hooks/useGetModels";

import { Input, Select } from "../Inputs/Inputs";
import { getYears } from "../../const/const";

export const Form = () => {
  const [year, setYear] = useState(2020);
  const [brand, setBrand] = useState("");
  const [model, setModel] = useState("");
  const { brands } = useGetBrands({ year });
  console.info("mobrand")
  const { models } = useGetModels({ brand });

  return (
    <div class="w-full max-w-xs m-auto pt-8">
      <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input placeholder={"Primer Nombre"} title={"Primer Nombre"} />
        <Input placeholder={"Apellidos"} title={"Apellidos"} />
        <Input placeholder={"Teléfono"} title={"Teléfono"} />

        <Select
          id={"year"}
          title={"Año"}
          key={"Año"}
          options={getYears()}
          onChange={setYear}
          field={"year"}
        />
        <Select
          id={"brand"}
          title={"Marcas"}
          key={"Marca"}
          options={brands}
          onChange={setBrand}
          field={"brand"}
        />
        <Select
          id={"model"}
          title={"Modelo"}
          key={"Modelo"}
          options={models}
          onChange={setModel}
          field={"model"}
        />

        <Input placeholder={"Color"} title={"Color"} />
        <Input placeholder={"Placa"} title={"Placa"} />

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline m-auto"
            type="button"
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
