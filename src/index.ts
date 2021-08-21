import store from "./store/store";
import buyProducAction from "./actions/buyProduct";
import sendToGuarantiesAction from "./actions/sendToguaranties";

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

// lanzando algunas acciones
store.dispatch(buyProducAction(2));
store.dispatch(sendToGuarantiesAction(3));