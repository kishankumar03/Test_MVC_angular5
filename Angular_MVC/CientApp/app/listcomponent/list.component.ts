import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Employees } from '../employee-data';
//import { connect } from 'net';
@Component({
  templateUrl: './list.component.html',
  selector: 'list-view',
  styleUrls: []
})
export class ListComponent implements OnInit {

  employee = Employees;
  selectedEmployee: Employee;
  currentEmployee : Employee;
  constructor() { }

  ngOnInit (){
  }

  onSelect(employee: Employee): void {
    console.log(employee);
    this.selectedEmployee = employee;
    this.currentEmployee = employee;
  }
  onSave(employee: Employee): void {
    console.log(employee);
    console.log(Employees);
  }
}
