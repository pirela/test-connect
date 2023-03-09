import { useState, useEffect } from "react";

import { dataSelects } from "../const/const";

export const useGetBrands = ({ year }) => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    const data = Object.values(
      dataSelects()
        .filter((value) => value.year === year)
        .reduce((acc, cur) => Object.assign(acc, { [cur.brand]: cur }), {})
    );
    setBrands(data);
  }, [year]);

  return { brands };
};
