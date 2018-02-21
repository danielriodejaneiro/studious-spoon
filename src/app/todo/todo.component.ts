import {Component, OnChanges, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit, OnChanges {
  todoService: TodosService;
  tasks;

  constructor(private t: TodosService) {
    this.todoService = t;
    this.tasks = t.tasks;
  }

  ngOnInit() {
    // this.tasks = this.t.apiGetAll();
  }

  ngOnChanges() {
    this.tasks = this.todoService.apiGetAll();
  }

  onComplete(task: any) {
    // console.log('Mark complete: task ', task.id);
    task.datedone === task.datedue ? task.datedone = '' : task.datedone = task.datedue;
  }

  onUpdate(task: any) {
    console.log('Update task ', task.id);
    // this.tasks.apiDelete(task.id);
    // this.tasks.apiGetAll();
  }

  onErase(task: any) {
    console.log('Delete task ', task.id);
    // this.tasks.apiDelete(task.id);
    // this.tasks.apiGetAll();
  }

  onEnableEditMode() {
    this.todoService.editMode === true ? console.log('Edit mode on!') : console.log('Edit mode off!');
    this.todoService.editMode = !this.todoService.editMode;
    this.todoService.editMode === true ? console.log('Edit mode on!') : console.log('Edit mode off!');
  }

}
