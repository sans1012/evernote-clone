import React from "react"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import NavBar from "./components/layout/NavBar"
import Home from "./components/home/Home"
import Favorites from "./components/notes/Favorites"
import NoteDetail from "./components/notes/NoteDetail"
import EditForm from "./components/notes/EditForm"
function App() {
  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/favorites" component={Favorites} />
        <Route path="/note/:id" component={NoteDetail} />
        <Route path="/editform/:id" component={EditForm} />
      </Switch>
    </Router>
  );
}

export default App;
  
