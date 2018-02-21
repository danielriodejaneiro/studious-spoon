import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-inactive',
  templateUrl: './todo-inactive.component.html',
  styleUrls: ['./todo-inactive.component.scss']
})
export class TodoInactiveComponent implements OnInit {

  constructor(private tasks: TodosService) {
  }

  ngOnInit() {
  }

}
