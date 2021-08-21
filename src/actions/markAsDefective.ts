interface markAsDefectiveInterface {
    type: string;
    payload: number;
}

const markAsDefectiveAction = (quantity: number): markAsDefectiveInterface => {
    return {
        type: "mark as defective",
        payload: quantity
    }
}

export default markAsDefectiveAction;