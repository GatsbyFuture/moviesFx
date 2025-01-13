import {Component, Fragment} from 'react';
import './search-panel.css'

class SearchPanel extends Component {

    changeHandlerInput = (e) => {
        this.props.onSearch(e.target.value);
    }

    render() {
        return (
            <Fragment>
                <input
                    type='text'
                    className='form-control search-input'
                    placeholder='Kinolarni qidirish...'
                    onChange={e => this.changeHandlerInput(e)}
                />
            </Fragment>
        )
    }
}

export default SearchPanel;