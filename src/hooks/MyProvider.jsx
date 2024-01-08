import React, { useContext, useState } from "react";

// Create a context
const MyContext = React.createContext();

// Create a provider component that holds the shared state
const MyProvider = ({ children }) => {
  const [sharedState, setSharedStateFull] = useState({
    initialised: false,
    fundraisers: [],
  });

  function setSharedState(name, value) {
    setSharedStateFull({ ...sharedState, [name]: value });
  }
  return (
    <MyContext.Provider value={{ sharedState, setSharedState }}>
      {children}
    </MyContext.Provider>
  );
};

// Create a custom hook to consume the context
const useSharedState = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useSharedState must be used within a MyProvider");
  }
  return context;
};

// function set

export { MyProvider, useSharedState };
