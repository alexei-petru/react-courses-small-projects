import React, { useContext, useState } from "react";

const ThemeContext = React.createContext({});

function ContextProvider({ children }) {
  const themes = {
    light: {
      name: "light",
      foreground: "#000000",
      background: "#eeeeee",
    },
    dark: {
      name: "dark",
      foreground: "#ffffff",
      background: "#222222",
    },
  };
  const [startTheme, setStartTheme] = useState(themes.light);

  const themeContext = {
    defaultTheme: startTheme,
    changeBackground: () => {
      setStartTheme((prev) => {
        console.log(prev);
        return prev.name === "light" ? themes.dark : themes.light;
      });
    },
  };

  return (
    <ThemeContext.Provider value={themeContext}>
      {children}
    </ThemeContext.Provider>
  );
}

function App() {
  return (
    <ContextProvider>
      <Toolbar />
    </ContextProvider>
  );
}

function Toolbar() {
  return (
    <div>
      <Square>
        <ThemedButton />
      </Square>
    </div>
  );
}

function Square({ children }) {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        width: "500px",
        height: "500px",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
        marginLeft: "auto",
        backgroundColor: theme.defaultTheme.foreground,
      }}
    >
      {children}
    </div>
  );
}

function ThemedButton() {
  const theme = useContext(ThemeContext);

  console.log(1, theme.defaultTheme.background);
  return (
    <button
      onClick={theme.changeBackground}
      style={{
        background: theme.defaultTheme.background,
        color: theme.defaultTheme.foreground,
        padding: "10px",
      }}
    >
      I am styled by theme context!
    </button>
  );
}

export default App;
