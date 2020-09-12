import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Article1 from './components/articles/article1/Article1';

{/**App постоянно отрисовывает Header и Footer. 
    Содержимое main меняется в зависимости от URL. 
    Readirect заставляет рендерить компоненту Home, внутри main, при загрузке приложения.
    Решение с Route для статей(в самом конце main) временное.*/}

const App = () => {

  return (
    <div>      
        <Header />
        
        <main>
          <Redirect from='/' to='/home'/>

          <Route path='/home' component={Home} />          
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />

          <Route path='/article1' component={Article1}/>
        </main>

        <Footer />
    </div>
  );
}

export default App;
