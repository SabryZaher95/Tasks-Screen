import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'taskOperations'
})
export class TaskOperationsPipe implements PipeTransform {

  transform(operations: string[], ...args: unknown[]): boolean {
    return true;
  }

}
