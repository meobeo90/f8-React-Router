import { Route, BrowserRouter as Router, Routes } from "react-router";
import Home from "./pages/Home";
import About from "./pages/About";
import News from "./pages/News";

import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
    return (
      <Router>
        <div>
          <Header/>
          <main className="main">
            <Routes>
              <Route index element={<Home />} />
              <Route path="news" element={<News />} />                 
              <Route path="about" element={<About />} />
            </Routes>
          </main>
          <Footer/>
        </div>
      </Router>
    );
}

export default App;
