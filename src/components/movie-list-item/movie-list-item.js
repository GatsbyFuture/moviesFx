import './movie-list-item.css';
import {useContext} from "react";
import {Context} from "../../context";

const MovieListItem = (props) => {
    const {name, viewers, favourite, like, id} = props;

    const {state, dispatch} = useContext(Context);

    const onDelete = () => {
        dispatch({type: 'ON_DELETE', payload: id});
    }

    const onToggle = (e) => {
        const name = e.currentTarget.getAttribute('data-toggle');
        dispatch({type: 'ON_LIKE_AND_FAVOURITE', payload: {id, name: name}});
    }

    return (
        <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
            <span className='list-group-item-label' onClick={onToggle} data-toggle='like'>{name}</span>
            <input type='number' className='list-group-item-input' defaultValue={viewers}/>
            <div>
                <button type='button' className='btn-cookie btn-sm' onClick={onToggle} data-toggle='favourite'>
                    <i className='fas fa-cookie'></i>
                </button>
                <button type='button' className='btn-cookie btn-sm' onClick={onDelete}>
                    <i className='fas fa-trash'></i>
                </button>
                <i className={`fas fa-star ${like && 'd-none'}`}></i>
            </div>
        </li>
    );
}

export default MovieListItem;