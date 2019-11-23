import React from 'react';
import { connect } from 'react-redux';


const DeletePopup = props => {

    function cancleDelete(){
        props.closeDeletePopup();
    }

    function deleteMovie(){

      const MoviesArr =   props.movies.filter(m => m.imdbID != props.movie.imdbID)
        console.log("MoviesArr",MoviesArr);
        props.movie_delete(MoviesArr);
        props.closeDeletePopup();
        console.log("deleteMovie propssssss  => ",props);
    }

    return(
        <div className="overlay">
            <div className="popup">
                <form className="ui form">
                <h4 className="ui dividing header">Delete Movie</h4>
                <div className="field">
                Are you sure you want to delete the movie: {props.movie.Title} ?
                </div>
                    <div className="ui buttons" style={{float:'right'}}>
                        <input type="button" className="ui button" value="Cancel" onClick={ cancleDelete.bind(this) }  />
                            <div className="or"></div>
                        <input type="button" className="ui positive button" value="Delete" onClick={ deleteMovie.bind(this) } />
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
        movie_delete: (moviesArr) => dispatch({
            type:'SAVE_MOVIE',
            payload: moviesArr })  

    }
}

export default connect(mapStateToProps,mapDispatchToProps)(DeletePopup);