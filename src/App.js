import './App.css';
/* Study react
import Navbar from './components/Navbar/Navbar';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import MyComponent from './components/Learn/MyComponent';
import ListUsers from './components/AxiosExample/ListUsers';
import DetailUser from './components/AxiosExample/DetailUser';
*/
import Main from './projects/learn-materialUI/Main';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Router>   study React basic
        <Navbar/> 
        <Switch>
          <Route path="/" exact><Main/></Route>
          <Route path="/todo"><MyComponent/></Route>
          <Route path="/user" exact><ListUsers/></Route>
          <Route path="/user/:id"><DetailUser/></Route>
        </Switch>
        <Footer/
      </Router> */}
      <Main/>  
    </div>
  );
}

export default App;
