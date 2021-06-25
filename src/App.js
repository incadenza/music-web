import './App.css';
import Tracks from './Tracks'
import Artist from './Artist'
import Album from './Album'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Tracks/>
        </Route>
        <Route path="/artists/:id">
          <Artist />
        </Route>
        <Route path="/albums/:id">
          <Album />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
