import redux from "redux";

interface producStateInterface {
  totalInventory: number;
  productsToSell: number;
  defectiveProducts: number;
}

interface action extends redux.Action {
  type: string;
  payload: number;
}

const productsState: producStateInterface = {
  totalInventory: 40,
  productsToSell: 30,
  defectiveProducts: 10,
}


const productsReducer = (state:producStateInterface = productsState, action: action): producStateInterface => {
    switch(action.type){
        case "buy product":
            return {
                ...state,
                totalInventory: state.totalInventory -= action.payload,
                productsToSell: state.productsToSell -= action.payload
            }
        case "send to guarantie":
            return {
                ...state,
                defectiveProducts: state.defectiveProducts -= action.payload
            }
        default:
            return state;
    }
}

export default productsReducer;