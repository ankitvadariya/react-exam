import axios, { post } from "axios";

function get(url) {
    return axios.get(url, {
        validateStatus: function(status) {
            return status < 500; // Reject only if the status code is greater than or equal to 500
        }
    });
}

export const callDocuments = search => {
    return get(`/api/documents`, search);
};

export const uploadFile = file => {
    const url = "/api/document";
    const formData = new FormData();
    formData.append("file", file);
    const config = {
        headers: {
            "content-type": "multipart/form-data"
        }
    };
    return post(url, formData, config);
};
