import React from 'react';
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import listFilms from '../pages/films/list.js';

function App(){
    return (
        <div className="app">
            <BrowserRouter>
            <header/>
            <Switch>
                <Route path="/film" component={listFilms}/>
            </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App;