import React, { Component } from 'react';
import './App.css';
import Section from './components/section'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Header</h1>
          <nav className="App-nav">Nav</nav>
        </header>
        <Section/>
        <section className="App-light-section">
          <h1>Light Section</h1>
          <article className="App-dark-article">
            <h1>Dark Article</h1>
          </article>
        </section>
        <section className="App-dark-section">
          <h1>Dark Section</h1>
          <article className="App-light-article">
            <h1>Light Article</h1>
          </article>
        </section>
        <section className="App-light-section">
          <h1>Light Section</h1>
          <article className="App-dark-article">
            <h1>Dark Article</h1>
          </article>
        </section>
        <section className="App-dark-section">
          <h1>Dark Section</h1>
          <article className="App-light-article">
            <h1>Light Article</h1>
          </article>
        </section>
        <h1>Inside App</h1>
        <h1>Outside and After UsersContainer</h1>
        <footer className="App-footer">
          <h1>sdfafdsaf</h1>
        </footer>
      </div>
    );
  }
}


export default App;