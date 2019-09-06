import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Searchable from '../components/words/Searchable';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/words/:count" component={Searchable} />
        <Route exact path="/" component={Searchable} />
      </Switch>
    </Router>
  );
}
