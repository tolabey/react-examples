import I from "immutable";

export default function actionCreator(type, payload) {
    return {
        type,
        payload: I.fromJS(payload),
    };
}