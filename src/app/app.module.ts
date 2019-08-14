import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoComponent } from './todo/todo.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoComponent,
    DoneTaskComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
