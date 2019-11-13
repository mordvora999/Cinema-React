import React from 'react';
import { connect } from 'react-redux';

const DeletePopup = props => {

    return(
        <div className="overlay">
            <div className="popup">
                <form className="ui form">
                <h4 className="ui dividing header">Delete Movie</h4>
                <div className="field">
                Are you sure you want to delete the movie: {props.movie.Title} ?
                </div>
                    <div className="ui buttons" style={{float:'right'}}>
                        <button className="ui button">Cancel</button>
                            <div className="or"></div>
                        <button className="ui positive button" >Delete</button>
                    </div>
                </form> 
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        movie: state.reducer.selectedMovie
    }
}

export default connect(mapStateToProps)(DeletePopup);