import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Main from "pages/Main";
import BounceBall from "pages/BounceBall";
import RotateBox from "pages/RotateBox";
// styles
import { Global, ThemeProvider } from "@emotion/react";
import reset from "styles/reset";
import theme from "styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Global styles={reset} />
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/bounce-ball" element={<BounceBall />} />
        <Route path="/rotate-box" element={<RotateBox />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
