import React, { Component } from 'react';
import Home from './container/components/home/index';
import ToDo from './container/components/todo/index';
import MainMenu from './container/components/menu/MainMenu';
import Radio from './container/components/radio/index';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SimpleReactValidator from 'simple-react-validator';
import Constants from './constants/index';
class App extends Component {
  UNSAFE_componentWillMount() {
    SimpleReactValidator.addLocale('vi', Constants.VALIDATION_MESSAGES);
  }
  render() {
    return (
      <div id='app'>
        <Router>
          <MainMenu />
          <Switch>
            <Route exact path='/' render={props => <Home {...props} />}></Route>
            <Route path='/todo' render={props => <ToDo {...props} />}></Route>
            <Route path='/radio' render={props => <Radio {...props} />}></Route>
          </Switch>
        </Router>
        <footer>
          <div className='animated fadeInUp faster footer-container'>
            <span>
              This website was powered by, React Js, Redux, Express, MongoDb and
              more assets, APIs from the Internet. &copy; Nguyen Bach Toan
            </span>
          </div>
        </footer>
      </div>
    );
  }
}

export default App;
