import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../interfaces/task';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  tasksCount: BehaviorSubject<any> = new BehaviorSubject(0);
  constructor(private _http: HttpClient) {
    this.getTasksCount();
   }

  getTasks(): Observable<any>{
    return this._http.get<any>('../../../assets/tasks.json');
  }

  getTasksCount(){
    this.getTasks().subscribe({
      next: result => {
        this.tasksCount.next(result.data.length);
      },
      error: err => console.log(err)
    })
  }
}
