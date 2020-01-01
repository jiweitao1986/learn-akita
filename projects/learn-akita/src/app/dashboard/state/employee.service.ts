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

  public getEmployees(): Observable<Array<Employee>> {
    return this.employeeDataService.getEmployees().pipe(
      tap((employees: Array<Employee>) => {
        this.employeeStore.set(employees);
      })
    );
  }

  public changePagination() {

    // uiStore里存的也是一个数组。
    // this.moviesStore.ui.update/upsert(id, entity => ({ isOpen: !entity.isOpen }));
    const random = Math.round(Math.random() * 100);
    this.employeeStore.ui.upsert(1, (entity: any) => {
      console.log(entity);
      return {
        pageIndex: random, pageSize: random
      };
    });
  }

  // deleteEmployee(id: ID) {
  //   this.employeeStore.remove(id);
  // }

  // updateEmployee(employee: Employee) {
  //   // this.employeeStore.createOrReplace(employee.id, { ...employee });
  // }

}
