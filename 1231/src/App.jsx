import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Problem1 from "./pages/Problem1";
import Problem2 from "./pages/Problem2";
import GlobalStyle from "./styles/GlobalStyle";
import Problem3 from "./pages/Problem3";
import Problem4 from "./pages/Problem4";
import Problem5 from "./pages/Problem5";
import H1230 from "./pages/H1230";

const App = () => {
  return (
    <Router>
      <GlobalStyle />

      <Routes>
        {/* 메인 페이지 */}
        <Route path="/" element={<MainPage />} />
        <Route path="/problem1" element={<Problem1 />} />
        <Route path="/problem2" element={<Problem2 />} />
        <Route path="/problem3" element={<Problem3 />} />
        <Route path="/problem4" element={<Problem4 />} />
        <Route path="/problem5" element={<Problem5 />} />
        <Route path="/1230" element={<H1230 />} />
      </Routes>
    </Router>
  );
};

export default App;
