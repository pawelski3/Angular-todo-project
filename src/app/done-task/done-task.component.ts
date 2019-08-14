import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/tasks.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


  taskDone: Array<Task> = [];


  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<Task>) => {
      this.taskDone = tasks;
    });

  }

  ngOnInit() {
  }

}
