import * as fromRegister from '../actions/register.action';

export interface RegisterState {
    imageurl : string;
    account : string | Error;
    isloaded : boolean;
}

export const initialState : RegisterState = {
    imageurl : '',
    account : '',
    isloaded : false
}

export function reducer(
    state = initialState,
    action: fromRegister.RegisterAction
): RegisterState {
    switch (action.type) {
        case fromRegister.LOAD_STEPPER: {
            const imageurl = action.payload;
            return {
                ...state,
                imageurl
            }
        }

        case fromRegister.LOAD_STEPPER_SUCCESS: {
            const account = action.payload;
            return {
                ...state,
                account : account,
                isloaded : true
            }
        }
    }
}