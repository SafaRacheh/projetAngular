import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-form-appartment',
  templateUrl: './form-appartment.component.html',
  styleUrls: ['./form-appartment.component.css']
})
export class FormAppartmentComponent {
  constructor(private activatedRoute:ActivatedRoute,private fb:FormBuilder,private router:Router){}
  appartment: FormControl = new FormControl(
    { value: 'appartment', disabled: false },
    [Validators.required,]
  );
  appartmentFormBuilder = {};
  appartmentFormB : FormGroup = new FormGroup({});
  appartmentForm: FormGroup = new FormGroup({
    appartNum: new FormControl('', [
      Validators.required,
    ]),
    floorNum: new FormControl('', [
      Validators.required,
    ]),
    surface: new FormControl('', [
      Validators.required,
    ]),
    surfaceTerrace: new FormControl('', [
      Validators.required,
    ]),
    description: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
    ]),
  });
  
 
  get appartNum() {
    return this.appartmentFormB.controls['appartNum'];
  }

  get floorNum() {
    return this.appartmentFormB.controls['floorNum'];
  }
  get surface() {
    return this.appartmentFormB.controls['surface'];
  }
  get surfaceTerrace() {
    return this.appartmentFormB.controls['surfaceTerrace'];
  }
  get description() {
    return this.appartmentFormB.controls['description'];
  }
  

  ngOnInit() {
  this.appartmentFormBuilder = this.fb.group({
    appartNum: [ '',[Validators.required, ]],
    floorNum: ['', [
      Validators.required,
    ]],
    surface: ['', [
      Validators.required,
    ]],
    surfaceTerrace: ['', [
      Validators.required,
    ]],
    description: ['', [
      Validators.required,
      Validators.minLength(10),
    ]],
  
  });
    
    console.log(this.appartmentFormBuilder);

    this.appartmentFormB = this.fb.group({
      appartNum: ['', [Validators.required,]],
      floorNum: ['', [Validators.required,]],
      surface: ['', [Validators.required,]],
      surfaceTerrace: ['', [Validators.required,]],
      description: ['', [
        Validators.required,
        Validators.minLength(10),
      ]],
    });
  }
}
