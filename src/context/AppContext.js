import React, { createContext, useEffect, useState } from "react";

const AppContext = createContext(null);

const AppProvider = ({ children }) => {
  return <AppContext.Provider>{children}</AppContext.Provider>;
};

export default AppProvider;
