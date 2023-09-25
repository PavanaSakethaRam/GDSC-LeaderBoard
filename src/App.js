import {
  Routes,
  Route,
} from "react-router-dom";
import { useCallback } from "react";
import Particles from "react-particles";
import { loadFireflyPreset } from "tsparticles-preset-firefly";
import Table from "./components/Table";
import Navbar from "./components/Navbar";

function App() {
  const particlesInit = useCallback(async (engine) => {
    await loadFireflyPreset(engine);
}, []);
  const colors = ["#ffffff", "#000000"];
  const particlesConfig = {
    preset: "firefly",
    particles: {
      color: {
        value: ["#4285F4", "#0F9D58", "#F4B400", "#DB4437"]
      },
      shape: {
        type: "circle",
      },
      size: {
        value: 10,
      },
      move: {
        enable: true,
        speed: 4,
      },
      opacity: {
        value: 1,
      },
      rotate: {
        value: 100,
      },
      number: {
        value: 80,
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: "#ffffff",
        opacity: 0.4,
      },

    },
    interactivity: {
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
      },
    },
    background: {
      color: {
        value: colors[0],
      },
    },
  };
  return (
    <>
      <Navbar />
      {/* <Particles options={particlesConfig} init={particlesInit} /> */}
      <Routes>
        <Route path="/" element={<Table />} />
      </Routes>

    </>

  );
}
export default App;