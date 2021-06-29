import './App.css';
import Danhmuc from './components/danhmuc/Danhmuc'
import Products from './components/products/Products'
import Oder from './components/oder/Oder'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
function App() {
  return (
    <Router>
    <div>
      <header>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/danhmuc">Danh Mục <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/products">Sản Phẩm</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="oder">Oder</a>
                </li>
              </ul>
              
            </div>
          </nav>
        </header>
        <Switch>
              <Route exact path='/danhmuc' component={Danhmuc} />
              <Route path='/products' component={Products} />
              <Route path='/oder' component={Oder} />
        </Switch>
        <div className="container-fluid">
        </div>
      </div>
      </Router>
  );
}

export default App;
