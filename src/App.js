import './App.css';
import React from 'react';
import { Route } from 'wouter';
import Home from './pages/Home/Home';
import Header from './components/Header/Header';
import SearchResults from './pages/SearchResults/SearchResults';
import Footer from './components/Footer/Footer';
import Detail from './pages/Detail/DetailGif';
import {GifContextProvider} from './Context/GifContext';
function App() {

  return (
    <div className="App">
      <GifContextProvider>
      <section className="App-content">
        <Header/>
        <Route component={Home} path="/"/>
        <Route component={SearchResults} path="/search/:keyword"/>
        <Route component={Detail} path="/gif/:id"/>
        <Footer/>
      </section>
      </GifContextProvider>
    </div>
  );
}


export default App;
