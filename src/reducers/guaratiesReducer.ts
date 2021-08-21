import redux from "redux";

interface guarantiesInterface {
  productsToReturn: number;
  totallyLostProducts: number;
}

const guarantiesState:guarantiesInterface = {
  productsToReturn: 20,
  totallyLostProducts: 10,
}

const guarantiesReducer = (state = guarantiesState, action: redux.Action):guarantiesInterface => {
    switch (action.type) {
      default:
        return state;
    }
}

export default guarantiesReducer;