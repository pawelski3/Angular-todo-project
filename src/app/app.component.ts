import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  newTask: string;
  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  add() {
    this.taskList.push(this.newTask);
    this.newTask = "";
    console.log(this.taskList);

  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
    console.log(this.taskList)
  }



}
