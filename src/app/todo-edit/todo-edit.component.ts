import {Component, Input, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.scss']
})
export class TodoEditComponent implements OnInit {

  task;

  constructor(private t: TodosService) {
  }

  ngOnInit() {
    this.task = this.t.tasks[this.t.taskBeingEdited];
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
