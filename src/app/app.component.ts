import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'todo';

  taskList: Array<string> = [];
  taskDone: Array<string> = [];

  ngOnInit(): void {
    this.taskList = ["sprzątanie kuwety", "nauka angulara", "Podlewanie kwiatów", "zakupy"];
  }


  add(task: string) {
    this.taskList.push(task);



  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);

  }



}
