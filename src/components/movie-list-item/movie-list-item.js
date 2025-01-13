// import {Component} from 'react';
import './movie-list-item.css';

// OOP
// class MovieListItem extends Component {
//
//     render() {
//         const {name, viewers, favourite, like, onDelete, onToggle} = this.props;
//         return (
//             <li className={`list-group-item d-flex justify-content-between ${favourite && 'favourite'}`}>
//                 <span className='list-group-item-label' onClick={onToggle} data-toggle='like'>{name}</span>
//                 <input type='number' className='list-group-item-input' defaultValue={viewers}/>
//                 <div>
//                     <button type='button' className='btn-cookie btn-sm' onClick={onToggle} data-toggle='favourite'>
//                         <i className='fas fa-cookie'></i>
//                     </button>
//                     <button type='button' className='btn-cookie btn-sm' onClick={onDelete}>
//                         <i className='fas fa-trash'></i>
//                     </button>
//                     <i className={`fas fa-star ${like && 'd-none'}`}></i>
//                 </div>
//             </li>
//         );
//     }
// }

const MovieListItem = (props) => {
    const {name, viewers, favourite, like, onDelete, onToggle} = props;
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