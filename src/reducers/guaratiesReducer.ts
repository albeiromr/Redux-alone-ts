import redux from "redux";

interface guarantiesInterface {
  productsToReturn: number;
  totallyLostProducts: number;
}

const guarantiesState:guarantiesInterface = {
  productsToReturn: 20,
  totallyLostProducts: 10,
}

interface action extends redux.Action {
  type: string;
  payload?: number
}

const guarantiesReducer = (state = guarantiesState, action: action):guarantiesInterface => {
    switch (action.type) {
      case "receive guaranties":
        return {
          ...state,
          productsToReturn: state.productsToReturn += action.payload!
        }
      default:
        return state;
    }
}

export default guarantiesReducer;