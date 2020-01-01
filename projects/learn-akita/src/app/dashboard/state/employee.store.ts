import { Injectable } from '@angular/core';
import { EntityState, EntityStore, EntityUIStore, StoreConfig } from '@datorama/akita';
import { EmployeeUI, Employee } from './employee.model';

/**
 * 定义State
 * @summary
 * 1、EntityState和普通State的区别
 */
interface EmployeeState extends EntityState<Employee> {}

interface EmployeeUIState extends EntityState<EmployeeUI> {}

/**
 * 定义Store
 */
@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'employees'
})
class EmployeeStore extends EntityStore<EmployeeState, Employee> {

  public ui: EntityUIStore<EmployeeUIState>;

  constructor() {
    super();
    this.createUIStore();
  }
}


export { EmployeeState, EmployeeUIState, EmployeeStore };
