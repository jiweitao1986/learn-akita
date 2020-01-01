import { Injectable } from '@angular/core';
import { timer, Observable } from 'rxjs';
import { mapTo } from 'rxjs/operators';
import { Employee } from './employee.model';
import { guid } from '@datorama/akita';

const employees: Array<Employee> = [
  { id: 1, code: 'Code0001', name: 'Name0001' },
  { id: 2, code: 'Code0002', name: 'Name0002' },
  { id: 3, code: 'Code0003', name: 'Name0003' },
];


/**
 * DataService定义
 */
@Injectable({
  providedIn: 'root'
})
class EmployeeDataService {

  constructor() { }

  getEmployees(): Observable<Array<Employee>> {
    return timer(200).pipe(
      mapTo(employees)
    );
  }
}

export { EmployeeDataService };
