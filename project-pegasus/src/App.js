import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
//import pages
import NavbarMain from './commons/navbar'
import FooterMain from './commons/footer'
import MainBody from './pages/main'
import PageNotFound from './pages/404'
import GettingStarted from './pages/getting-started'
import Uploads from './pages/Uploads'
import IndiviPost from './pages/indiviPost'
// categories
import Galaxies from './pages/Category-cluster/galaxies'
import StarCluster from './pages/Category-cluster/starcluster'
import Planetary from './pages/Category-cluster/planetary'
import Nebulae from './pages/Category-cluster/nebulae'
import SpaceCraft from './pages/Category-cluster/spacecraft'
import Others from './pages/Category-cluster/others'
//




function App() {

    return (
        <div className="bodyT">
            <NavbarMain />
            <div className="divContain">
                <Router>
                    <Switch>
                        {/* main page */}
                        <Route exact path="/" component={MainBody} />

                        {/* Categories*/}
                        <Route exact path="/galaxies" component={Galaxies} />
                        <Route exact path="/starcluster" component={StarCluster} />
                        <Route exact path="/planetary" component={Planetary} />
                        <Route exact path="/nebulae" component={Nebulae} />
                        <Route exact path="/spacecraft" component={SpaceCraft} />
                        <Route exact path="/others" component={Others} />

                        {/* Postings */}
                        <Route exact path="/uploads" component={Uploads}/>

                        {/* Individual Posts */}
                        <Route exact path="/individual/{_id}" component={IndiviPost}/>

                        {/* Getting Started */}
                        <Route exact path="/gettingstarted" component={GettingStarted} />

                        {/* page not found */}
                        <Route exact path="/lost" component={PageNotFound} />
                        <Redirect to="/lost" />

                    </Switch>
                </Router>
            </div>
            <FooterMain />
        </div>
    )

}

export default App;
