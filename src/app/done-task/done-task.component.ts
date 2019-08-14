import { Component, OnInit, Input } from '@angular/core';
import { TaskService } from '../services/tasks.service';

@Component({
  selector: 'app-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {


  taskDone: Array<string> = [];


  constructor(private tasksService: TaskService) {
    this.tasksService.getTasksDoneObs().subscribe((tasks: Array<string>) => {
      this.taskDone = tasks;
    });

  }

  ngOnInit() {
  }

}
