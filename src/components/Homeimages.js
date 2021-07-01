import React from 'react'
import taskHome from './bg-taskHome.png'
import './style.css'
import {Link} from 'react-router-dom'


export default function Homeimages() {
    return (
        <div className="homeBg">
        <h1>Task Management</h1>
        <h2>Made Delightfully Simple</h2>
        <h5>With Us You Will Manage Task With Less Overheads.</h5>
        <button className="btn start " ><Link to="/login">Lets get Started, Now!</Link> </button>
        <img src={taskHome} alt="Bg Images"/>
           
        </div>
    )
}
