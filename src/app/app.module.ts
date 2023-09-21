import { NgModule } from '@angular/core';
import { BrowserModule, Title  } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksMasterComponent } from './components/tasks-master/tasks-master.component';
import { TasksDetailsComponent } from './components/tasks-details/tasks-details.component';
import { HeaderComponent } from './components/header/header.component';
import { TasksTabsComponent } from './components/tasks-tabs/tasks-tabs.component';
import { PaginationControlsComponent } from './components/pagination-controls/pagination-controls.component';
import { FooterComponent } from './components/footer/footer.component';
import { TaskOperationsPipe } from './core/pipes/task-operations.pipe';
import { TasksPageComponent } from './components/tasks-page/tasks-page.component';
@NgModule({
  declarations: [
    AppComponent,
    TasksMasterComponent,
    TasksDetailsComponent,
    HeaderComponent,
    TasksTabsComponent,
    PaginationControlsComponent,
    FooterComponent,
    TaskOperationsPipe,
    TasksPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [Title],
  bootstrap: [AppComponent]
})
export class AppModule { }
