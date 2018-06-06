import { uploadConstants } from '../constants';

export function uploads(state = {}, action) {
    switch (action.type) {
        case uploadConstants.DOCUMENT_SUCCESS:
            return {
                loading: true,
                file: action.file
            };
        case uploadConstants.DOCUMENT_FAIL:
            return {
                loading: false,
                file: action.file
            };
        default:
            return state
    }
}
