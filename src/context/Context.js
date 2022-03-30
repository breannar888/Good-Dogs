import React, { useContext, createContext, useState } from "react";

const DogsContext = createContext();

export function DogsProvider({ children }) {
  const [didUpdate, setDidUpdate] = useState(false);
  const [dogAPI, setDogAPI] = useState([]);

  const value = {
    didUpdate,
    setDidUpdate,
    dogAPI,
    setDogAPI,
  };

  return <DogsContext.Provider value={value}>{children}</DogsContext.Provider>;
}

export default function useDogs() {
  return useContext(DogsContext);
}
