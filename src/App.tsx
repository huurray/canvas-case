import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Main from "pages/Main";
import Circles from "pages/Circles";
import Lines from "pages/Lines";
import Gravity from "pages/Gravity";
// redux
import { rootStore } from "stores/root";
import { Provider } from "react-redux";
// styles
import { Global, ThemeProvider } from "@emotion/react";
import reset from "styles/reset";
import theme from "styles/theme";

const App = () => (
  <ThemeProvider theme={theme}>
    <Provider store={rootStore}>
      <Global styles={reset} />
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/circles" element={<Circles />} />
          <Route path="/lines" element={<Lines />} />
          <Route path="/gravity" element={<Gravity />} />
        </Routes>
      </Router>
    </Provider>
  </ThemeProvider>
);

export default App;
