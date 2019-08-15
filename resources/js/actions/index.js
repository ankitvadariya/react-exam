export const getAllDocuments = search => ({
    type: "GET_ALL_DOCUMENTS",
    payload: search
});
export const loadAllDocuments = documents => ({
    type: "LOAD_ALL_DOCUMENTS",
    payload: documents
});

export const selectDocument = document => ({
    type: "SELECT_DOCUMENT",
    payload: document
});

export const uploadDocument = document => ({
    type: "UPLOAD_DOCUMENT",
    payload: document
});
