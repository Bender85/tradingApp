import { uploadConstants } from '../constants';

export const aploadActions = {
    success,
    error
};

function success(message) {
    return {type: uploadConstants.DOCUMENT_SUCCESS, message};
}

function error(message) {
    return {type: uploadConstants.DOCUMENT_FAIL, message};
}
