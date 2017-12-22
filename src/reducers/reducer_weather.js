import { FETCH_WEATHER } from '../actions/index';

export default function (state = [], action) {
    // console.log('Action received: ', action);

    // never mutate state directly. always return a new object
    // i.e. state.push(action.payload.data) <-- bad

    switch (action.type) {
        case FETCH_WEATHER:
            return [action.payload.data, ...state];  // ... flattens the old array
    }

    return state;
}

