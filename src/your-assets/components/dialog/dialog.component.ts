import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router, ActivatedRoute, ParamMap } from "@angular/router";
import { MatDialogRef } from '@angular/material';

import { mimeType } from "./mime-type.validator";

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  form: FormGroup;
  isLoaded : boolean = false;
  imagePreview: string;
  
  @Output() picked = new EventEmitter<String>();

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    private router: Router
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
    this.isLoaded = true
    const reader = new FileReader();
    reader.onload = () => {
      this.imagePreview = reader.result;
      this.picked.emit(reader.result);
    };
    reader.readAsDataURL(file);
  }

  nextStep() {
     this.router.navigate(["/register"]);
  }

}
