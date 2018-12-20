import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialogRef } from '@angular/material';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent{

  @ViewChild('file') file : ElementRef;

  // progress;
  encodedImage : string;
  primaryButtonText  : string = 'Upload';
  showCancelButton  : boolean = true; 
  uploading : boolean = false;
  uploadSuccessful  : boolean = false;
  

  constructor(public dialogRef: MatDialogRef<DialogComponent>) {}

  addFile() {
    this.file.nativeElement.click();
    this.uploading = true
    // The dialog should not be closed while uploading
    this.dialogRef.disableClose = true;
  }

  onFileAdded() {
    const { file } = this.file.nativeElement.files[0];
    const reader = new FileReader();
    reader.onload = (event) => {
      // Adjust the state variables
      // The file's text will be printed here
      this.encodedImage = event.target.result;
      // ... and the component is no longer uploading
      this.uploading = false
      // ... the upload was successful...
      this.uploadSuccessful = true;
      // Hide the cancel-button
      this.showCancelButton = false;
      // The OK-button should have the text "Finish" now
      this.primaryButtonText = 'Next';
      // ... the dialog can be closed again...
      this.dialogRef.disableClose = false;
    };

    reader.readAsDataURL(file);
    // if everything was uploaded already, just close the dialog
    return this.dialogRef.close()
  }

  
  
}
