import './app-filter.css';
import {useContext} from "react";
import {Context} from "../../context";

const AppFilter = () => {
    const {state, dispatch} = useContext(Context);

    const onFilter = (name) => {
        dispatch({type: 'FILTER', payload: name});
    }

    return (
        <div className='btn-group'>
            {
                btns.map(btn => (
                    <button
                        key={btn.name}
                        className={`btn ${state.filter === btn.name ? 'btn-dark' : 'btn-outline-dark'}`}
                        type='button'
                        onClick={() => onFilter(btn.name)}>
                        {btn.label}
                    </button>
                ))
            }
        </div>
    );
};

const btns = [
    {name: 'all', label: 'Barcha kinolar'},
    {name: 'popular', label: 'Mashxur kinolar'},
    {name: 'mostViewers', label: 'Eng ko\'p ko\'rilgan kinolar'}
]
export default AppFilter;