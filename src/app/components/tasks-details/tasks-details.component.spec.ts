import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksDetailsComponent } from './tasks-details.component';

describe('TasksDetailsComponent', () => {
  let component: TasksDetailsComponent;
  let fixture: ComponentFixture<TasksDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Shoud render Taskname in HTML', () => {
    fixture.detectChanges();
    let componentHtml:HTMLElement = fixture.nativeElement
    expect(componentHtml.querySelectorAll('h2').length).toBeDefined()
  })
});
