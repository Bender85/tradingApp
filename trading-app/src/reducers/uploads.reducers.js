import { uploadConstants } from '../constants';

export function uploads(state = {}, action) {
    switch (action.type) {
        case uploadConstants.UPLOAD_REQUEST:
            return {
              loading: true,
              file: action.file
            };
        case uploadConstants.UPLOAD_SUCCESS:
            return {
                loading: true,
                file: action.file
            };
        case uploadConstants.UPLOAD_FAIL:
            return {
                loading: false,
                file: null
            };
        default:
            return state
    }
}
