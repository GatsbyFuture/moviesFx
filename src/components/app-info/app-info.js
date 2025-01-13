import './app-info.scss';

const AppInfo = (props) => {
    const {movies, favourites} = props
    return (
        <div className='app-info'>
            <p className='fs-3 text-uppercase'>Number of All movies: {movies}</p>
            <p className='fs-4 text-uppercase'>Favourite movies: {favourites}</p>
        </div>
    )
}

export default AppInfo;