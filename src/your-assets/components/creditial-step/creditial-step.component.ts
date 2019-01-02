import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'creditial-step',
  templateUrl: './creditial-step.component.html',
  styleUrls: ['./creditial-step.component.scss']
})
export class CreditialStepComponent implements OnInit {
  creditialForm: FormGroup;

  @Output() changeCreditials: EventEmitter<FormGroup> = new EventEmitter<FormGroup>();

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    this.creditialForm = this._formBuilder.group({
      email: ['', Validators.required],
      accountId: ['', Validators.required]
    });
    
    this.changeCreditials.emit(this.creditialForm);
  }


}
