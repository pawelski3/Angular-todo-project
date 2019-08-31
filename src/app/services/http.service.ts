import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
//import { Observable } from 'rxjs/Observable';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {
    //this.getTask();

  }

  // getTask(): Observable<Array<Task>> {
  //   return this.http.get('https://jsonplaceholder.typicode.com/posts/1');

  // }


  saveTasks(list: Array<Task>) {
    this.http.post('https://jsonplaceholder.typicode.com/posts', list).subscribe(list => {
      console.log(list);
    });
  }



}
