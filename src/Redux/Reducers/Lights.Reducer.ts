import {
    FETCH_LIGHTS_SUCCESS,
    LOAD_MORE_LIGHTS_SUCCESS,
    FETCH_LIGHT_BY_ID_SUCCESS
} from '../../Constants/Type';

const initialState = {};

export const lights = (state = initialState, action: any) => {
    switch(action.type) {
        case FETCH_LIGHTS_SUCCESS:
            const payloadFetchLights = action.payload.reduce(function (accum: any, item: any) {
                accum[item.id] = item;
                return accum;
            }, {});
            return {...state, ...payloadFetchLights};
        case LOAD_MORE_LIGHTS_SUCCESS:
            const payloadMoreLights = action.payload.reduce(function (accum: any, item: any) {
                accum[item.id] = item;
                return accum;
            }, {});
            return {...state, ...payloadMoreLights};
        case FETCH_LIGHT_BY_ID_SUCCESS:
            return {...state, [action.payload.id]: action.payload};
        default:
            return state;
    }
};