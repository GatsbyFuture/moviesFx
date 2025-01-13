import {Fragment, useState} from 'react';
import './search-panel.css'

const SearchPanel = ({onSearch}) => {
    const [term, setTerm] = useState('');

    const changeHandlerInput = e => {
        const term = e.target.value;
        setTerm(term);
        onSearch(term);
    }

    return (
        <Fragment>
            <input
                type='text'
                className='form-control search-input'
                placeholder='Kinolarni qidirish...'
                onChange={e => changeHandlerInput(e)}
                value={term}
            />
        </Fragment>
    );
};

export default SearchPanel;