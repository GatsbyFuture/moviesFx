import {useState} from 'react';
import {v4 as uuid} from 'uuid';
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";

import './app.css';

const App = () => {
    const [data, setData] = useState(dataArr);
    const [term, setTerm] = useState("");
    const [filter, setFilter] = useState("all");

    const onDelete = id => {
        setData(prevState => (
            prevState.filter(item => item.id !== id)
        ))
    }

    const onAdd = ({name, viewers}) => {
        const newItems = {
            name: name,
            viewers: viewers,
            favourite: false,
            like: false,
            id: uuid()
        };
        setData(prevState => (
            [...prevState, newItems]
        ))
    }

    const onToggleLikeAndFavorite = (id, prop) => {
        setData(prevState => (
            prevState.map(item => item.id === id ? {
                ...item,
                [prop]: !item[prop]
            } : item)
        ))
    }

    const searchHandler = (data, term) => {
        if (term.length === 0) return data;
        return data.filter(item => (
            item.name.toLowerCase().includes(term.toLowerCase())
        ))
    }

    const filterHandler = (data, term) => {
        switch (term) {
            case "popular":
                return data.filter(item => item.like);
            case "mostViewers":
                return data.filter(item => item.viewers > 500)
            default:
                return data;
        }
    }

    const onSearch = newTerm => {
        setTerm(newTerm);
    }

    const onFilter = filter => {
        setFilter(filter);
    }

    const visibleData = filterHandler(searchHandler(data, term), filter);

    return (
        <div className='app font-monospace'>
            <div className='content'>
                <AppInfo
                    movies={data.length}
                    favourites={data.filter(item => item.favourite).length}
                />
                <div className='search-panel'>
                    <SearchPanel
                        onSearch={onSearch}
                    />
                    <AppFilter
                        filter={filter}
                        onFilter={onFilter}
                    />
                </div>
                <MovieList
                    data={visibleData}
                    onDelete={onDelete}
                    onToggle={onToggleLikeAndFavorite}
                />
                <MoviesAddForm onAdd={onAdd}/>
            </div>
        </div>
    )

}

const dataArr = [
    {name: "Jerry Macguary (Tom cruise)", viewers: 350, favourite: true, like: false, id: 1},
    {name: "Tomorrow of adge", viewers: 375, favourite: false, like: false, id: 2},
    {name: "Impossible mission (Tom cruise).", viewers: 753, favourite: false, like: true, id: 3}
];

export default App;