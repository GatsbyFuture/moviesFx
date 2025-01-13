import {Component} from "react";
import {v4 as uuid} from "uuid";
import AppInfo from "../app-info/app-info";
import SearchPanel from "../search-panel/search-panel";
import AppFilter from "../app-filter/app-filter";
import MovieList from "../movie-list/movie-list";
import MoviesAddForm from "../movies-add-form/movies-add-form";
import './app.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {name: "Jerry Macguary (Tom cruise)", viewers: 350, favourite: true, like: false, id: 1},
                {name: "Tomorrow of adge", viewers: 375, favourite: false, like: false, id: 2},
                {name: "Impossible mission (Tom cruise).", viewers: 753, favourite: false, like: true, id: 3}
            ],
            term: "",
            filter: "all"
        }
    }

    onDelete = id => {
        this.setState(({data}) => ({data: data.filter(item => item.id !== id)}))
    }

    onAdd = ({name, viewers}) => {
        const newItems = {name: name, viewers: viewers, favorite: false, like: false, id: uuid()};
        this.setState(({data}) => ({data: [...data, newItems]}));
    }

    onToggleLikeAndFavorite = (id, porp) => {
        this.setState(({data}) => ({
            data: data.map(item => item.id === id ? {...item, [porp]: !item[porp]} : item)
        }))
    }

    searchHandler = (data, term) => {

        if (term.length === 0) return data;

        return data.filter(item => item.name.toLowerCase().includes(term.toLowerCase()));
    };

    onSearch = newTerm => this.setState({term: newTerm});

    filterHandler = (data, filter) => {
        switch (filter) {
            case "popular":
                return data.filter(item => item.like);
            case "mostViewers":
                return data.filter(item => item.viewers > 500)
            default:
                return data;
        }
    };

    onFilter = filter => this.setState({filter: filter});

    render() {
        const {data, term, filter} = this.state;

        const visibleData = this.filterHandler(this.searchHandler(data, term), filter);

        return (
            <div className='app font-monospace'>
                <div className='content'>
                    <AppInfo
                        movies={data.length}
                        favourites={data.filter(item => item.favourite).length}
                    />
                    <div className='search-panel'>
                        <SearchPanel
                            onSearch={this.onSearch}
                        />
                        <AppFilter
                            filter={filter}
                            onFilter={this.onFilter}
                        />
                    </div>
                    <MovieList
                        data={visibleData}
                        onDelete={this.onDelete}
                        onToggle={this.onToggleLikeAndFavorite}
                    />
                    <MoviesAddForm onAdd={this.onAdd}/>
                </div>
            </div>
        )
    }
}

export default App;