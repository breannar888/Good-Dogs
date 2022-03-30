import React, { useContext, createContext, useState } from "react";

const PopupContext = createContext();

export function PopupProvider({ children }) {
  const [didUpdate, setDidUpdate] = useState(false);
  const [dogAPI, setDogAPI] = useState([]);

  const value = {
    didUpdate,
    setDidUpdate,
    dogAPI,
    setDogAPI,
  };

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
}

export default function usePopup() {
  return useContext(PopupContext);
}
