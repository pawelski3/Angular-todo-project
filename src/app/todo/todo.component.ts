import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],

})
export class TodoComponent implements OnInit {

  @Input()
  tasksList = [];
  @Output()
  emitDone = new EventEmitter<string>();
  @Output()
  emitRemove = new EventEmitter<string>();



  constructor() { }

  ngOnInit() {
  }

  remove(task: string) {
    this.emitRemove.emit(task);
  }
  done(task: string) {
    this.emitDone.emit(task);
  }

  getColor():string{
    return this.tasksList.length>=5?'red':'green';
  }

}
