import React from 'react'
import NavbarMain from './navbar'
import Main from './main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
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
                        
                    </footer>
                </div>
            </div>
    )
}

export default App;
