import React from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import MovieCard from './components/MovieCard';
import axois from 'axios';
import  { useEffect,useReducer } from 'react';
import {reducer,initialState} from './Reducers';
import spinner from './assets/ajax-loader.gif';

const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=b3f6f90a";



const App = () => {
const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axois.get(MOVIE_API_URL)
    .then(jsonResponse => {console.log("search data=>",jsonResponse)
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });  
    })
    .catch(err=>{console.log("error");})
  }, []);

 const onSubmit = (term) => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });
   axois.get(`http://www.omdbapi.com/?apikey=b3f6f90a&s=${term}`)
   .then(data => {
     console.log("data=>",data);
     if(data.data.Response === "True")
     {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: data.data.Search
      });
     }
     else{
      dispatch({
        type: "SEARCH_MOVIES_FAILURE",
        error: data.data.Error
      });
     }
    })
    .catch(error => {console.log("opps! ",error.massege);})    
  }

  //  const  selectMovie=(movie)=>{console.log("app =>>>>> select movie")
  //   dispatch({
  //     type: "MOVIE_SELECTED",
  //     payload:movie
  //   });
  // }
//onClick={selectMovie(movie)}
  const { movies, loading } = state;
  const ShowMovies =
  loading === true ? (<img className="spinner" src={spinner} alt="Loading spinner" />) 
     : (movies.map((movie, index) => 
     {
       return(<MovieCard key={`${index}-${movie.Title}`}  movie={movie} />)
      }
         
       )
  );
console.log('reducer movies=========',movies)
    return(
      <div className="container ui" style={{marginTop:'20px'}}>
        <SearchBar send={onSubmit} />
        <div className="moviesList">
       {ShowMovies}
       </div>
      </div>
    )
    

  
}

// const mapStateToProps = state => {
//   return { songs: state.songs}
// }
// export default connect(mapStateToProps)(MovieCard);

export default App;


// class App extends React.Component{

//   state = { Movies:[] };

//   onSubmit = (term) => {
//     axois.get(`http://www.omdbapi.com/?apikey=b3f6f90a&t=${term}`)
//     .then(data => {
//       console.log("data=>",data);
//       this.setState({
//         Movies: data.data
//       })
//     }).catch(error => {
//       console.log("opps! ",error.massege);
//     })
//   }

//   render(){
//     //const  { Movies }  = this.state;
//     return(
//     <div className="container ui" style={{marginTop:'20px'}}>
//       <SearchBar send={this.onSubmit} />
//         {
//           <div className="moviesList">
//             {
//               // this.state.Movies.map(movie => <MovieCard movie={movie} />)
//               <MovieCard movie={this.state.Movies} />
//             }
//           </div>
//         }
//         {/* {
//           <div>
//             { this.state.Movies.length > 0 ? 
//               // console.log("succsses")
//               this.state.Movies.map(movie => { return (<MovieCard movie={movie} />)}) 
//                :
//                ( <p>Couldn't find any movie. Please search again using
//                another search criteria.</p> )
//               // console.log("no-succsses")
//             }
//           </div>
//         } */}
//     </div>
//   );
//   }
// }
// export default App;