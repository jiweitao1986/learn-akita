import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { Employee } from './employee.model';
import { EmployeeState, EmployeeStore } from './employee.store';

@Injectable({
  providedIn: 'root'
})
class EmployeeQuery extends QueryEntity<EmployeeState, Employee> {

  constructor(protected store: EmployeeStore) {
    super(store);
}

}

export { EmployeeQuery };
