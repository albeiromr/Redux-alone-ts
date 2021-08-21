interface receiveGuarantiesInterface {
    type: string;
    payload: number;
}

const receiveGuarantiesAction = (quantity:number):receiveGuarantiesInterface => {
    return {
        type: "receive guaranties",
        payload: quantity
    }
}

export default receiveGuarantiesAction;