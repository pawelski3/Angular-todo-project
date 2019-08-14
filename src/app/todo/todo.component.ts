import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { TaskService } from '../services/tasks.service';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent implements OnInit {


  tasksList = [];




  constructor(private tasksService: TaskService) {

    this.tasksService.getTasksListObs().subscribe((tasks: Array<string>) => {
      this.tasksList = tasks;
    })
  }

  ngOnInit() {
  }

  remove(task: string) {
    this.tasksService.remove(task);
  }
  done(task: string) {
    this.tasksService.done(task);

  }

  getColor(): string {
    return this.tasksList.length >= 5 ? 'red' : 'green';
  }

}
