import {combineReducers, createStore} from "redux";
import productsReducer from "../reducers/productsReducer";
import guarantiesReducer from "../reducers/guaratiesReducer";

const rootReducers = combineReducers({
    productsReducer,
    guarantiesReducer
})

const store = createStore(rootReducers);

export default store;