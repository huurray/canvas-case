import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// components
import Main from "pages/Main";
import MakeCircles from "pages/MakeCircles";
// redux
import { rootStore } from "stores/root";
import { Provider } from "react-redux";
// styles
import { Global, ThemeProvider } from "@emotion/react";
import reset from "styles/reset";
import theme from "styles/theme";

const App = () => (
  <div>12312312</div>
  // <ThemeProvider theme={theme}>
  //   <Provider store={rootStore}>
  //     <Global styles={reset} />
  //     <Router>
  //       <Routes>
  //         <Route path="/" element={<Main />} />
  //         <Route path="/make-circles" element={<MakeCircles />} />
  //       </Routes>
  //     </Router>
  //   </Provider>
  // </ThemeProvider>
);

export default App;
