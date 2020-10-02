import { Component, OnInit, Input } from '@angular/core';
import { faCheck, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  faCheck = faCheck;
  faTrash = faTrash;
  @Input() todoItem: any;

  constructor() {}

  ngOnInit(): void {}
}
