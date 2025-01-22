import {useContext, useState} from 'react';
import './movies-add-form.css';
import {Context} from "../../context";
import {v4 as uuid} from "uuid";

const MoviesAddForm = () => {
    const {state, dispatch} = useContext(Context);

    const [movie, setMovie] = useState({
        name: '',
        viewers: '',
    });

    const changeHandlerInput = e => {
        setMovie({
            ...movie,
            [e.target.name]: e.target.value,
        })
    }

    const addFormHandler = e => {
        e.preventDefault();
        if (movie.name === '' || movie.viewers === '') return;
        dispatch({
            type: 'ADD_MOVIE',
            payload: {
                ...movie,
                favourite: false,
                like: false,
                id: uuid()
            },
        })
        setMovie({
            name: '',
            viewers: '',
        })
    }

    return (
        <div className='movies-add-form'>
            <h3>Yangi kino qo'shish</h3>
            <div className='add-form d-flex'>
                <input
                    type='text'
                    className='form-control new-post-label'
                    placeholder='Qanday kino?'
                    onChange={changeHandlerInput}
                    name='name'
                    value={movie.name}
                />
                <input
                    type='number'
                    className='form-control new-post-label'
                    placeholder="Nechi marta ko'rilgan?"
                    onChange={changeHandlerInput}
                    name='viewers'
                    value={movie.viewers}
                />
                <button
                    type='button'
                    className='btn btn-outline-dark'
                    onClick={addFormHandler}>
                    Qo'shish
                </button>
            </div>
        </div>
    );
}

export default MoviesAddForm;