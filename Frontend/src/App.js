import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import AddContent from './pages/AddContent';
import ContentDetail from './pages/ContentDetail';
import PostsPage from './pages/PostsPage';
import PostDetailPage from './pages/PostDetailPage';
import LoginSuccess from './pages/LoginSuccess';
import RegisterSuccess from './pages/RegisterSuccess';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/content/:id" component={ContentDetail} />
          <Route path="/add-content" component={AddContent} />
        </Switch>
      </div>
      <div>
      <Switch>
        <Route exact path="/posts" component={PostsPage} />
        <Route exact path="/posts/:postId" component={PostDetailPage} />
        <Route path="/login-success" component={LoginSuccess} />
        <Route path="/register-success" component={RegisterSuccess} />
      </Switch>
      </div>
    </Router>
  );
}

export default App;
