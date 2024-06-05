// pages/DetailView/detailView.js
import React, { useState, useEffect } from 'react';
import './DetailView.css'
import { getShowDetails } from '../../services/movieService';

const DefaultView = (props) => {
    const [show, setShow] = useState([]);
    useEffect(() => {
        getShowDetails(props.showId).then((response) => {
            console.log(response);
            setShow(response);
        }).catch(err => {
            console.log(err);
        });
    }, [props.showId]);
    return (
        <div className="container my-4">
            <div className="row g-4 align-items-center">
                <div className="col-md-4">
                    <img src="kapittx.png" style={{ width: "100%", height: "600px", color: "white" }} className="img-fluid rounded shadow-sm" alt="TV Maze" />
                </div>

                <div className="col-md-8" >
                    <div className="card bg-dark p-4 shadow-sm" style={{ width: "100%", height: "600px", color: "white" }}>
                        <h4>
                            Welcome to Kapittx – Your Ultimate TV Guide!
                        </h4>
                        <p> 🌟 Stay Connected, Stay Informed</p>
                        <p>
                            Discover what's on TV right now with Kapittx, the ultimate app for real-time TV schedules and personalized viewing experiences.
                            <hr></hr>
                            📺 Real-Time Updates
                            Never miss a moment! Get the most accurate and up-to-date TV listings at your fingertips.
                            <hr></hr>
                            ⏰ Never Miss a Show
                            Set reminders and receive notifications for must-watch programs.
                            <hr></hr>
                            📱 Multi-Device Access
                            Check schedules and stream content seamlessly across your smartphone, tablet, and smart TV.
                            <hr></hr>
                            🎬 Smart Search and Filters
                            Find exactly what you’re looking for with advanced search and filter options by genre, time, or channel.
                            <hr></hr>
                            Kapittx – Your Guide to What's On Now!
                            Dive into a world of entertainment with Kapittx. Sign up today and transform your TV viewing experience.
                            <hr></hr>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultView;
