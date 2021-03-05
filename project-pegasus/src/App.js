import NavbarMain from './navbar'
import Main from './main'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
import './main.css'


function App() {
    return (
        <body>
            <div className="App">
                <NavbarMain />
                <header>
                    <Main />
                </header>

            </div>
        </body>
    );
}

export default App;
