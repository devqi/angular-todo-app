import { Component, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent {
  @Input() todoList: Array<any>;

  completeTodoBtnHandler(valueEmittedByTodoItem) {
    console.log('valueEmittedByTodoItem: ', valueEmittedByTodoItem);
  }

  removeTodoBtnHandler(valueEmittedByTodoItem) {
    this.todoList = this.todoList.filter(
      (todo) => todo.id !== valueEmittedByTodoItem.id
    );
  }
}
