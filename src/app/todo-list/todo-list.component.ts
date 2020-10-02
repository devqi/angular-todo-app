import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList: Array<any>;
  @Output() completeTodoBtnClicked: EventEmitter<any>;
  @Output() removeTodoBtnClicked: EventEmitter<any>;

  constructor() {
    this.completeTodoBtnClicked = new EventEmitter<any>();
    this.removeTodoBtnClicked = new EventEmitter<any>();
  }

  completeTodoBtnHandler(valueEmittedByTodoItem) {
    this.completeTodoBtnClicked.emit(valueEmittedByTodoItem);
  }

  removeTodoBtnHandler(valueEmittedByTodoItem) {
    this.removeTodoBtnClicked.emit(valueEmittedByTodoItem);
    this.todoList = this.todoList.filter(
      (todo) => todo.id !== valueEmittedByTodoItem.id
    );
  }
}
