import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { TodoComponent } from './todo/todo.component';
import { DoneTaskComponent } from './done-task/done-task.component';

const appRoutes: Routes = [
{
  path:'',
  redirectTo:'/todoTask',
  pathMatch:'full'
},
{
  path:'todoTask',
  component:TodoComponent
},
{
  path:'doneTask',
  component:DoneTaskComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
