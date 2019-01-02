import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'hash-step',
  templateUrl: './hash-step.component.html',
  styleUrls: ['./hash-step.component.scss']
})
export class HashStepComponent implements OnInit {
  hashForm: FormGroup;

  @Output() hash: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.hashForm = this._formBuilder.group({
      hash: ['', Validators.required]
    });
    
    this.hash.emit(this.hashForm);

  }

}
