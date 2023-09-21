import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksMasterComponent } from './tasks-master.component';
import { HttpClientTestingModule } from '@angular/common/http/testing'

describe('TasksMasterComponent', () => {
  let component: TasksMasterComponent;
  let fixture: ComponentFixture<TasksMasterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasksMasterComponent ],
      imports: [HttpClientTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
