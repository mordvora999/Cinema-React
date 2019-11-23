import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import axois from 'axios';
import  { useEffect } from 'react';
import spinner from './assets/ajax-loader.gif';
import { connect } from 'react-redux';
import AddPopup from './components/AddPopup';
import { useState} from 'react';
//import PaginationExampleCompact from './components/exe'

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=b3f6f90a";

const App = props => {
  useEffect(() => {
    props.SEARCH_MOVIES_REQUEST();
    axois.get(MOVIE_API_URL)
    .then(jsonResponse => {console.log("search data=>",jsonResponse)

    props.SEARCH_MOVIES_SUCCESS(jsonResponse.data.Search)
    })
    .catch(err=>{console.log("error");})
  }, []);

 const onSubmit = (term) => {

  props.SEARCH_MOVIES_REQUEST();

   axois.get(`http://www.omdbapi.com/?apikey=b3f6f90a&s=${term}`)
   .then(data => {
     console.log("data=>",data);
     if(data.data.Response === "True")
     {
      props.SEARCH_MOVIES_SUCCESS(data.data.Search)
     }
     else{
      props.SEARCH_MOVIES_FAILURE(data.data.Error)
     }
    })
    .catch(error => {console.log("opps! ",error.massege);})    
  }
console.log("props.loading",props.loading)
 const ShowMovies =
 props.loading === true ? (<img className="spinner" src={spinner} alt="Loading spinner" />) 
     : (props.movies.map((movie, index) => 
     {
       return(<MovieCard key={`${index}-${movie.Title}`}  movie={movie} />)
      })
  );

  const [ showAddPopup, setShowAddPopup ] = useState(false);
  function addMovie(){
      console.log(" add movie props",props)
      showAddPopup ? setShowAddPopup(false) : setShowAddPopup(true);
    }
    const popupAdd = showAddPopup ? <AddPopup closePopup={addMovie.bind(this)} /> : null;
   
    return(
      
      <div className="container ui" style={{marginTop:'20px'}}>        
        <SearchBar send={onSubmit} />
        <button className="ui positive basic button" onClick={ addMovie.bind(this) } ><i className="icon plus"></i>Add Movie</button>
        {/* <PaginationExampleCompact/> */}
        <br></br><br></br>
        <div className="moviesList">
       {ShowMovies}
       </div>
       <div style={{border:'2px',width:'400px'}}>{popupAdd}</div>
      </div>
      
    )
}
const mapStateToProps = state =>{
  return{
     loading:state.reducer.loading,
     movies:state.reducer.movies
  }
}
const mapDispatch = dispatch => {
  return {
    SEARCH_MOVIES_SUCCESS:(movie) => dispatch({
          type:'SEARCH_MOVIES_SUCCESS',
          payload: movie }),
   SEARCH_MOVIES_REQUEST: () => dispatch ({
          type: 'SEARCH_MOVIES_REQUEST'
      }),
      SEARCH_MOVIES_FAILURE: (movie) => dispatch ({
        type: 'SEARCH_MOVIES_FAILURE',
        payload: movie
    })
  }
}
export default connect(mapStateToProps, mapDispatch)(App);
