import { FETCH_CATEGORIES_SUCCESS } from '../../Constants/Type';

const initialState = {};

export const categories = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case FETCH_CATEGORIES_SUCCESS:
            const payloadFetchCategories = payload.reduce(function (accum: any, item: any) {
                accum[item.id] = item;
                return accum;
            }, {});
            return {...state, ...payloadFetchCategories};
        default:
            return state;
    };
};