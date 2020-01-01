import { Component, OnInit } from '@angular/core';
import { LoginService, SessionQuery } from './login/state/index';
import { EmployeeService, EmployeeQuery } from './dashboard/state/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'learn-akita';

  constructor(
    public loginService: LoginService,
    public sessionQuery: SessionQuery,
    public employeeService: EmployeeService,
    public employeeQuery: EmployeeQuery
  ) {
    this.employeeQuery.selectAll().subscribe((employees: any) => {
      console.log('Query....');
      console.log(employees);
    });
  }

  login() {
    this.loginService.login().subscribe();
  }

  load() {
    this.employeeService.getEmployees().subscribe((employees: any) => {
      console.log('Loaded');
    });
  }

  add() {
  }
}
