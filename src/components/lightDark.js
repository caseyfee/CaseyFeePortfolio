import React, { useState } from "react";

const lightDark = () => {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div>
      <button onClick={toggleMode}>Toggle Mode</button>
      <hr />
      {mode === "light" ? (
        <div>
          <h1>This is the light mode</h1>
        </div>
      ) : (
        <div>
          <h1>This is the dark mode</h1>
        </div>
      )}
    </div>
  );
};

export default lightDark;