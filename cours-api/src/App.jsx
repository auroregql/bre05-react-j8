
import {useReducer, useEffect} from 'react'
import quotesReducer from "./quotesReducer.js";

import './App.css'

//Fonction app qui utilise reducer et qui a pour etat initial la liste des phrases et le chargement qui n'est pas activé
function App() {
    const [state, dispatch] = useReducer(quotesReducer, {quotes: [], loading: false});

    useEffect(() => {

//On appelle fetchQuotes qui renvoie les données initiales au reducer
        const fetchQuotes = async () => {
            dispatch({ type: 'INIT' });

//Grace a fetch on appelle l'api puis il renvoie le chargement terminé au reducer
            const response = await fetch('https://dummyjson.com/quotes');
            const result = await response.json();
            dispatch({ type: "LOADED", payload: result.quotes });
        };

//Ca affiche les Quotes avec fetch
        fetchQuotes();

    }, []);


//Si l'état est en cours de chargement alors ca retourne Chargement...
    if(state.loading)
    {
        return (
            <>
                <p>Chargement...</p>
            </>
        )
    }
    
    //Sinon ca retourne la liste des Quotes avec les auteurs 
    else
    {
        return(
            <>
                <ul>
                    {
                        state.quotes.map((quote, index) => <li style={{marginBottom: "1.5rem"}} key={index}>
                            {quote.quote} ({quote.author})
                        </li>)
                    }
                </ul>
            </>
        )
    }
}

export default App