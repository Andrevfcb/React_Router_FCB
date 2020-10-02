import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop'
import Header from './Components/Header';
import Navigation from './Components/Navigation';
import Page from './Components/Page';

class App extends Component {
  state = {  }
  render() { 
    return ( 
    <Router>
      <ScrollToTop />
      <div className="app">
        <header>
          <Header />
        </header>
        <main>
          <aside>
            <Navigation />
          </aside>
          <section className="page">
            <Page />
          </section>
        </main>
      </div>
    </Router> );
  }
}
 
export default App;