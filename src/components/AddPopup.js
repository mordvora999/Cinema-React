import React from 'react';
import { connect } from 'react-redux';
import { useState} from 'react';

const AddPopup = props => {

    const [ errorMessage, setErrorMessage ] = useState(false);
    const [ valPoster, setImg ] = useState(false);


    function cancelAdd(){
        props.closePopup();
    }

   function saveAdd()
   {
       
    let ID = 'tt' + Math.random().toExponential().substr(2, 7);
    let valTitle= document.getElementById("title").value;
    let valYear= document.getElementById("year").value;
    let valPoster= document.getElementById("poster").value;
  
    console.log("valTitle  => ",valTitle);
    console.log("valYear  => ",valYear);
    console.log("valPoster  => ",valPoster);
    const existingMovie = props.movies.filter(movie => movie.Title === valTitle )
    if (!existingMovie) {
        setErrorMessage('There is a movie of the same name, Please change the name of the movie!');
        return;
    }  
    
        const movie = {
            ...props.movie,
            Title: valTitle,
            Year: valYear,
            Poster: valPoster,
            imdbID:ID 
        }
        console.log("movie-------> ",movie);
        const movies = [ ...props.movies ];
        movies.push(movie);
        console.log("movies.push => ",movies); 
        props.saveAddMovie(movies);
         props.closePopup();  
    }

    function fileSelestdHandler(event){
        console.log(event.target.files[0])
 
    }

    const showError = errorMessage ? <div className="message message-danger">{errorMessage}</div> : null;

    return(
        <div className="overlay">
        <div className="popup">
            <form className="ui form">
                <h4 className="ui dividing header">Movie Details</h4>
                <div className="field">
                    <label>Title</label>
                    <div className="field">
                        <input type="text" id="title" placeholder="Title" name="movie[title]" required //pattern="[A-Za-z]+('[A-Za-z]+)?"
                        /> 
                     {/* pattern="[A-Za-z]+('[A-Za-z]+)?"  */}
                     { showError }
                    </div>
                    <label>Year</label>
                    <div className="field">
                        <input type="text" id="year" placeholder="Year" name="movie[year]" required pattern="\b(19\d{2}|20\d[1-9])\b"/>
                    </div>
                    <label>Poster</label>
                    <div className="field">
                        <input type="file"  id="poster"  name="movie[poster]"
                        onChange={fileSelestdHandler.bind(this)}
                        required pattern="(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})" />
                    </div>

                </div> 
                <div style={{float:'right'}} className="ui buttons">
                    <input type="button" className="ui button" value="Cancel" onClick={ cancelAdd.bind(this) } />
                        <div className="or"></div>
                    <input  type="button" className="ui positive button" onClick={ saveAdd.bind(this) }  value="Add"/>
                </div>

            </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movie: state.reducer.selectedMovie,
        movies:state.reducer.movies
    }
}
const mapDispatchToProps = dispatch => {
    return {
        saveAddMovie: (movies) => dispatch({
            type:'ADD_MOVIE',
            payload: movies })
 
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(AddPopup);