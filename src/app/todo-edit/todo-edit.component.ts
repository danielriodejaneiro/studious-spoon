import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  tasks;
  task;

  constructor(private todoService: TodosService) {
    this.tasks = todoService.tasks;
  }

  ngOnInit() {
    console.log('Edit component into view');
    this.task = this.tasks[0];
  }

}
