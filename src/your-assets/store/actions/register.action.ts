import { Action } from '@ngrx/store';

// export const OPEN_UPLOAD_MODAL = '[YourAssets] Open Upload Modal';
// export const CLOSE_UPLOAD_MODAL = '[YourAssets] Close Upload Modal';
// export const PICK_ASSET = '[YourAssets] Pick Asset';
export const LOAD_STEPPER = '[YourAssets] load Stepper';
export const LOAD_STEPPER_SUCCESS = '[YourAssets] load Stepper Success';


// export class OpenUploadModal implements Action {
//     readonly type = OPEN_UPLOAD_MODAL;
// }

// export class CloseUploadModal implements Action {
//     readonly type = CLOSE_UPLOAD_MODAL;
// }

// export class PickAsset implements Action {
//     readonly type = PICK_ASSET;
//     constructor(public payload: string) {}
// }

export class LoadStepper implements Action {
    readonly type = LOAD_STEPPER;
    constructor(public payload: string) {}
}

export class LoadStepperSuccess implements Action {
    readonly type = LOAD_STEPPER_SUCCESS;
    constructor(public payload: string | Error) {}
}

// export type UploadAction = OpenUploadModal | CloseUploadModal | UploadAsset | PickAsset;
export type RegisterAction =
    | LoadStepper
    | LoadStepperSuccess;