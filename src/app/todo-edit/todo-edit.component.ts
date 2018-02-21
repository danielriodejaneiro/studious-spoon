import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  constructor(private tasks: TodosService) {
  }

  ngOnInit() {
  }

}
