import { FETCH_LIGHT_BY_ID_SUCCESS } from "../../Constants/Type";

const initialState = {
    id: null
};

export const lightPage = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case FETCH_LIGHT_BY_ID_SUCCESS:
            return {...state, id: payload.id};
        default:
            return state;
    }
}