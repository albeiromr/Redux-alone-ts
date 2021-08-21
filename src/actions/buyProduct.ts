interface buyProductInterface {
    type: string;
    payload: number;
}

const buyProducAction = (quantity: number): buyProductInterface => {
    return {
        type: "buy product",
        payload: quantity
    }
}

export default buyProducAction;