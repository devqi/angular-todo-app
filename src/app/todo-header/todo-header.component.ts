import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { faPlusSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.css'],
})
export class TodoHeaderComponent implements OnInit {
  faPlusSquare = faPlusSquare;
  todoText: string;
  @Output() addButtonClicked: EventEmitter<any>;

  constructor() {
    this.todoText = '';
    this.addButtonClicked = new EventEmitter<any>();
  }

  ngOnInit(): void {}

  addTodoItemHandler(e: Event): void {
    e.preventDefault();
    this.addButtonClicked.emit({
      id: Date.now(),
      text: this.todoText,
      completed: false,
    });

    this.todoText = '';
  }
}
