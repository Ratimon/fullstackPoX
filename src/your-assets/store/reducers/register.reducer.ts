import * as fromRegister from '../actions/register.action';

export interface RegisterState {
    imageurl : string;
    isloaded : boolean;
}

export const initialState : RegisterState = {
    imageurl : '',
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
            // const imageurl = action.payload;
            return {
                ...state,
                isloaded : true
            }
        }
    }
}