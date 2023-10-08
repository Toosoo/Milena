import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Canvas } from "@react-three/fiber";
import { BakeShadows, Loader } from "@react-three/drei";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense>
      <Canvas shadows camera={{ near: 0.1, far: 50, position: [0, 0, 7] }} style={{ background: "#F4EEFF" }}>
        <App />
      </Canvas>
    </Suspense>
    <Loader />
  </React.StrictMode>
);
