import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  tasks = [];

  constructor(private t: TodosService) {
  }

  ngOnInit() {
  }

}
