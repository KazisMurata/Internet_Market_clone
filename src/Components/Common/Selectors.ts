export const getLightById = (state: any, id: number) => state.lights[id];

export const getActiveCategoryId = (ownProps: any) => ownProps?.match?.params?.id;

// export const getLights = (state: any, ownProps: any) => {
//     const activeCategoryId = getActiveCategoryId(ownProps);
//     const lights = state.lightsPage.ids.map((item: any, index: number) => getLightById(state, item));
//     const applySearch = lights.filter((item: any) => item.name.includes(state.lightsPage.search));
//     return applySearch;
// };

export const getLights = (state: any, ownProps: any) => {
    const activeCategoryId = getActiveCategoryId(ownProps);
    
    const lights = state.lightsPage.ids.map((item: any) => getLightById(state, item));
    const applyCategory =  lights.filter((item: any) => item.categoryId.includes(activeCategoryId));
   
    const applySearch = (activeCategoryId ? applyCategory : lights).filter((item: any) => item.name.includes(state.lightsPage.search));

    return applySearch;
};

export const getRenderedLightsLength = (state: any) => {
    return state.lightsPage.ids.length;
};

export const getTotalBasketCount = (state: any) => state.basket.length;

export const getTotalBasketPrice = (state: any) => {
   const getLights = state.basket.map((id:number) => getLightById(state, id));
   const getPrices = getLights.map((item: any) => item.price);
   const totalPrice = getPrices.reduce((firstPrice: number, secondPrice: number) => firstPrice + secondPrice, 0);

   return totalPrice;
};

export const getCategories = (state: any) => Object.values(state.categories); 

export const getBasketLightsWithCount = (state: any) => {
    const lightCount = (id: any) => state.basket.filter((basketId: any) => basketId === id);    
    const lightWithCount = (light: any) => ({...light, 'count': lightCount(light.id).length}); 

    const uniqeIds = Array.from(new Set(state.basket));
    const uniqeLights = uniqeIds.map((id: any) => getLightById(state, id));
    const addCountStringToLight = uniqeLights.map((light) => lightWithCount(light));

    return addCountStringToLight;
};