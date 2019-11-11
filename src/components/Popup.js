import React from 'react';
import './popup.css';
import '../App.css'
import { connect } from 'react-redux';


 const Popup=(props)=>{
     console.log("popup - props=>",props);
     console.log("popup - this.props=>",props);
     return(
         <div className="overlay">
         <div className="popup">
             <form className="ui form">
                 <h4 className="ui dividing header">Movie Details</h4>
                 <div className="field">
                     <label>Title</label>
                     <div className="field">
                         <input type="text" name="movie[title]" placeholder={`${props.movie.Title}`}/>
                     </div>
                     <label>Year</label>
                     <div className="field">
                         <input type="text" name="movie[year]" placeholder={`${props.movie.Year}`}/>
                     </div>
                     <label>Runtime</label>
                     <div className="field">
                         <input type="text" name="movie[runtime]" placeholder={`${props.movie.Runtime}`}/>
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
                         <input type="text" name="movie[director]" placeholder={`${props.movie.Director}`}/>
                     </div>
                 </div>
                 <div className="ui buttons">
                     <button onClick={props.closePopup} className="ui button">Cancel</button>
                         <div className="or"></div>
                     <button className="ui positive button">Save</button>
                 </div>
             </form>
             </div>
         </div>
     )
 }
 const mapStateToProp = state => {
     return {
         movie: state.selectedMovie
    }
 }

 export default connect(mapStateToProp)(Popup);
//export default Popup;