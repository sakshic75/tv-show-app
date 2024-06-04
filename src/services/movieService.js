// movieService.js
module.exports.getMoviesSchedule = getAllShowsInCountryOnDate;
module.exports.getShowDetails = getShowDetails;
module.exports.getEpisodesDetails = getEpisodesDetails;
const MOVIE_ENDPOINT = 'https://api.tvmaze.com';

async function getAllShowsInCountryOnDate(country, date) {
    const CURRENT_COUNTRY_SCHEDULE = `/schedule/web?date=${date}&country=${country}`;
    console.log(MOVIE_ENDPOINT+CURRENT_COUNTRY_SCHEDULE);
    const apiEndpoint = await fetch(MOVIE_ENDPOINT + CURRENT_COUNTRY_SCHEDULE);
    const listOfShows = await apiEndpoint.json();
    console.log(listOfShows);
    return listOfShows;
}

async function getShowDetails(showId)
{
    const SHOW_DETAIL = `/shows/${showId}`
    const apiEndpoint = await fetch(MOVIE_ENDPOINT + SHOW_DETAIL);
    const showDetails = await apiEndpoint.json();
    console.log(showDetails);
    return showDetails;

}

async function getEpisodesDetails(showId)
{
    const EPISODE_DETAIL = `/shows/${showId}/episodes`
    const apiEndpoint = await fetch(MOVIE_ENDPOINT + EPISODE_DETAIL);
    const episodeDetails = await apiEndpoint.json();
    console.log(episodeDetails);
    return episodeDetails;

}
