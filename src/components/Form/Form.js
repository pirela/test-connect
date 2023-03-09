import { useEffect, useState } from "react";

import { useGetBrands } from "../../hooks/useGetBrands";
import { useGetModels } from "../../hooks/useGetModels";

import { Input, Select } from "../Inputs/Inputs";
import { getYears } from "../../const/const";

export const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [color, setColor] = useState("");
  const [placa, setPlaca] = useState("");
  const [year, setYear] = useState(null);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);

  const { brands } = useGetBrands({ year });
  const { models } = useGetModels({ brand });

  useEffect(() => {
    setBrand("");
    setModel("");
  }, [year]);

  useEffect(() => {
    setModel("");
  }, [brand]);

  const handleSubmit = () => {
    console.info("values:", {
      name,
      lastName,
      phone,
      color,
      placa,
      year,
      brand,
      model,
    });
  };

  return (
    <div className="w-full max-w-xs m-auto pt-8">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <Input
          value={name}
          onChange={setName}
          placeholder={"Primer Nombre"}
          title={"Primer Nombre"}
          key={"Primer Nombre"}
        />
        <Input
          value={lastName}
          onChange={setLastName}
          placeholder={"Apellidos"}
          title={"Apellidos"}
        />
        <Input
          value={phone}
          onChange={setPhone}
          placeholder={"Teléfono"}
          title={"Teléfono"}
        />

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

        <Input
          value={color}
          onChange={setColor}
          placeholder={"Color"}
          title={"Color"}
          key={"Color"}
        />
        <Input
          value={placa}
          onChange={setPlaca}
          placeholder={"Placa"}
          title={"Placa"}
          key={"Placa"}
        />

        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  focus:outline-none focus:shadow-outline m-auto"
            type="button"
            onClick={handleSubmit}
          >
            Enviar
          </button>
        </div>
      </form>
    </div>
  );
};
