import {Fragment, useContext} from 'react';
import './search-panel.css'
import {Context} from "../../context";

const SearchPanel = () => {
    const {state, dispatch} = useContext(Context);

    const changeHandlerInput = e => {
        const term = e.target.value;
        dispatch({type: 'SEARCH', payload: term});
    }

    return (
        <Fragment>
            <input
                type='text'
                className='form-control search-input'
                placeholder='Kinolarni qidirish...'
                onChange={changeHandlerInput}
                value={state.term}
            />
        </Fragment>
    );
};

export default SearchPanel;