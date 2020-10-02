import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'angular-todo-app';
  todoList: Array<any>;

  ngOnInit() {
    this.todoList = [];
  }

  addTodoItemHandler(valueEmittedByTodoHeader) {
    console.log('valueEmittedByTodoHeader: ', valueEmittedByTodoHeader);
    this.todoList.push(valueEmittedByTodoHeader);
  }
}
