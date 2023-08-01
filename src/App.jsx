import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";
import PageContainer from "./containers/PageContainer";
import Detail from "./pages/Detail";
import Card from "./pages/Card";
import Search from "./pages/Search";

function App() {
  return (
    <>
      <PageContainer>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products/:id" element={<Detail />} />
            <Route path="/card" element={<Card />} />
            <Route path="/products/:search" element={<Search />} />
          </Routes>
        </Router>
      </PageContainer>
    </>
  );
}

export default App;
