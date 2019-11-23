import React from 'react';
import { connect } from 'react-redux';

const Popup = props => {

    function cancelEdit(){
        props.closePopup();
    }

   function saveEdit()
   {
    let valTitle= document.getElementById("title").value;
    let valYear= document.getElementById("year").value;
    for(let i = 0 ; i<props.movies.length;i++)
    {
         if(props.movies[i].imdbID === props.movie.imdbID )  
         {
           console.log("props  => ",props);
              props.movies[i].Title = valTitle;
             props.movies[i].Year = valYear;
             props.movie.Title = valTitle;
             props.movie.Year = valYear;
             props.requestMovie();
            props.saveMovie(props.movies);
         } 
        if(props.movies[i].Title===valTitle && props.movies[i].imdbID !== props.movie.imdbID)
        {
           alert("existing movie!!!!!!")
            break;
        }  
         props.closePopup();  
    }

    }
    return(
        <div className="overlay">
        <div className="popup">
            <form className="ui form">
                <h4 className="ui dividing header">Movie Details</h4>
                <div className="field">
                    <label>Title</label>
                    <div className="field">
                        <input type="text" id="title" defaultValue={props.movie.Title} required name="movie[title]" //pattern="[A-Za-z]+('[A-Za-z]+)?"
                        /> 
                    </div>
                    <label>Year</label>
                    <div className="field">
                        <input type="text" id="year" defaultValue={props.movie.Year} required name="movie[year]" />
                    </div>
                    {/* <label>Runtime</label>
                    <div className="field">
                        <input type="text" defaultValue={props.movie.Runtime} name="movie[runtime]" />
                    </div>
                    <label>Genre</label>
                    <div className="field">
                        <select className="ui fluid dropdown">
                        <option value="">Select Genre</option>  
                        <option value="Ac">Action</option>
                        <option value="Ad">Adventure</option>
                        <option value="An">Animation</option>
                        <option value="Co">Comedy</option>
                        <option value="Cr">Crime</option>
                        <option value="Dr">Drama</option>
                        <option value="Fam">Family</option>
                        <option value="Fan">Fantasy</option>
                        <option value="Hi">Historitic</option>
                        <option value="Mu">Musical</option>
                        <option value="Sf">Science Fiction</option>
                        </select>
                    </div>
                    <label>Director</label>
                    <div className="field">
                        <input type="text" defaultValue={props.movie.Director} name="movie[director]" />
                    </div>  */}
                </div> 
                <div style={{float:'right'}} className="ui buttons">
                    <input type="button" className="ui button" value="Cancel" onClick={ cancelEdit.bind(this) } />
                        <div className="or"></div>
                    <input  type="button" className="ui positive button" onClick={ saveEdit.bind(this) }  value="Save"/>
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
        saveMovie: (movie) => dispatch({
            type:'SAVE_MOVIE',
            payload: movie }),
         requestMovie: () => dispatch({
            type:'SEARCH_MOVIES_REQUEST' })
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Popup);