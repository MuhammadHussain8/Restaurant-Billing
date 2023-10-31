import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Sidebar from './Components/SideBar';
import Header from './Components/Header';
import Layout from './Components/Layout';

const App = () => {
  return (
    <Layout />
    // <Router>
    //   <div style={{ display: 'flex' }}>
    //     <Sidebar />
    //     <div style={{ flex: 1 }}>
    //       <Header />
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         {/* Add more Route components for additional pages */}
    //       </Switch>
    //     </div>
    //   </div>
    // </Router>
  );
};

export default App;
