import {Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {TodosService} from '../todos.service';
import {Observable} from 'rxjs/observable';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  todosService;

  constructor(private t: TodosService) {
    this.todosService = t;
    // this.t.tasks = this.t.apiGetAll();
    // this.t.updateTasksCount(this.t.tasks);
  }

  ngOnInit() {
  }

  onSelectTask(task, i) {
    console.log('position:', i, ' // task:', task.Id);

    if (!this.todosService.editMode) {
      this.onComplete(task);
    } else {
      this.todosService.taskBeingEdited = i;
      // this.todosService.updateTasksCount();
    }
  }

  isTaskCompleted(task) {
    return task.DateDue !== '' && task.DateDone !== '';
  }

  onComplete(task) {

    if (this.isTaskCompleted(task)) {

      // console.log('Task ', task.Id, ' re-opened');
      task.DateDone = '';
      // console.log(this.tasks);

    } else {

      // console.log('Task is not closed');
      if (task.DateDone === '' && task.DateDue !== '') {
        task.DateDone = '2100-12-31';
      } else if (task.DateDone === '' && task.DateDue === '') {
        task.DateDone = '2100-12-31';
        task.DateDue = '1999-01-01';
      } else {
        task.DateDue = '1999-01-01';
      }
      // console.log('Task ', task.Id, ' marked as DONE');
      // console.log(this.tasks);
    }
  }
}
