import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksMasterComponent } from './components/tasks-master/tasks-master.component';

const routes: Routes = [
  {path: '', redirectTo: 'tasks', pathMatch: 'full'},
  {path:'tasks', component: TasksMasterComponent},
  {path:'**', component: TasksMasterComponent} // or notfound page
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
