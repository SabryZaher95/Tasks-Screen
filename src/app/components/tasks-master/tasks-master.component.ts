import { RowStyle } from './../../core/interfaces/row-style';
import { AfterContentChecked, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { TaskStatus } from 'src/app/core/enums/task-status.enum';
import { Task } from 'src/app/core/interfaces/task';
import { TasksService } from 'src/app/core/services/tasks.service';

@Component({
  selector: 'app-tasks-master',
  templateUrl: './tasks-master.component.html',
  styleUrls: ['./tasks-master.component.scss']
})
export class TasksMasterComponent implements OnInit, AfterContentChecked  {

  viewMore: boolean = false;
  allTasks: Task[] = [];
  images_path: string = 'assets/images/';
  rowStyle: RowStyle = {} as RowStyle;
  activePage: number = 0;
  tasksPerPage: number = 5; // Tasks shown per page
  PaginatedTasks: Task[] = [];

  constructor(private _TasksService: TasksService, private title: Title, private cdref: ChangeDetectorRef) { }

  // Fixing "Expression has changed after it was checked"
  ngAfterContentChecked(): void {
    this.cdref.detectChanges();
  }


  ngOnInit(): void {
    this.getTasks();
  }

  getTasks(){
    this._TasksService.getTasks().subscribe({
      next: (result: any) => {
        this.title.setTitle('ELSEWEDY Tasks');
        this.allTasks = result.data;
      },
      error: (err: any) => console.log(err)
    })
  }

  // Change Styles based on the Task Status
  getRowStyle(rowData: Task[], index: number): RowStyle {
    const targetObj = rowData[index].status;
    this.rowStyle = {} as RowStyle;

    if(targetObj === TaskStatus.Running){  // 3
      this.rowStyle.row_bg_color = '#e5f4ff';
      this.rowStyle.status_img_url = this.images_path + 'refresh icon.svg';
      this.rowStyle.status_class_name = 'running-status';
      this.rowStyle.task_status_name = TaskStatus[TaskStatus.Running];
    }
    else if(targetObj === TaskStatus.Finished){ // 4
      this.rowStyle.row_bg_color = '#f6fff6';
      this.rowStyle.status_img_url = this.images_path + 'finished icon.svg';
      this.rowStyle.status_class_name = 'finished-status';
      this.rowStyle.task_status_name = TaskStatus[TaskStatus.Finished];
    }
    else if(targetObj === TaskStatus.Queued){ // 2
      this.rowStyle.row_bg_color = '#fff';
      this.rowStyle.status_img_url = this.images_path + 'queued.png';
      this.rowStyle.status_class_name = 'queued-status';
      this.rowStyle.task_status_name = TaskStatus[TaskStatus.Queued];
    }
    else if(targetObj === TaskStatus.New){  // 1
      this.rowStyle.row_bg_color = '#fff';
      this.rowStyle.status_img_url = this.images_path + 'New task icon.svg';
      this.rowStyle.status_class_name = 'new-status';
      this.rowStyle.task_status_name = TaskStatus[TaskStatus.New];
    }

    return this.rowStyle;
  }

  // Display The paginated Tasks only
  displayActivePage(activePageNumber: number){  // catch the emitted value of active page from child component
    this.activePage = activePageNumber;
    this.PaginatedTasks = this.getPaginatedTasks(this.activePage, this.tasksPerPage, this.allTasks);
  }

  // Get Paginated Tasks only and the rest in the other pages
  getPaginatedTasks(page: number, pageSize: number, tasks: Task[]): Task[] {
    return tasks.slice((page - 1) * pageSize, page * pageSize);
  }
}
