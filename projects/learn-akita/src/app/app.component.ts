import { Component, OnInit } from '@angular/core';
import { SessionService, SessionQuery } from './login/state/index';
import { EmployeeService, EmployeeQuery } from './dashboard/state/index';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
  title = 'learn-akita';

  constructor(
    public sessionService: SessionService,
    public sessionQuery: SessionQuery,
    public employeeService: EmployeeService,
    public employeeQuery: EmployeeQuery
  ) {
    this.employeeQuery.selectAll().subscribe((employees: any) => {
      console.log('----------EmployQuery selectAll----------');
      console.log(employees);
    });

    this.employeeQuery.ui.selectAll().subscribe((state: any) => {
      console.log('----------EmployQuery ui selectAll----------');
      console.log(state);
    });
  }

  // ----------------------------------------
  // SessionStore
  // ----------------------------------------

  public changeUser() {
    this.sessionService.changeUser().subscribe();
  }

  showUser() {
    this.sessionService.showUser();
  }

  hideUser() {
    this.sessionService.hideUser();
  }


  // ----------------------------------------
  // EmpStore
  // ----------------------------------------

  load() {
    this.employeeService.getEmployees().subscribe((employees: any) => {
      console.log('Loaded');
    });
  }

  add() {
  }

  changePagination() {
    this.employeeService.changePagination();
  }
}
