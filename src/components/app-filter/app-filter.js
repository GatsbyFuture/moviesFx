import {Component} from "react";
import './app-filter.css';

class AppFilter extends Component {

    changeHandler = (filter) => {
        this.props.onFilter(filter);
    }

    render() {
        const {filter} = this.props;
        return (
            <div className='btn-group'>
                {
                    btnArr.map(btn => (
                        <button
                            key={btn.name}
                            className={`btn ${filter === btn.name? 'btn-dark': 'btn-outline-dark'}`}
                            type='button'
                            onClick={() => this.changeHandler(btn.name)}>
                            {btn.label}
                        </button>
                    ))
                }
                {/*<button*/}
                {/*    className='btn btn-dark'*/}
                {/*    type='button'*/}
                {/*    onClick={() => this.changeHandler('')}>*/}
                {/*    Barcha kinolar*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className='btn btn-outline-dark'*/}
                {/*    type='button'*/}
                {/*    onClick={() => this.changeHandler('popular')}>*/}
                {/*    Mashxur kinolar*/}
                {/*</button>*/}
                {/*<button*/}
                {/*    className='btn btn-outline-dark'*/}
                {/*    type='button'*/}
                {/*    onClick={() => this.changeHandler('mostViewers')}>*/}
                {/*    Eng ko'p ko'rilgan kinolar*/}
                {/*</button>*/}
            </div>
        );
    }
}

const btnArr = [
    {name: 'all', label: 'Barcha kinolar'},
    {name: 'popular', label: 'Mashxur kinolar'},
    {name: 'mostViewers', label: 'Eng ko\'p ko\'rilgan kinolar'}
]
export default AppFilter;