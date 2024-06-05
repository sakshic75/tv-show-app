import React, { useState, useEffect } from 'react';
import { getMoviesSchedule } from '../../services/movieService';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ListView.css';
import DetailView from '../DetailView/DetailView';
import DefaultView from '../DetailView/DefaultView';

const ListView = () => {
    const IMAGE_NOT_FOUND = "notfound.png";
    const [shows, setShows] = useState([]);
    const [showId, setShowId] = useState(0);
    const [episode, setEpisode] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const [showsPerPage] = useState(4); // Number of shows per page

    useEffect(() => {
        let today = new Date().toISOString().split('T')[0];
        getMoviesSchedule("US", today)
            .then((response) => {
                setShows(response);
            })
            .catch(err => {
                console.log(err);
            });
    }, []);

    // Change page
    const nextPage = () => {
        setCurrentPage(currentPage + 1);
    };

    const prevPage = () => {
        setCurrentPage(currentPage - 1);
    };

    // Calculate the index of the first and last show of the current page
    let indexOfLastShow = currentPage * showsPerPage;
    if (currentPage != 1) {
        indexOfLastShow -= 1;
    }
    let indexOfFirstShow = indexOfLastShow - showsPerPage;
    return (
        <div className="container-fluid">
            <div className="row flex-nowrap">
                <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
                    <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                        <a href="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                            <h6 className="align-items-center"> <strong>Currently streaming in US on {new Date().toISOString().split('T')[0]}  </strong></h6>
                        </a>
                        {/* Pagination */}
                        <nav>
                            <ul className="pagination justify-content-center">
                                <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <button onClick={prevPage} className="page-link">Previous</button>
                                </li>
                                <li className={`page-item ${indexOfLastShow >= shows.length ? 'disabled' : ''}`}>
                                    <button onClick={nextPage} className="page-link">Next</button>
                                </li>
                            </ul>
                        </nav>
                        <ul className="nav nav-pills flex-column mb-0 align-items-center align-items-sm-start" id="menu">
                            {shows.slice(indexOfFirstShow, indexOfLastShow).map((showItem, index) => {
                                const showEmbedded = showItem._embedded.show;
                                const id = showEmbedded.id;
                                return (
                                    <li key={showEmbedded.id} className="nav-item fixed">
                                        <a className="nav-link d-flex flex-column align-items-center " style={{ color: 'white', width: "100%" }} onClick={() => { setShowId(id); setEpisode(showItem.number) }} >
                                            {showEmbedded.image && <img src={showEmbedded.image.medium} style={{ width: "50ox", height: "70px" }} className="show-image mb-2" alt={showEmbedded.name} />}
                                            {!showEmbedded.image && <img src={IMAGE_NOT_FOUND} style={{ width: "50ox", height: "70px" }} className="show-image mb-2" alt={showEmbedded.name} />}
                                            <span>{showEmbedded.name + " "} <span>S{showItem.season + " "}E{showItem.number} </span></span>
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                        <hr />
                    </div>
                </div>
                <div className="col py-3">
                    {showId !== 0 && showId !== null && <DetailView showId={showId} episode={episode}></DetailView>}
                    {showId === 0 && showId !== null && <DefaultView></DefaultView>}

                </div>
            </div>
        </div>
    );
};

export default ListView;
