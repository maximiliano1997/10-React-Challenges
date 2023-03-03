import React from "react";
import {Test} from "./#1 Display Simple Data with JSX/Test";
// import "./styles.css"
import { BrowserRouter } from 'react-router-dom'
import {DataContextProvider} from './#10  Using ReactRouter & ContextAPI/ContextProvider'





const App = () => {

  return (
    <DataContextProvider>
    <BrowserRouter>
      <Test />
    </BrowserRouter>
    </DataContextProvider>
  );
};

export default App;
