import React from 'react';
import { connect } from 'react-redux';
import { searchLight } from '../../Redux/Actions/index'

interface IProps {
    searchLight: Function
}

interface IState {
    value: string
    
}

class Search extends React.Component<IProps, IState> {
    constructor(props: IProps) {
        super(props);
        this.state = {
            value: ''
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleSubmit(event: any) {
        event.preventDefault();
        this.props.searchLight(this.state.value);
    }
    
    handleChange(event: any) {
        this.setState({
            value: event.target.value
        });
    }

    render () {
        return (
            <div className='well blosd'>
                <h3 className='lead'>Quick shop</h3>
                <div className='input-group'>
                    <form onSubmit={this.handleSubmit}>
                        <input 
                            type='text'
                            onChange={this.handleChange}
                            className='form-control'
                        />
                    </form>
                    <span className='input-group-btn'>
                        <button className='btn btn-default' onClick={this.handleSubmit}>
                            <span className='glyphicon glyphicon-search'></span>
                        </button>
                    </span>
                </div>
            </div>
        );
    };
};

const mapDispatchToProps = {
    searchLight
};

export default connect(null, mapDispatchToProps)(Search);