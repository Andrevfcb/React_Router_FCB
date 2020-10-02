import React, {Component} from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './ScrollToTop'
import Header from './Header';
import Navigation from './Navigation';
import Page from './Page';

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