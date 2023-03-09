import { useState, useEffect } from "react";

import { dataSelects } from "../const/const";

export const useGetBrands = ({ year }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const data = dataSelects().filter((value) => value.year === year);
    setBrands(data);
  }, [year]);

  return { brands };
};
