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
    this.task = this.t.tasks[this.t.taskBeingEdited];
  }

  ngOnInit() {
  }

  // onCompleteTodo(task) {
  //   this.task = task;
  //   console.log('complete: ', this.task);
  // }

  onUpdateTodo(task) {
    console.log('Edit DISABLED if not authenticated');
    // this.t.apiEdit('', '');
  }

  onDeleteTodo(task) {
    console.log('Deleted DISABLED if not authenticated');
    // this.t.apiDelete(task.id);
  }

}
