import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Podcasts from "./pages/Podcasts";

const App = () => 
  <Router>
    <div>
      <Route exact path="/" component={Podcasts} />
    </div>
  </Router>;

export default App;
