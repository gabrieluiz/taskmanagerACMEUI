import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskViewComponent} from './pages/task-view/task-view.component';
import { NewTaskComponent } from './pages/new-task/new-task.component';

const routes: Routes = [
  { path: '', redirectTo: 'task', pathMatch: 'full'},
  { path: 'new-task', component: NewTaskComponent},
  { path: 'task', component: TaskViewComponent},
  { path: 'task/:taskid', component: TaskViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
