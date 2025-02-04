import React, { Suspense, lazy } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/shared";
import "./styles/Globals.scss";

const Home = lazy(() => import("./pages/home/Home"));
const Discord = lazy(() => import("./pages/discord/Discord"));
const CodeofConduct = lazy(() => import("./pages/coc/CodeofConduct"));
const Brand = lazy(() => import("./pages/brand/Brand"));

const App = () => {
  return (
    <Router basename={import.meta.env.BASE_URL}>
      <Navbar />
      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/discord" element={<Discord />} />
            <Route exact path="/coc" element={<CodeofConduct />} />
            <Route exact path="/brand" element={<Brand />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
