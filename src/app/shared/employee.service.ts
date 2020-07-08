
import { Injectable } from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  spaceyForm = new FormGroup({
    $key: new FormControl(''),
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', Validators.email),
    mobile: new FormControl('', [Validators.required, Validators.maxLength(10), Validators.pattern('^(0|[1-9][0-9]*)$')]),
    city: new FormControl(''),
    gender: new FormControl('1'),
    department: new FormControl('0'),
    hireDate: new FormControl(''),
    isPermanent: new FormControl(false)
  });

  constructor(private firebase: AngularFireDatabase) { }

  employeeList: AngularFireList<any>;


  // A function to initialize the form
  initializeFormGroup(): any {
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


  // Function to get a list of employees from firebase
  getEmployees() {
    this.employeeList = this.firebase.list('employees');
    return this.employeeList.snapshotChanges();
  }

 
  // This function creates a new employee with details to firebase 
  insertEmployee(employee) {
    this.employeeList.push({
      fullName: employee.fullName,
      email: employee.email,
      mobile: employee.mobile,
      city: employee.city,
      gender: employee.gender,
      department: employee.department,
      hireDate: employee.hireDate,
      isPermanent: employee.isPermanent,
    });
  }

  // Function to update the employee details in firebse
  updateEmployee(employee) {
    this.employeeList.update(employee.$key,
      {
        fullName: employee.fullName,
        email: employee.email,
        mobile: employee.mobile,
        city: employee.city,
        gender: employee.gender,
        department: employee.department,
        hireDate: employee.hireDate,
        isPermanent: employee.isPermanent,
    });
  }

  // Function to delete an employee from firebase
  deleteEmployee($key: string) {
    this.employeeList.remove($key);
  }
}
