import React from 'react';
import Popup from './Popup';
import  { useReducer ,useState} from 'react';
import {reducer,initialState} from '../Reducers';
import DeletePopup from './DeletePopup';
import { connect } from 'react-redux';

//class MovieCard extends React.Component
const MovieCard = (props) =>  {

    const [state, dispatch] = useReducer(reducer, initialState);

    const [showPopup, setShowPopup] = useState(false);
    const [delPopup, setDletePopup] = useState(false);

    // constructor(props){
    //     super(props)
    //     this.state = { showPopup: false }
    // }


        // this.setState({
        //   showPopup: !this.state.showPopup
        // });
       



    // render(){
        // const popup = this.state.showPopup 
     

           function  togglePopup ()  {
                showPopup ? setShowPopup(false) : setShowPopup(true);
                dispatch ({
                    type: "MOVIE_SELECTED",
                   payload:props.movie
                });
             
            }

            function deleteMovie(){ 
                delPopup ? setDletePopup(false):setDletePopup(true);
                console.log("delete me----111111", props)
                dispatch ({
                    type: "MOVIE_SELECTED",
                   payload:props
                });
               
                console.log("delete  ", delPopup)
            }

            const popupEdit= showPopup ? <Popup  /> : null;
            const popupDelete= delPopup ?<DeletePopup/>:null;
            const {selectedMovie}=state;
        console.log('props',props)
            return (
        <div> 
            <div className="ui card">
                <div className="content">
                    <div className="header title">{props.movie.Title}</div>
                    { <img className="cover" src={props.movie.Poster} onClick={deleteMovie.bind(this)}
                        alt={`The Movie Title: ${props.movie.Title}`}/>
                    }
                    {popupEdit}
                    {popupDelete}
                    { <div>
                            <div className="ui two buttons">
                               <button   onClick={togglePopup.bind(this)} className="ui positive basic labeled icon button">Edit<i className="pencil alternate icon"></i></button>
                                <button onClick={deleteMovie.bind(this)} className="ui negative basic right labeled icon button">Delete<i className="trash icon"></i></button>
                            </div>
                      </div>
                    }
                </div>
            </div>
            <div style={{border:'2px',width:'400px'}}>{popupEdit}</div>
        </div>
        );
    }

    //  const mapStateToProps = state => {
    //      return {
    //          movie: state.selectedMovie
    //      }
    //  }
    
    //  export default connect(mapStateToProps)(MovieCard);
    


export default MovieCard;