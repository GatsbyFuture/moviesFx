import './app-info.scss';
import {useContext} from "react";
import {Context} from "../../context";

const AppInfo = () => {
    const {state, dispatch} = useContext(Context);
    const movies = state.data.length;
    const favourites = state.data.filter(item => item.favourite).length;
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>Number of All movies: {movies}</p>
            <p className='fs-4 text-uppercase'>Favourite movies: {favourites}</p>
        </div>
    )
}

export default AppInfo;