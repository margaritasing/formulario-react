export const inicialState = {
    movies:[],    
    filterMovies: [],
    filterGenero: [],

}




export const actionType={
    MOVIES:"MOVIES",
    FILTERGENERO:"FILTERGENERO",
    FILTERMOVIES:"FILTERMOVIES"
}


const reducer=(state, action)=>{

    console.log(action)

    switch (action.type) {

        case "MOVIES":

        return{
            ...state,
            movies:action.movies,
            filterMovies:action.movies
        }


        case "FILTERMOVIES":
            const filterMovies = state.movies.filter( movie => movie.title.toLowerCase().startsWith(action.value.toLowerCase().trim()))
                  
            
            console.log(filterMovies)   
            return{
                ...state,
                filterMovies:filterMovies,
            }
            
           case "FILTERGENERO":

                const filterGenero = state.movies.filter(movie => movie.genre_ids.includes(action.value))
           return{
                ...state,
                filterGenero:filterGenero,
                filterMovies:filterGenero
                
           }
    
        default:return state
    }





}

export default reducer;