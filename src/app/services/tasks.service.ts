import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';


@Injectable()
export class TaskService {
  title = 'todo';

  private taskList: Array<string> = [];
  private taskDone: Array<string> = [];

  private tasksListObs = new BehaviorSubject<Array<string>>(this.taskList);
  private tasksDoneObs = new BehaviorSubject<Array<string>>(this.taskDone);


  constructor() {
    this.taskList = ["sprzątanie kuwety", "nauka angulara", "Podlewanie kwiatów", "zakupy"];
    this.tasksListObs.next(this.taskList);
  }


  add(task: string) {
    this.taskList.push(task);
    this.tasksListObs.next(this.taskList);



  }

  remove(task: string) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.tasksListObs.next(this.taskList);
  }

  done(task: string) {
    this.taskDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.taskDone);

  }

  getTasksListObs(): Observable<Array<string>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<string>> {
    return this.tasksDoneObs.asObservable();
  }

}
