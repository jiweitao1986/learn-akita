import { Injectable } from '@angular/core';
import { QueryEntity, EntityUIQuery } from '@datorama/akita';
import { Employee } from './employee.model';
import { EmployeeState, EmployeeUIState, EmployeeStore } from './employee.store';

@Injectable({
  providedIn: 'root'
})
class EmployeeQuery extends QueryEntity<EmployeeState, Employee> {

  public ui: EntityUIQuery<EmployeeUIState>;

  constructor(protected store: EmployeeStore) {
    super(store);
    this.createUIQuery();
  }

}

export { EmployeeQuery };
