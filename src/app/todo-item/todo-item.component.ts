import { Component, Input, EventEmitter, Output } from '@angular/core';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent {
  faCheck = faCheck;
  faTrash = faTrash;

  @Input() todoItem: any;
  @Output() completeTodoBtnClicked: EventEmitter<any>;
  @Output() removeTodoBtnClicked: EventEmitter<any>;

  constructor() {
    this.completeTodoBtnClicked = new EventEmitter<any>();
    this.removeTodoBtnClicked = new EventEmitter<any>();
  }

  updateTodoItemHandler() {
    this.todoItem.completed = true;
    this.completeTodoBtnClicked.emit(this.todoItem);
  }

  removeTodoItemHandler() {
    this.removeTodoBtnClicked.emit(this.todoItem);
  }
}
