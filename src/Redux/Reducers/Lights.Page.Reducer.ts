import { 
    FETCH_LIGHTS_SUCCESS,
    LOAD_MORE_LIGHTS_SUCCESS,
    SEARCH_LIGHT
} from '../../Constants/Type'

const initialState = {
    ids: [],
    search: ''
}

export const lightsPage = (state = initialState, action: any) => {
    switch (action.type) {
        case FETCH_LIGHTS_SUCCESS:
            return { ...state, ids: [...state.ids, ...action.payload.map((item: any) => item.id)] };
        case LOAD_MORE_LIGHTS_SUCCESS:
            return { ...state, ids: [...state.ids, ...action.payload.map((item: any) => item.id)] };
        case SEARCH_LIGHT:
            return { ...state, search: action.payload };
        default:
            return state;
    }
}