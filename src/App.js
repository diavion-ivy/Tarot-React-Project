import './App.css';
import Cards from './componets/Cards.js'
import Results from './componets/Results.js'
import { useReducer} from 'react';
import { StateContext, DispatchContext, initialState, reducer } from './context/AppState';
import React from 'react';


function App() {

  const [appState, dispatch] = useReducer(reducer, initialState);

  return (
    <StateContext.Provider value={appState}>
    <DispatchContext.Provider value={dispatch}>
    <div class="bg-image"></div>
    <div className="App">
      <header className="App-header siteTitle2">
        <img src='https://static.vecteezy.com/system/resources/previews/011/664/725/original/tarot-sign-symbol-atl-png.png' className="App-logo" alt="logo" />
        <h1>Tarot Tech Titan Readings</h1>
      </header>
      <section className='deckOfCards'>
        <Cards/>
      </section> 
      <section className='readings'>
        <Results/>
      </section> 
      <footer className='footer'>
        <p>Tarot Tech Titans &copy; </p>
        <p id= 'copyrightText'>All information provided by TarotTechTitans.com is for entertainment purposes only. If you have serious problems, speak to a professional.</p>
      </footer>
    </div>
    
    </DispatchContext.Provider>
    </StateContext.Provider>
  );
}

export default App;
