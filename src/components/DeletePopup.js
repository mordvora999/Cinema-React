import React from 'react';
import '../App.css'
import {reducer,initialState} from '../Reducers';
import  { useReducer } from 'react';

 export default function DeletePopup(){
   const [state] = useReducer(reducer, initialState);
   const {selectedMovie,movies}=state;
     return(
        <div className="overlay">}
             <div className="popup">
                שלום פופ אפ
                {console.log("Delete Component Popup SelectMovie",selectedMovie)}
                {console.log("Delete Component Popup movies",movies)}
            </div>
        </div>
     )
 }