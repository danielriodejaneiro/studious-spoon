import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss']
})
export class TodoAddComponent implements OnInit {

  constructor(private tasks: TodosService) {
  }

  ngOnInit() {
  }

}
