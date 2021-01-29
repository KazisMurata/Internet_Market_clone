import {
    FETCH_LIGHTS_START,
    FETCH_LIGHTS_SUCCESS,
    FETCH_LIGHTS_FAILURE,
    LOAD_MORE_LIGHTS_START,
    LOAD_MORE_LIGHTS_SUCCESS,
    LOAD_MORE_LIGHTS_FAILURE,
    FETCH_LIGHT_BY_ID_START,
    FETCH_LIGHT_BY_ID_SUCCESS,
    FETCH_LIGHT_BY_ID_FAILURE,
    ADD_LIGHT_TO_BASKET,
    SEARCH_LIGHT,
    FETCH_CATEGORIES_START,
    FETCH_CATEGORIES_SUCCESS,
    FETCH_CATEGORIES_FAILURE,
    REMOVE_LIGHT_FROM_BASKET,
    CLEAN_BASKET
} from '../../Constants/Type';
import {
    fetchLights as fetchLightsApi,
    loadMoreLights as loadMoreLightsApi,
    fetchLightById as fetchLightByIdApi,
    fetchCategories as fetchCategoriesApi
} from '../../API/Index';
import { getRenderedLightsLength } from '../../Components/Common/Selectors';

export const fetchLights = () => async (dispatch: (arg0: { type: string; payload?: any; error?: boolean; }) => any) => {
    dispatch({
        type: FETCH_LIGHTS_START
    });

    try {
        const lights = await fetchLightsApi();
        dispatch({
            type: FETCH_LIGHTS_SUCCESS,
            payload: lights
        });
    } catch (error) {
        dispatch({
            type: FETCH_LIGHTS_FAILURE,
            payload: error,
            error: true
        });
    };
};

// dispatch: (arg0: { type: string; payload?: any; error?: boolean; }) => any

export const loadMoreLights = () => async (dispatch: any, getState: any) => {
    const offset = getRenderedLightsLength(getState());
    dispatch({
        type: LOAD_MORE_LIGHTS_START
    });

    try {
        const lights = await loadMoreLightsApi({offset});

        dispatch({
            type: LOAD_MORE_LIGHTS_SUCCESS,
            payload: lights
        });        
    } catch (error) {
        dispatch({
            type: LOAD_MORE_LIGHTS_FAILURE,
            payload: error,
            error: true
        });
    };
};

export const fetchLightById = (id: number)=> async (dispatch: any) => {
    dispatch({type: FETCH_LIGHT_BY_ID_START});

    try {
        const light = await fetchLightByIdApi(id);
        dispatch({
            type: FETCH_LIGHT_BY_ID_SUCCESS,
            payload: light
        });
    } catch (error) {
        dispatch({
            type: FETCH_LIGHT_BY_ID_FAILURE,
            payload: error,
            error: true
        });
    };
}
;
export const addLightToBasket = (id: any) => (dispatch: any) => {
    dispatch({
        type: ADD_LIGHT_TO_BASKET,
        payload: id
    });
};

export const searchLight = (text: string) => (dispatch: any) => {
    dispatch({
        type: SEARCH_LIGHT,
        payload: text
    });
};

export const fetchCategories = () => async (dispatch: any) => {
    dispatch({
        type: FETCH_CATEGORIES_START
    });

    try {
        const lights = await fetchCategoriesApi();
        dispatch({
            type: FETCH_CATEGORIES_SUCCESS,
            payload: lights
        });
    } catch (error) {
        dispatch({
            type: FETCH_CATEGORIES_FAILURE,
            payload: error,
            error: true
        });
    };
};

export const removeLightfromBasket = (id: any) => (dispatch: any) => {
    dispatch({
        type: REMOVE_LIGHT_FROM_BASKET,
        payload: id
    });
};

export const cleanBasket = (id: any) => (dispatch: any) => {
    dispatch({
        type: CLEAN_BASKET
    });
};

export const basketCheckout = (lights: any) => () => {
    alert(JSON.stringify(lights));
};
