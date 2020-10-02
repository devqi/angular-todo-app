import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Array<any>;

  constructor() {}

  ngOnInit(): void {}

  completeTodoBtnHandler(valueEmittedByTodoItem) {
    console.log('valueEmittedByTodoItem: ', valueEmittedByTodoItem);
  }

  removeTodoBtnHandler(valueEmittedByTodoItem) {
    this.todoList = this.todoList.filter(
      (todo) => todo.id !== valueEmittedByTodoItem.id
    );
  }
}
