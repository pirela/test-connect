import { useState, useEffect } from "react";

import { dataSelects } from "../const/const";

export const useGetModels = ({ brand }) => {
  const [models, setModels] = useState([]);

  useEffect(() => {
    const data = dataSelects().filter((value) => value.brand === brand);
    setModels(data);
  }, [brand]);

  return { models };
};
