const INIT_STATE = {
    documents: []
};

export default function counter(state = INIT_STATE, action) {
    switch (action.type) {
        case "GET_ALL_DOCUMENTS":
            return { ...state, loading: true };
        case "LOAD_ALL_DOCUMENTS":
            return { ...state, documents: action.payload, loading: false };
        case "SELECT_DOCUMENT":
            return { ...state, selected_document: action.payload };
        case "UPLOAD_DOCUMENT":
            return { ...state, document: action.payload };
        default:
            return state;
    }
}
