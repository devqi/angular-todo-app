import { Component, EventEmitter, Output } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent {
  faPlusSquare = faPlusSquare;
  todoText: string;
  @Output() addButtonClicked: EventEmitter<any>;
  @Output() statusSelectChanged: EventEmitter<any>;

  constructor() {
    this.todoText = '';
    this.addButtonClicked = new EventEmitter<any>();
    this.statusSelectChanged = new EventEmitter<any>();
  }

  addTodoItemHandler(e: Event): void {
    e.preventDefault();
    this.addButtonClicked.emit({
      id: Date.now(),
      text: this.todoText,
      completed: false,
    });

    this.todoText = '';
  }

  filterOnChangeHandler(e) {
    const status = e.target.value;

    this.statusSelectChanged.emit(status);
  }
}
