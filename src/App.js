import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Article1 from './components/articles/article1/Article1';

const App = () => {

  return (
    <BrowserRouter>      
        <Header />

        <main>
          <Route path='/home' component={Home} />          
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />

          <Route path='/article1' component={Article1}/>
        </main>

        <Footer />
    </BrowserRouter>
  );
}

export default App;
