import 'bootstrap/dist/css/bootstrap.min.css';
import Products from './components/products';
import Features from './components/features';
import Pricing from './components/pricing';
import Contacts from './components/contacts';
import {BrowserRouter , Route, Routes} from "react-router-dom";


function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' exact Component={Products} >
      </Route>
      <Route path='/pricing' Component={Pricing} >
      </Route>
      <Route path='/features' Component={Features}>
      </Route>
      <Route path='/contacts' Component={Contacts}>
      </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
