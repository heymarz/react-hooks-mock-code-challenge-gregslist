import React, { useState } from "react";
import Header from "./Header";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [search, setSearch] = useState("")

  return (
    <div className="app">
      <Header />
      <ListingsContainer search={search} />
    </div>
  );
}

export default App;
