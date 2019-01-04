import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Location} from '@angular/common';

import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MatDialogRef } from '@angular/material';

import * as fromStore from '../../store/reducers/register.reducer';
import * as fromAction from '../../store/actions/register.action';

import { mimeType } from "./mime-type.validator";

import * as fromServices from '../../services';

@Component({
  selector: 'app-upload-dialog',
  templateUrl: './upload-dialog.component.html',
  styleUrls: ['./upload-dialog.component.scss']
})
export class UploadDialogComponent implements OnInit {

  form: FormGroup;
  isLoaded: boolean = false;
  imagePreview: string;
  
  @Output() picked = new EventEmitter<String>();

  constructor(
    public dialogRef: MatDialogRef<UploadDialogComponent>,
    // private router: Router,
    private location: Location,
    // private store: Store<fromStore.RegisterState>,
    private assetsService :fromServices.AssetsService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      image: new FormControl(null, {
        validators: [Validators.required],
        asyncValidators: [mimeType]
      })
    });   
  }

  onImagePicked(event: Event) {
    const file = (event.target as HTMLInputElement).files[0];  
    this.form.patchValue({ image: file });
    this.form.get("image").updateValueAndValidity();
    this.isLoaded = true;

    const reader = new FileReader();
    reader.onload = () => {
      this.assetsService.storeFile(reader.result);
      this.imagePreview = reader.result;
      this.picked.emit(reader.result);
    };
    reader.readAsDataURL(file);

  }

  nextStep() {
    // this.store.dispatch(new fromAction.UploadAssetSuccess());
    this.location.go('/assets-lists/register')
  }

}
