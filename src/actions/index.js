import data from '../../public/sachineData.js';

export const FETCH_DATA = 'FETCH_DATA';

export function featchData() {

    return {
        type: FETCH_DATA,
        payload: data
    };
}