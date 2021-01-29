import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
    fetchLights,
    loadMoreLights,
    addLightToBasket,
    fetchCategories
} from '../../Redux/Actions/index';
import Layout from '../Common/Layout';
import { getLights } from '../Common/Selectors';
import SimpleSlider from '../Common/SliderSlick';


interface IProps {
    fetchLights: any,
    lights: any,
    loadMoreLights: any,
    addLightToBasket: any,
    fetchCategories: Function
}

class Home extends React.Component<IProps> {
    componentDidMount() {
        this.props.fetchLights();
        this.props.fetchCategories();
    }

    renderLights(light: any, index: any) {
        const shortDescription = `${light.description.slice(0, 60)}...`;
        const { addLightToBasket } = this.props;

        return (
            <div className='col-sm-4 col-lg-4 col-md-4 book-list' key={index}>
                <div className='thumbnail'>
                    <img
                        className='img-thumbnail'
                        src={light.image}
                        alt={light.name}
                    />
                    <div className='caption'>
                        <h4 className='pull-right'>${light.price}</h4>
                        <h4>
                            <Link to={`/lights/${light.id}`}>
                                {light.name}
                            </Link>
                        </h4>
                        <p>{shortDescription}</p>
                        <p className='itemButton'>
                            <button className='btn btn-primary' onClick={() => addLightToBasket(light.id)}>
                                Buy now!
                            </button>
                            <Link to={`/lights/${light.id}`} className='btn btn-default'>
                                More info
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        );
    }

    render() {
        const { lights, loadMoreLights } = this.props;

        return (
            <Layout>
                <div className='books row'>
                    {lights.map((light: any, index: number) => this.renderLights(light, index))}
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <button onClick={loadMoreLights} className='pull-right btn btn-primary'>
                            Load More
                        </button>
                    </div>
                </div>
            </Layout>
        )
    }
};

const mapStateToProps = (state: any, ownProps: any) => ({
    lights: getLights(state, ownProps)
})

const mapDispatchToProps = {
    fetchLights,
    loadMoreLights,
    addLightToBasket,
    fetchCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);