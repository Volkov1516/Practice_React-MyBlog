import React from 'react';
import './App.css';
import { Route, Redirect } from 'react-router-dom';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'
import Home from './components/home/Home';
import About from './components/about/About';
import Login from './components/login/Login';
import Options from './components/options/Options';
import Article1 from './components/articles/article1/Article1';
/**Что нужно сделать для релиза?
 * 1) Вынести данные на сервер. Подключить json-server
 * 2) Реализовать полноценный функционал комментариев с хранением в базе данных и запросами на сервер
 * 3) Реализовать регистрацию
 * 4) Редактировать статью и информационный блок 
 */
const App = () => {
  return (
    <div>      
        <Header />
        
        <main>
          <Redirect from='/' to='/home'/>

          <Route path='/home' component={Home} />          
          <Route path='/about' component={About} />
          <Route path='/login' component={Login} />
          <Route path='/options' component={Options} />

          <Route path='/article1' component={Article1}/>
        </main>

        <Footer />
    </div>
  );
}

export default App;
