import React from 'react';
import PostForm from './Pages/Postform/Postform';
import Allusers from './Pages/Users/Allusers';
import AllPost from './Pages/Allpost/Allpost';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <PostForm path="/" exact={true} component={PostForm} /> 
             <AllPost path="/allpost" component={AllPost} />
            {/* <Allusers path="/" exact={true} component={Allusers} /> */}
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
