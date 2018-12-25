import * as fromUpload from '../actions/upload.action';

export interface UploadState {
    imageurl : string;
    isloaded : boolean;
}

export const initialState : UploadState = {
    imageurl : '',
    isloaded : false
}

export function reducer(
    state = initialState,
    action: fromUpload.UploadAction
): UploadState {
    switch (action.type) {
        case fromUpload.UPLOAD_ASSET: {
            const imageurl = action.payload;
            return {
                ...state,
                imageurl
            }
        }
    }
}