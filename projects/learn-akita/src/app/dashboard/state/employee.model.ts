import { ID } from '@datorama/akita';

interface EmployeeUI {
  pageSize: number;
  pageIndex: number;
}

interface Employee {
  id: number;
  code: string;
  name: string;
}

export { EmployeeUI, Employee };

