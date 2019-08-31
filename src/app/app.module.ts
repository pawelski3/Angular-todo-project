import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { TodoComponent } from './todo/todo.component';
import { DoneTaskComponent } from './done-task/done-task.component';
import { TaskService } from './services/tasks.service';
import { CheckedDirective } from './shared/checked.directive';
import { DateDirective } from './shared/date.directive';

import { TransformTask2Pipe } from './shared/transform-task2.pipe';
import { SortNamePipe } from './shared/sort-name.pipe';
import { HttpService } from './services/http.service';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    TodoComponent,
    DoneTaskComponent,
    CheckedDirective,
    DateDirective,

    TransformTask2Pipe,

    SortNamePipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [TaskService, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
