import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  spaceyForm = new FormGroup({
    $key: new FormControl(''),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('',[Validators.required,Validators.maxLength(10), Validators.pattern("^(0|[1-9][0-9]*)$")]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  constructor() { }


  // A function to initialize the form
  initializeFormGroup() {
    this.spaceyForm.setValue({
      $key: null, 
      fullName: '',  
      email: '',  
      mobile: '', 
      city: '', 
      gender: '1', 
      department: '0', 
      hireDate: '', 
      isPermanent: 'false'
    });
  }
}
