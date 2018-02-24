import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {
  todosService;
  task;

  constructor(private t: TodosService) {
    this.todosService = t.tasks;
    this.task = t.tasks[0];
  }

  ngOnInit() {
  }

  onCompleteTodo(task) {
    this.task = task;
    console.log('complete: ', this.task);
  }

  onUpdateTodo(task) {
    this.task = task;
    console.log('update: ', this.task);
  }

  onDeleteTodo(task) {
    this.task = task;
    console.log('delete: ', this.task);
  }

}
