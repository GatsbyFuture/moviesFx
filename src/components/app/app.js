import {useContext, useEffect, useState} from 'react';
import {v4 as uuid} from 'uuid';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import {Context} from "../../context";

import './app.css';

const App = () => {
    const [isLoading, setLoading] = useState(true);

    const {state, dispatch} = useContext(Context);

    useEffect(() => {
        setLoading(true);
        fetch('https://jsonplaceholder.typicode.com/todos?_start=0&_limit=5')
            .then(response => response.json())
            .then(data => {
                const newArray = data.map(item => ({
                    id: item.id,
                    name: item.title,
                    viewers: Math.floor(Math.random() * 1000) + 1,
                    favourite: Math.random() > 0.5,
                    like: Math.random() > 0.5,
                }))
                dispatch({type: 'GET_DATA', payload: newArray})
            })
            .catch((e) => console.log(e))
            .finally(() => setLoading(false));
    }, []);

    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo/>
                <div className='search-panel'>
                    <SearchPanel/>
                    <AppFilter/>
                </div>
                {isLoading && "Loading..."}
                <MovieList/>
                <MoviesAddForm/>
            </div>
        </div>
    )

}

// const dataArr = [
//     {name: "Jerry Macguary (Tom cruise)", viewers: 350, favourite: true, like: false, id: 1},
//     {name: "Tomorrow of adge", viewers: 375, favourite: false, like: false, id: 2},
//     {name: "Impossible mission (Tom cruise).", viewers: 753, favourite: false, like: true, id: 3}
// ];

export default App;