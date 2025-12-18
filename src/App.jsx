import { useContext, useState } from "react";
import { contextProvider } from "./context/MainContext";
import Navbar from "./components/Navbar";

function App() {
  const { state, dispatch } = useContext(contextProvider);
  const [colorCode, setColorCode] = useState("");

  const colors = ["#1e3a8a", "#047857", "#b91c1c", "#f59e0b", "#8b5cf6"];

  const generateColor = () => {
    const randomIndex = Math.floor(Math.random() * colors.length);
    setColorCode(colors[randomIndex]);
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100vw",
        height: "100vh",
        gap: "20px",
        backgroundColor: state.theme === "dark" ? "#333" : "#f5f5f5",
        color: state.theme === "dark" ? "#fff" : "#000",
      }}
    >
      <Navbar />
      <button
        onClick={() => dispatch({ type: "CHANGE_THEME" })}
        style={{
          padding: "10px 20px",
          fontSize: "16px",
          cursor: "pointer",
          borderRadius: "5px",
          border: "none",
          backgroundColor: state.theme === "dark" ? "#fff" : "#333",
          color: state.theme === "dark" ? "#333" : "#fff",
          transition: "all 0.3s ease",
        }}
      >
        {state.theme === "dark" ? "light" : "dark"}
      </button>
      <button
        onClick={generateColor}
        style={{
          padding: "12px 30px",
          fontSize: "16px",
          fontWeight: "600",
          cursor: "pointer",
          borderRadius: "8px",
          border: "none",
          backgroundColor: colorCode || "#1e3a8a",
          color: "#fff",
          boxShadow: "0 4px 6px rgba(0,0,0,0.2)",
          transition: "all 0.2s ease",
        }}
        onMouseDown={(e) =>
          (e.currentTarget.style.transform = "translateY(2px)")
        }
        onMouseUp={(e) => (e.currentTarget.style.transform = "translateY(0px)")}
      >
        Color Button
      </button>
      {colorCode && (
        <p style={{ fontSize: "18px", fontWeight: "500" }}>
          Hex: <span style={{ fontFamily: "monospace" }}>{colorCode}</span>
        </p>
      )}
    </div>
  );
}

export default App;
