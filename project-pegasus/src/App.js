import React from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
//import pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'
import MainBody from './pages/main'
import IndivCate from './pages/individual-categories'



function App() {
    return (
        <div className="bodyT">
           <Router>
               <Switch>
                   <Route exact path="/" component={MainBody} />
                   <Router exact path=""
               </Switch>
           </Router>
        </div>
    )
}

export default App;
