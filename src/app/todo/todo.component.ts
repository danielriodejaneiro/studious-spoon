import {Component, OnChanges, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges {
  todosService;
  tasks;

  constructor(private t: TodosService) {
    this.todosService = t;
  }

  ngOnInit() {
    this.tasks = this.t.tasks;
    // this.tasks = this.t.apiGetAll();
  }

  ngOnChanges() {
    // this.tasks = this.todosService.apiGetAll();
  }

  onSelectTask(task) {
    console.log('task selected: ', task.Id);
    this.todosService.taskBeingEdited = task.Id;
    this.todosService.editMode ? console.log('Edit mode on: decide your action.') : this.onComplete(task);
  }

  //
  onComplete(task: any) {
    if (task.DateDue === task.DateDone) {
      task.DateDone = '';
      console.log('Task ', task.Id, ' re-opened');
    } else {
      task.DateDone = task.DateDue;
      console.log('Task ', task.Id, ' marked as DONE');
    }
  }

  //
  // onUpdate(task: any) {
  //   console.log('Update task ', task.id);
  //   // this.tasks.apiDelete(task.id);
  //   // this.tasks.apiGetAll();
  // }
  //
  // onErase(task: any) {
  //   console.log('Delete task ', task.id);
  //   // this.tasks.apiDelete(task.id);
  //   // this.tasks.apiGetAll();
  // }
  // onEnableEditMode() {
  //   this.todosService.editMode === true ? console.log('Edit mode on!') : console.log('Edit mode off!');
  //   this.todosService.editMode = !this.todosService.editMode;
  //   this.todosService.editMode === true ? console.log('Edit mode on!') : console.log('Edit mode off!');
  // }

}
