import I from "immutable";

export default function reducer(store = I.Map({is: "is"}), action) {
    switch (action.type) {
        case "ADD_TODO":
            return store.setIn(['todo', 'todos'], [...store.getIn(['todo', 'todos'], I.List()), action.payload]);
        case "SET_TODO_TEXT":
            return store.setIn(['todo', 'todoText'], action.payload);
        case "SET_DESIRED":
            return store.setIn(['todo', 'desired'], action.payload);
        case 'UPDATE_TODO_STATUS':
            const updatedList = store.getIn(['todo', 'todos'], I.List())
                .map((one) => {
                    if(one.get('id') === action.payload) {
                        return one.get('status') === 'NOT_COMPLETED' ?
                            one.set('status', 'COMPLETED') :
                            one.set('status', 'NOT_COMPLETED')
                    }
                    return one;
                });
            return store.setIn(['todo', 'todos'], updatedList);
        case 'DELETE_TODO':
            console.log('DELETE', action);
            const filteredList = store.getIn(['todo', 'todos'], I.List())
                .filter((one) => one.get('id') !== action.payload);

            return store.setIn(['todo', 'todos'], filteredList);
        case 'SET_CONTACT_LIST':
            return store.set('contacts', action.payload);
        default:
            return store;
    }
}