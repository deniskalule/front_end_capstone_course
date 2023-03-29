import './App.css';
import { Fragment } from 'react';
// importing components
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import BookingPage from './pages/BookingPage';

function App() {
  return (
    <Fragment>
      <Navbar />

      <Router>
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/menu' exact component={Menu} />
          <Route path='/booking_page' exact component={BookingPage} />

        </Switch>
      </Router>
      <Footer />
    </Fragment>
    
  );
}

export default App;
