import { Injectable } from '@angular/core';
import { ID } from '@datorama/akita';
import { EmployeeStore } from './employee.store';
import { EmployeeQuery } from './employee.query';
import { EmployeeDataService } from './employee-data.service';
import { Employee } from './employee.model';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(
    private employeeDataService: EmployeeDataService,
    private employeeStore: EmployeeStore,
    private employeeQuery: EmployeeQuery
  ) { }

  getEmployees(): Observable<Array<Employee>> {
    return this.employeeDataService.getEmployees().pipe(
      tap((employees: Array<Employee>) => {
        this.employeeStore.set(employees);
      })
    );
  }

  // deleteEmployee(id: ID) {
  //   this.employeeStore.remove(id);
  // }

  // updateEmployee(employee: Employee) {
  //   // this.employeeStore.createOrReplace(employee.id, { ...employee });
  // }

}
