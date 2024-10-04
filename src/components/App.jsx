import Aside from "./Aside";
import MainSection from "./mainSection";
import Menu from "./menu";
import { HEADERS } from "../constants";
import { useState } from "react";

function App() {
  const [headers, setHeaders] = useState(HEADERS);
  return (
    <div className="flex h-screen text-white bg-bg font-body">
      <Menu />
      <MainSection headers={headers} setHeaders={setHeaders} />
      <Aside headers={headers} setHeaders={setHeaders} />
    </div>
  );
}

export default App;

