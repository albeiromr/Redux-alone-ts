import store from "./store/store";
import buyProducAction from "./actions/buyProduct";
import sendToGuarantiesAction from "./actions/sendToguaranties";
import receiveGuarantiesAction from "./actions/receiveGuaranties";
import markAsDefectiveAction from "./actions/markAsDefective";

console.log(store.getState());

store.subscribe(() => {
    console.log(store.getState());
})

//productos defectuosos
const productQuantity:number = 4;

// lanzando algunas acciones
store.dispatch(buyProducAction(2));
store.dispatch(sendToGuarantiesAction(productQuantity));
store.dispatch(receiveGuarantiesAction(productQuantity));
store.dispatch(markAsDefectiveAction(4));