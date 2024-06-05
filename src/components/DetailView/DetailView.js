// pages/DetailView/detailView.js
import React, { useState, useEffect } from 'react';
import EpisodeView from './EpisodeView';
import 'bootstrap/dist/css/bootstrap.min.css';
import ShowView from './ShowView';

const DetailView = (props) => {
    return (
        <div className="container my-4">
            <ShowView showId={props.showId}></ShowView>
            <div className="row g-4 align-items-center">
                <EpisodeView showId={props.showId} episode={props.episode}></EpisodeView>
            </div>
        </div>
    );
};
export default DetailView;
