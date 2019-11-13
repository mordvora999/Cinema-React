import React from 'react';
//import { useReducer } from 'react';
//import { reducer, initialState } from '../Reducers';
import { connect } from 'react-redux';

const Popup = props => {

    return(
        <div className="overlay">
        <div className="popup">
            <form className="ui form">
                <h4 className="ui dividing header">Movie Details</h4>
                <div className="field">
                    <label>Title</label>
                    <div className="field">
                        <input type="text" defaultValue={props.movie.Title} name="movie[title]" pattern="[A-Za-z]+('[A-Za-z]+)?"/> 
                    </div>
                    <label>Year</label>
                    <div className="field">
                        <input type="text" defaultValue={props.movie.Year} name="movie[year]" />
                    </div>
                    <label>Runtime</label>
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
                    </div> 
                </div> 
                <div style={{float:'right'}} className="ui buttons">
                    <button className="ui button">Cancel</button>
                        <div className="or"></div>
                    <button className="ui positive button">Save</button>
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

export default connect(mapStateToProps)(Popup);