import { Redirect, Route, Switch } from 'react-router';
import Home from './pages/Home';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {

  document.title = "Weather API React App";

  return (
    <Switch>
      <Route exact path="/" component={ Home }/>
      <Redirect to="/" />
    </Switch>
  );
}

export default App;
