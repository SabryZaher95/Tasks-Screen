import { Component, Input, OnInit } from '@angular/core';
import { RowStyle } from 'src/app/core/interfaces/row-style';
import { Task } from 'src/app/core/interfaces/task';

@Component({
  selector: 'app-tasks-details',
  templateUrl: './tasks-details.component.html',
  styleUrls: ['./tasks-details.component.scss']
})
export class TasksDetailsComponent implements OnInit {

  @Input() task:Task = {} as Task;
  @Input() rowStyle: RowStyle = {} as RowStyle;

  constructor() { }


  ngOnInit(): void {
  }

}
