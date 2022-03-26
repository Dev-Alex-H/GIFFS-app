import logo from './logo.png'
import React, { Suspense } from 'react';
import './App.css';
// import Home from './pages/home/index.js'
import SearchResults from './pages/searchResults/index.js';
import Detail from './pages/details/index.js';
import StaticContext from './context/StaticContext';
import { GifsContextProvider } from './context/GifsContext';
import { Link, Route } from 'wouter';

const HomePage = React.lazy(() => import('./pages/home/index.js'))

function App() {
  return (
    <StaticContext.Provider value={{
      name: 'midudev',
      suscribeteAlCanal: true
    }}>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Link to='/'>
              <figure className='App-logo'>
                <img className='App-logo' alt='Giffy logo' src={logo} />
              </figure>
            </Link>
            <GifsContextProvider>
              <Route
                component={HomePage}
                path='/'
              />
              <Route
                component={SearchResults}
                path='/search/:keyword'
              />
              <Route
                component={Detail}
                path='/gif/:id'
              />
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </StaticContext.Provider>
  );
}

export default App;