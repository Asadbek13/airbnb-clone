import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import SearchPage from "./SearchPage";

function App() {
  return (
    <div className="app container">
      <Router>
        <Header />

        <Switch>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;

/* 

  Home
    Header
    Banner
      Search Dates
    Cards
    Footer
  
  Search Page
    ...

*/
