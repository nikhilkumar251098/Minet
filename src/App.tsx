import React from 'react';
import Sell from './components/Pages/Sell/Sell'
import Wallet from './components/Pages/sellSuccessScreen/Wallet'
import Purchase from './components/Pages/Purchase/Purchase'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import  ThemeProvider  from './Theme/CustomThemeProvider';
import Buy from './components/Pages/paymentSuccessScreen/Buy';


function App() {
  return (
<ThemeProvider>
    <Router>
      <div>    
        <Routes>
          <Route path="/" element={ <Purchase /> }></Route>
          <Route path="/sell" element={ <Sell /> }></Route>
          <Route path="/successbuy" element={ <Buy /> }></Route>
          <Route path="/successsell" element={ <Wallet /> }></Route>
        </Routes>     
      </div>
    </Router>    
    </ThemeProvider>
  );
}

export default App;
