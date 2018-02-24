import {Component} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent {
  todosService;
  tasks;

  constructor(private t: TodosService) {
    this.todosService = t;
    this.tasks = this.todosService.tasks;
  }

  onSelectTask(task) {
    console.log('task selected: ', task.Id);
    this.todosService.taskBeingEdited = task.Id;
    this.todosService.editMode ? console.log('Edit mode on: decide your action.') : this.onComplete(task);
  }

  isTaskCompleted(task) {
    return task.DateDue !== '' && task.DateDone !== '';
  }

  onComplete(task) {

    if (this.isTaskCompleted(task)) {

      console.log('Task ', task.Id, ' re-opened');
      task.DateDone = '';
      console.log(this.tasks);

    } else {

      console.log('Task is not closed');

      if (task.DateDone === '' && task.DateDue !== '') {
        task.DateDone = '2100-12-31';
      } else if (task.DateDone === '' && task.DateDue === '') {
        task.DateDone = '2100-12-31';
        task.DateDue = '1999-01-01';
      } else {
        task.DateDue = '1999-01-01';
      }
      console.log('Task ', task.Id, ' marked as DONE');
      console.log(this.tasks);
    }
  }
}