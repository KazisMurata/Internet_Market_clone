import React from 'react';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import { connect } from 'react-redux';
import { 
    getTotalBasketPrice, 
    getBasketLightsWithCount 
} from './Selectors';
import { 
    removeLightfromBasket,
    basketCheckout,
    cleanBasket 
} from '../../Redux/Actions/index';
import { Link } from 'react-router-dom';

const Basket: React.FC = ({ 
    lights, 
    totalPrice, 
    removeLightfromBasket, 
    cleanBasket, 
    basketCheckout
}: any) => {
    const isBasketEmpty = lights.length === 0 ? true : false;

    const renderContent = () => (
        <div>
            {isBasketEmpty && <div>Your shopping cart is empty</div>}
            <div className='table-responsive'>
                <table className='table-bordered table-striped table-condensed cf'>
                    <tbody>
                        {lights.map((light: any, index: any) => (
                            <tr key={index} className='item-checout'>
                                <td className='first-column-checkout'>
                                    <img className='img-thumbnail' src={light.image} alt={light.name} />
                                </td>
                                <td>{light.name}</td>
                                <td>${light.price}</td>
                                <td>{light.count}</td>
                                <td>
                                    <span className='delete-cart' onClick={() => removeLightfromBasket(light.id)}>
                                        <DeleteForeverIcon fontSize='large' />
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {!isBasketEmpty &&
                <div className='row'>
                    <div className='pull-right total-user-checkout'>
                        <b>Total:</b>
                        ${totalPrice}
                    </div>
                </div>
            }
        </div>
    );

    const renderSidebar = () => {
        return (
            <div>
                <Link to='/' className='btn btn-info' >
                    <span className='glyphicon glyphicon-info-sign'></span>
                    <span>Continue shopping</span>
                </Link>
                {!isBasketEmpty &&
                    <div>
                        <button className='btn btn-danger' onClick={cleanBasket}>
                            <span className='glyphicon glyphicon-trash'></span>
                            Clean cart
                        </button>
                        <button className='btn btn-success' onClick={() => basketCheckout(lights)}>
                            <span className='glyphicon glyphicon-envelope'></span>
                            Checkout
                        </button>
                    </div>
                }
            </div>
        );
    };

    return (
        <div className='view-container'>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-9'>
                        {renderContent()}
                    </div>
                    <div className='col-md-3 btn-user-checkout'>
                        {renderSidebar()}
                    </div>
                </div>
            </div>
        </div>
    );
};

const mapStateToProps = (state: any) => {
    return {
        lights: getBasketLightsWithCount(state),
        totalPrice: getTotalBasketPrice(state)
    };
};

const mapDispatchToProps = {
    removeLightfromBasket,
    basketCheckout,
    cleanBasket
}

export default connect(mapStateToProps, mapDispatchToProps)(Basket);