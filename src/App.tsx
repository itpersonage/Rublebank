import React from "react";
// import styles from "./App.module.scss";
import { PageWrapper } from "./Components/Commons/PageWrapper";
import { MainContainer } from "./Containers/MainContainer";
import { DebetCardContainer } from "./Containers/DebetCardContainer";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper />}>
        <Route path="/" element={<MainContainer />} />
        <Route path="/Debet_card" element={<DebetCardContainer />} />
      </Route>
    </Routes>
  );
}

export default App;
