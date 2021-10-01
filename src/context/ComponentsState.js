import React, { createContext, useState } from "react";

export const ComponentsState = createContext();

const ComponentsProvider = (props) => {
  const [active, setActive] = useState(false);
  return (
    <ComponentsState.Provider value={{ active, setActive }}>
      {props.children}
    </ComponentsState.Provider>
  );
};

export default ComponentsProvider;
