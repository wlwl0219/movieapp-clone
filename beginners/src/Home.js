import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Detail from "./Detail";
import Movies from "./Movies";

function Home() {
  return (
    <Router>
      <Routes>
        <Route path="/detail" element={<Detail />} />
        <Route path="/" element={<Movies />} />
      </Routes>
    </Router>
  );
}

export default Home;
