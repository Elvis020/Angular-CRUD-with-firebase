import { EmployeeService } from './../../shared/employee.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  constructor(public empService: EmployeeService) { }

  departments = [
    {id:1, value: 'Dep 1'},
    {id:2, value: 'Dep 2'},
    {id:3, value: 'Dep 3'},
  ];

  ngOnInit() {
    this.empService.getEmployees();
  }

  onClear() {
    this.empService.spaceyForm.reset();
    this.empService.initializeFormGroup();
  }

  onSubmit() {
    if (this.empService.spaceyForm.valid) {
      this.empService.insertEmployee(this.empService.spaceyForm.value);
      this.empService.spaceyForm.reset();
      this.empService.initializeFormGroup();
    }
  }

}
