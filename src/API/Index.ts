import lights from './Lights.Mock';
import categories from './Categories.Mock';

export const fetchLights = async () => {
    return new Promise((resolve, reject) => {
        resolve(lights);
    })
    // const response = await fetch('http://www.mocky.io/v2/5918bc6b120000701040dbec');
    // const json = await response.json();

    // return json.phones;
}

export const loadMoreLights = async ({offset}:any) => {
    return new Promise((resolve, reject) => {
        resolve(lights);
    })
}

export const fetchLightById = async (id: any) => {
    return new Promise((resolve, reject) => {
        const light = lights.find((item) => item.id === id);
        resolve(light);
    })
}

export const fetchCategories = async () => {
    return new Promise((resolve, reject) => {
        resolve(categories);
    })
}