import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchLightById, addLightToBasket } from '../../Redux/Actions/index';
import BasketCart from './Basket.Cart';
import { getLightById } from './Selectors';

interface IProps {
    match: any,
    fetchLightById: any,
    light: any,
    addLightToBasket: any

};

class Light extends React.Component<IProps> {
    componentDidMount() {
        this.props.fetchLightById(this.props.match.params.id);
    };

    renderFields() {
        const { light } = this.props;
        const entriesLight = Object.entries(light);
        const columnField = entriesLight.filter((item: any) => item[0] === 'cpu' ||
            item[0] === 'camera' ||
            item[0] === 'size' ||
            item[0] === 'weight' ||
            item[0] === 'display' ||
            item[0] === 'battery' ||
            item[0] === 'memory');

        return columnField.map(([key, value]: any) => (
            <div className='column' key={key}>
                <div className='ab-details-title'>
                    <p>{key}</p>
                </div>
                <div className='ab-details-info'>
                    {value}
                </div>
            </div>
        ));
    };

    renderContent() {
        const { light } = this.props;

        return (
            <div className='thumbnail'>
                <div className='row'>
                    <div className='col-md-6'>
                        <img
                            className='img-thumbnail'
                            src={light.image}
                            alt={light.name}
                        />
                    </div>
                    <div className='col-md-6'>
                        {this.renderFields()}
                    </div>
                </div>
                <div className='caption-full'>
                    <h4 className='pull-right'> ${light.price}</h4>
                    <h4>{light.name}</h4>
                    <p>{light.description}</p>
                </div>
            </div>
        );
    };

    renderSidebar() {
        const { light, addLightToBasket } = this.props;
        return (
            <div>
                <p className='lead'> Quick shop</p>
                <BasketCart />
                <div className='form-group'>
                    <h1>{light.name}</h1>
                    <h2>${light.price}</h2>
                </div>
                <Link to='/' className='btn btn-info btn-block'>Back to store</Link>
                <button type='button' className='btn btn-success btn-block' onClick={() => addLightToBasket(light.id)}>
                    Add to cart
                </button>
            </div>
        )
    };

    render() {
        const { light }: any = this.props;

        return (
            <div className='view-container'>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-9'>
                            {light && this.renderContent()}
                        </div>
                        <div className='col-md-3'>
                            {light && this.renderSidebar()}
                        </div>
                    </div>
                </div>
            </div>
        );
    };
};

const mapStateToProps = (state: any) => {
    return {
        light: getLightById(state, state.lightPage.id)
    };
}

const mapDispatchToProps = {
    fetchLightById,
    addLightToBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Light);