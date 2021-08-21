import redux from "redux";

interface producStateInterface {
  totalInventory: number;
  productsToSell: number;
  defectiveProducts: number;
}

const productsState: producStateInterface = {
  totalInventory: 40,
  productsToSell: 30,
  defectiveProducts: 10,
}

interface action extends redux.Action {
  type: string;
  payload?: number;
}


const productsReducer = (state:producStateInterface = productsState, action: action): producStateInterface => {
    switch(action.type){
        case "buy product":
            return {
                ...state,
                totalInventory: state.totalInventory -= action.payload!,
                productsToSell: state.productsToSell -= action.payload!
            }
        case "send to guarantie":
            return {
                ...state,
                defectiveProducts: state.defectiveProducts -= action.payload!
            }
        case "mark as defective":
          return{
            ...state,
            productsToSell: state.productsToSell -= action.payload!,
            defectiveProducts: state.defectiveProducts += action.payload!
          }
        default:
            return state;
    }
}

export default productsReducer;