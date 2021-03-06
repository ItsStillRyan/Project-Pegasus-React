import React from 'react'
import NavbarMain from './commons/navbar'
import Main from './main'
import MainFooter from './commons/footer'
import 'bootstrap/dist/css/bootstrap.min.css';
import './main.css'


function App() {
    return (
        <div className="bodyT">
            <div className="App">
                <NavbarMain />
                <header>
                    <Main />
                </header>
                <footer>
                    <MainFooter />
                </footer>
            </div>
        </div>
    )
}

export default App;
