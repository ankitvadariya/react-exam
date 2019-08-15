/* eslint-disable no-constant-condition */

import { put, takeEvery, delay, call } from "redux-saga/effects";
import { callDocuments, uploadFile } from "../api";
import { loadAllDocuments, selectDocument } from "../actions";

export function* getDocuments({ payload }) {
    const response = yield call(callDocuments, payload);

    if (response.status == 200) {
        yield put(loadAllDocuments(response.data));
        if (response.data.length > 0) {
            yield put(selectDocument(response.data[0]));
        }
    } else {
        yield put(loadAllDocuments([]));
    }
}

export function* sendDocument({ payload }) {
    const response = yield call(uploadFile, payload);
    if (response && response.status == 200) {
        yield put(loadAllDocuments(response.data));
    } 
}

export default function* rootSaga() {
    yield takeEvery("GET_ALL_DOCUMENTS", getDocuments);
    yield takeEvery("UPLOAD_DOCUMENT", sendDocument);
}
