import {combineReducers, createStore} from "redux";
import productsReducer from "../reducers/productsReducer";
import guarantiesReducer from "../reducers/guaratiesReducer";

const allReducers = combineReducers({
    productsReducer,
    guarantiesReducer
})

const store = createStore(allReducers);

export default store;