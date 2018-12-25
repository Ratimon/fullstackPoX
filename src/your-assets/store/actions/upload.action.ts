import { Action } from '@ngrx/store';

// export const OPEN_UPLOAD_MODAL = '[YourAssets] Open Upload Modal';
// export const CLOSE_UPLOAD_MODAL = '[YourAssets] Close Upload Modal';
// export const PICK_ASSET = '[YourAssets] Pick Asset';
export const UPLOAD_ASSET = '[YourAssets] Upload Asset';

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

export class UploadAsset implements Action {
    readonly type = UPLOAD_ASSET;
    constructor(public payload: string) {}
}

// export type UploadAction = OpenUploadModal | CloseUploadModal | UploadAsset | PickAsset;
export type UploadAction = UploadAsset;

// export type UploadAction =
//     | OpenUploadModal
//     | CloseUploadModal
//     | UploadAsset
//     | PickAsset;