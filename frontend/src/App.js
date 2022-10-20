import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Test from "./views/test.views";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={<Test />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
