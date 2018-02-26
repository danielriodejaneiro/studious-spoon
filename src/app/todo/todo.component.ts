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
    console.log('list #:', i, ' // ID:', task.Id);

    if (!this.todosService.editMode) {
      this.onComplete(task, i);
    } else {
      this.todosService.taskBeingEdited = task.Id;
      // this.todosService.updateTasksCount();
    }
  }

  isTaskCompleted(task) {
    return task.DateDue !== '' && task.DateDone !== '';
  }

  onComplete(task, i) {

    if (this.isTaskCompleted(task)) {
      // task.DateDone = '';
      this.todosService.tasks[i].DateDone = '';
      this.todosService.updateTasksCount(task);
    }

    else {
      if (task.DateDone === '' && task.DateDue !== '') {
        task.DateDone = '2100-12-31';
      } else if (task.DateDone === '' && task.DateDue === '') {
        task.DateDone = '2100-12-31';
        task.DateDue = '1999-01-01';
      } else {
        task.DateDue = '1999-01-01';
      }
    }
  }
}
