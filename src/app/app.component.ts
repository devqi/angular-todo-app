import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, DoCheck {
  title = 'angular-todo-app';
  todoList: Array<any>;
  filteredTodoList: Array<any>;
  status: string;

  ngOnInit() {
    this.todoList = [];
    this.filteredTodoList = [];
    this.status = 'all';
  }

  ngDoCheck() {
    this.filterTodoList();
  }

  addTodoItemHandler(valueEmittedByTodoHeader) {
    this.todoList.push(valueEmittedByTodoHeader);
  }

  changeStatusHandler(valueEmittedByTodoHeader) {
    this.status = valueEmittedByTodoHeader ? valueEmittedByTodoHeader : 'all';
  }

  filterTodoList() {
    switch (this.status) {
      case 'completed':
        this.filteredTodoList = this.todoList.filter(
          (todo) => todo.completed === true
        );
        break;
      case 'uncompleted':
        this.filteredTodoList = this.todoList.filter(
          (todo) => todo.completed === false
        );
        break;
      default:
        this.filteredTodoList = this.todoList;
        break;
    }
  }

  completeTodoBtnHandler(valueEmittedByTodoList) {
    this.todoList.forEach((todo) => {
      if (todo.id === valueEmittedByTodoList.id) {
        todo.completed = valueEmittedByTodoList.completed;
      }
    });
    this.filterTodoList();
  }

  removeTodoBtnHandler(valueEmittedByTodoList) {
    this.todoList = this.todoList.filter(
      (todo) => todo.id !== valueEmittedByTodoList.id
    );
  }
}
