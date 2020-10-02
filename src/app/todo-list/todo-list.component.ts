import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css'],
})
export class TodoListComponent implements OnInit {
  @Input() todoList: Array<any>;

  constructor() {
    console.log('todo-list: ', this.todoList);
  }

  ngOnInit(): void {}
}
