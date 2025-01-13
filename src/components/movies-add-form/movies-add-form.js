import {Component} from 'react';
import './movies-add-form.css';

class MoviesAddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            viewers: '',
        };
    }

    changeHandlerInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    addFormHandler = e => {
        e.preventDefault();
        this.props.onAdd(this.state);
        this.setState({
            name: '',
            viewers: '',
        })
    }

    render() {
        const {name, viewers} = this.state;

        return (
            <div className='movies-add-form'>
                <h3>Yangi kino qo'shish</h3>
                <div className='add-form d-flex'>
                    <input
                        type='text'
                        className='form-control new-post-label'
                        placeholder='Qanday kino?'
                        onChange={this.changeHandlerInput}
                        name='name'
                        value={name}
                    />
                    <input
                        type='number'
                        className='form-control new-post-label'
                        placeholder="Nechi marta ko'rilgan?"
                        onChange={this.changeHandlerInput}
                        name='viewers'
                        value={viewers}
                    />
                    <button
                        type='button'
                        className='btn btn-outline-dark'
                        onClick={this.addFormHandler}>
                        Qo'shish
                    </button>
                </div>
            </div>
        );
    }
}

// const MoviesAddForm = () => {
//     return (
//         <div className='movies-add-form'>
//             <h3>Yangi kino qo'shish</h3>
//             <form className='add-form d-flex'>
//                 <input type='text' className='form-control new-post-label' placeholder='Qanday kino?'/>
//                 <input type='number' className='form-control new-post-label' placeholder="Nechi marta ko'rilgan?"/>
//                 <button type='submit' className='btn btn-outline-dark'>Qo'shish</button>
//             </form>
//         </div>
//     );
// }

export default MoviesAddForm;