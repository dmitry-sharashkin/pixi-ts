import React, { useEffect, useRef } from "react";
import "./App.css";
import { game } from "./game";

const nft =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRdBondAUvWLbdrMiGCoEz6dElRmeLWh0enQ&usqp=CAU";

function App() {
  const stageContainer = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const app = game();
    // @ts-ignore
    stageContainer?.current && stageContainer.current.appendChild(app.view);
  }, []);
  return <div className="stageContainer" ref={stageContainer}></div>;
}

export default App;
