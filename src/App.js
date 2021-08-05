import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import Navbar from "./Components/Navbar/Navbar";
import TopFilmsPage from "./Components/TopFilmsPage/TopFilmsPage";
import AllFilmsPage from "./Components/AllFilmsPage/AllFilmsPage";
import InfoAboutFilm from "./Components/InfoAboutFilm/InfoAboutFilm";

function App() {
  return (
      <div className="app">
          <Router>
              <Navbar />
              <Switch>
                  <Route exact path="/">
                      <TopFilmsPage />
                  </Route>
                  <Route exact path="/all-films">
                      <AllFilmsPage />
                  </Route>
                  <Route exact path="/info-about-film/:id">
                      <InfoAboutFilm />
                  </Route>
              </Switch>
          </Router>
      </div>
  );
}

export default App;
