import { Component, OnInit } from '@angular/core';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  tasksCount: number = 0;
  constructor(private _TasksService: TasksService) { }

  ngOnInit(): void {
    this._TasksService.tasksCount.subscribe({
      next: value => this.tasksCount = value,
    })
  }

}
