import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Task } from '../models/task';
import { HttpService } from './http.service';


@Injectable()
export class TaskService {
  title = 'todo';

  //private taskList: Array<Task> = [];
  //private taskDone: Array<Task> = [];

  private tasksListObs = new BehaviorSubject<Array<Task>>([]);
  //private tasksDoneObs = new BehaviorSubject<Array<Task>>([]);


  constructor(private httpService: HttpService) {
    const taskList = [
      { name: 'sprzątanie kuwety', created: new Date().toLocaleString(), isDone: false },
      { name: 'nauka angulara', created: new Date().toLocaleString(), isDone: false },
      { name: 'Podlewanie kwiatów', created: new Date().toLocaleString(), isDone: false },
      { name: 'zakupy', created: new Date().toLocaleString(), isDone: false },
      { name: 'zakupy2', created: new Date().toLocaleString(), end: new Date().toLocaleString(), isDone: true },
    ];


    this.tasksListObs.next(taskList);



  }


  add(task: Array<Task>) {
    const list = this.tasksListObs.getValue().concat(task);

    this.tasksListObs.next(list);
  }

  remove(task: Task) {
    const list = this.tasksListObs.getValue().filter(e => e !== task);
    this.tasksListObs.next(list);
  }

  done(task: Task) {
    task.end = new Date().toLocaleDateString();
    task.isDone = true;
    const list = this.tasksListObs.getValue();
    this.tasksListObs.next(list);
    // this.taskDone.push(task);
    // this.remove(task);
    // this.tasksDoneObs.next(this.taskDone);

  }

  getTasksListObs(): Observable<Array<Task>> {
    return this.tasksListObs.asObservable();
  }



}
