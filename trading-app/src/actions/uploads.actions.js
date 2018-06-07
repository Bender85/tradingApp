import { uploadConstants } from '../constants';

export const aploadActions = {
    success,
    error,
    request
};

function success(message) {
    return {type: uploadConstants.UPLOAD_SUCCESS, message};
}

function error(message) {
    return {type: uploadConstants.UPLOAD_FAIL, message};
}
function request(message) {
    return {type: uploadConstants.UPLOAD_REQUEST, message};
}

export function uploadFile(file) {
    return dispatch => {
        dispatch({type: uploadConstants.UPLOAD_REQUEST})
    }
}