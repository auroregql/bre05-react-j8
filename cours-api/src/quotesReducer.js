const quotesReducer = (state, action) => {
    //Si l'action est l'etat est initiale et en cours de chargement alors on retourne un nouvel etat
    if(action.type === "INIT")
    {
        let newState = Object.assign({}, state, { loading: true });

        return newState;
    }
    //Sinon si l'action est que le chargement est terminé alors on retourne un nouvel etat et on arrete le chargement
    else if(action.type === "LOADED")
    {
        let newState = Object.assign({}, state, { loading: false, quotes : action.payload });
        return newState;
    }
}

export default quotesReducer;

