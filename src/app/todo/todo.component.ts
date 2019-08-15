import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent implements OnInit {


  tasksList: Array<Task> = [];




  constructor(private tasksService: TaskService) {

    this.tasksService.getTasksListObs().subscribe((tasks: Array<Task>) => {
      this.tasksList = tasks;
    })
  }

  ngOnInit() {
  }

  remove(task: Task) {
    this.tasksService.remove(task);
  }
  done(task: Task) {
    task.end = new Date();
    this.tasksService.done(task);

  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

}
