import { Injectable } from '@angular/core';
import { Employee } from './employee.model';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

/**
 * 定义State
 * @summary
 * 1、EntityState和普通State的区别
 */
export interface EmployeeState extends EntityState<Employee> {
}

/**
 * 初始状态
 */
function createInitialState() {
}

/**
 * 定义Store
 */
@Injectable({
  providedIn: 'root'
})
@StoreConfig({
  name: 'employees'
})
export class EmployeeStore extends EntityStore<EmployeeState, Employee> {
  constructor() {
    super();
  }
}
