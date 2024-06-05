// pages/DetailView/detailView.js
import React, { useState, useEffect } from 'react';
import { getShowDetails } from '../../services/movieService';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShowView = (props) => {
    const IMAGE_NOT_FOUND = "notfound.png";
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
        <div className="row g-4 align-items-center">
            <div className="col-md-4">
                {show.image ? (
                    <img src={show.image.medium} className="img-fluid rounded shadow-sm" alt={show.name} style={{ width: "100%", height: "500px" }} />
                ) : (
                    <img src={IMAGE_NOT_FOUND} className="img-fluid rounded shadow-sm" alt="TV Maze" style={{ width: "100%", height: "500px" }} />
                )}
            </div>
            <div className="col-md-8">
                <div className="row">
                    <div className="col-md-6">
                        <div className="card bg-light p-4 shadow-sm" style={{ width: "100%", height: "500px" }}>
                            <h6 className="card-title"> <strong>Show Name : </strong>{show.name + " "} {show.season}</h6>
                            <strong>Summary : </strong><h6 className="card-text" dangerouslySetInnerHTML={{ __html: show.summary }}></h6>
                            {show.language && <h6 className="card-text">   <strong>Language : </strong>{show.language}</h6>}
                            {show.type && <h6 className="card-text">   <strong>Show Type : </strong>{show.type}</h6>}
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card bg-light p-4 shadow-sm" style={{ width: "100%", height: "500px" }}>
                            {show.genres && show.genres.length > 0 &&
                                <div className="mt-3">
                                    <strong>Genres :  {show.genres.map((genre, index) => (
                                        <span key={index}>{genre + " "}</span>
                                    ))} </strong>
                                </div>}
                            {show.network && <><strong>Country of Origin: </strong><h6 className="card-text"> {show.network.country.name}</h6></>}
                            {show.premiered && <><strong>Premiered on : </strong><h6 className="card-text"> {show.premiered}</h6></>}
                            {show.schedule && show.schedule.days && show.schedule.days.length > 0 ? (
                                <div className="mt-3">
                                    <strong>Schedule Days:  {show.schedule.days.map((day, index) => (
                                        <span key={index}>{day + " "}</span>
                                    ))} </strong>
                                </div>
                            ) : (
                                <p className="mt-3 text-muted">No schedule available</p>
                            )}
                            {show.schedule && show.schedule.time && <><h6 className="card-text"> <strong>Schedule Time : </strong> {show.schedule.time}</h6></>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ShowView;
