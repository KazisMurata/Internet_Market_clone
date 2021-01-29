import { combineReducers } from 'redux';
import { lights } from './Lights.Reducer'
import { lightsPage } from './Lights.Page.Reducer'
import { lightPage } from './Light.Page.Reducer';
import { basket } from './Basket.Reducer';
import { categories } from './Categories.Reducer';

export const rootReducer = combineReducers({
    lights,
    lightsPage,
    lightPage,
    basket,
    categories
});