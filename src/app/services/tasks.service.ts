import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';


@Injectable()
export class TaskService {
  title = 'todo';

  private taskList: Array<Task> = [];
  private taskDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);


  constructor() {
    this.taskList = [
      { name: 'sprzątanie kuwety', created: new Date() },
      { name: 'nauka angulara', created: new Date() },
      { name: 'Podlewanie kwiatów', created: new Date() },
      { name: 'zakupy', created: new Date() }];
    this.tasksListObs.next(this.taskList);
  }


  add(task: Task) {
    this.taskList.push(task);
    this.tasksListObs.next(this.taskList);



  }

  remove(task: Task) {
    this.taskList = this.taskList.filter(e => e !== task);
    this.tasksListObs.next(this.taskList);
  }

  done(task: Task) {
    this.taskDone.push(task);
    this.remove(task);
    this.tasksDoneObs.next(this.taskDone);

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }

  getTasksDoneObs(): Observable<Array<Task>> {
    return this.tasksDoneObs.asObservable();
  }

}
