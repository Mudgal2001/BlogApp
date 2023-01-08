import Home from "./pages/home/Home";
import TopBar from "./components/topbar/TopBar";
import Single from "./pages/single/Single";
import Write from "./pages/write/Write";
import Setting from "./pages/settings/Setting";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Post from "./components/post/Post";
import Posts from "./components/posts/Posts";


function App() {
  return (
    <Router>
    <TopBar/>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/register">
         <Register />
      </Route>
      <Route path="/login"><Login /></Route>
      <Route path="/post/:id">
        <Single />
      </Route>
      <Route path="/write"> <Write /></Route>
      <Route path="/settings">
        <Setting /> 
      </Route>
    </Switch>
  </Router>
  );
}

export default App;
