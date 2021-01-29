import { 
    ADD_LIGHT_TO_BASKET,
    CLEAN_BASKET,
    REMOVE_LIGHT_FROM_BASKET
} from "../../Constants/Type";

const initialState: Array<number> = [];

export const basket = (state = initialState, {type, payload}: any) => {
    switch (type) {
        case ADD_LIGHT_TO_BASKET:
            return [...state, payload];
        case REMOVE_LIGHT_FROM_BASKET:
            const removeLight = state.filter((id) => id !== payload);
            return [...removeLight];
        case CLEAN_BASKET:
            return initialState;
        default :
            return state;
    };
};