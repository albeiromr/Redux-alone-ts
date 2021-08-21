interface sendToGuarantiesInterface {
    type: string;
    payload: number;
}

const sendToGuarantiesAction = (quantity: number): sendToGuarantiesInterface => {
    return {
        type: "send to guarantie",
        payload: quantity
    }
}

export default sendToGuarantiesAction;