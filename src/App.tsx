import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Main from "components/Main";
import PopCircle from "components/PopCircle";
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
        <Route path="pop-circle" element={<PopCircle />} />
      </Routes>
    </Router>
  </ThemeProvider>
);

export default App;
