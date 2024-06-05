import React, { useState, useEffect } from 'react';
import { getEpisodesDetails } from '../../services/movieService';

const EpisodeView = (props) => {
  const [episodes, setEpisodes] = useState([]);
  const [currentEpisode, setCurrentEpisode] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    fetchEpisodes(props.showId);
  }, [props.showId]);

  const fetchEpisodes = (showId) => {
    getEpisodesDetails(showId)
      .then((response) => {
        setEpisodes(response);
        const currentEpisode = response.find(episode => episode.number == props.episode);
        setCurrentEpisode(currentEpisode);
        const currentIndex = response.findIndex(episode => episode.id === currentEpisode.id);
        setCurrentIndex(currentIndex);
      })
      .catch(err => {
        console.error(err);
      });
  };

  const handlePreviousEpisode = () => {
    const newIndex = currentIndex - 1;
    if (newIndex >= 0) {
      setCurrentIndex(newIndex);
      setCurrentEpisode(episodes[newIndex]);
    }
  };

  const handleNextEpisode = () => {
    const newIndex = currentIndex + 1;
    if (newIndex < episodes.length) {
      setCurrentIndex(newIndex);
      setCurrentEpisode(episodes[newIndex]);
    }
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center text-primary">Episodes</h3>
      <h5 className="text-center mb-4 text-secondary">Total number of episodes: {episodes.length}</h5>
      {currentEpisode && (
        <div className="card mb-4 bg-light" style={{ width: "100%", height: "700px" }}>
          <div className="card-header bg-primary">
            {currentEpisode.season && <p style={{ color: "white" }}><strong >Season : </strong> {currentEpisode.season}</p>}
            <h5 className="card-title text-light">Current Episode : {currentEpisode.name}</h5>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col">
                {currentEpisode.airdate && <p><strong className="text-primary">Air Date :</strong> {currentEpisode.airdate}</p>}
                {currentEpisode.airtime && <p><strong className="text-primary">Air Time :</strong> {currentEpisode.airtime}</p>}
                {currentEpisode.runtime && <p><strong className="text-primary">Run time :</strong> {currentEpisode.runtime + " minutes"}</p>}
                {currentEpisode.url && <><p><strong className="text-primary">URL:</strong>
                  <a href={currentEpisode.url} target="_blank" rel="noopener noreferrer" className="text-info">{currentEpisode.url}</a>
                </p><iframe style={{ width: "100%", height: "400px" }} className="embed-responsive embed-responsive-16by9" src={currentEpisode.url} title="Episode URL" allowFullScreen /></>
                }
                <div className="d-flex justify-content-between mt-3">
                  <button
                    className="btn btn-primary"
                    onClick={handlePreviousEpisode}
                    disabled={currentIndex === 0}
                  >
                    Previous Episode
                  </button>
                  <button
                    className="btn btn-primary"
                    onClick={handleNextEpisode}
                    disabled={currentIndex === episodes.length - 1}
                  >
                    Next Episode
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EpisodeView;
