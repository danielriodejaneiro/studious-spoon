import {Injectable, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

@Injectable()
export class TodosService {
  private editMode: boolean;
  taskBeingEdited: number;
  tasks: any = [
    {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2018-01-01',
      Executor: '',
      Id: 13,
      Tags: 'professional',
      Title: 'Learn about Plootoooooooooooo',
    },
    {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 22,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-03',
      DateDue: '',
      Executor: '',
      Id: 3,
      Tags: 'personal',
      Title: 'This is my fake task 3',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-03',
      DateDue: '2019-02-02',
      Executor: '',
      Id: 412,
      Tags: 'personal',
      Title: 'This is my fake task 4',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '',
      Executor: '',
      Id: 59,
      Tags: 'personal',
      Title: 'This is my fake task 5',
    },
  ];

  /** PUBLIC PROPERTIES HERE **/
  /** PRIVATE PROPERTIES **/
  private tasksTotal: number;
  private urlBase = 'https://todo101-api.azurewebsites.net/ServiceTodo.svc';
  private tasksComplete: number;
  private tasksLeft: number;
  private urlGetAll = '/findall';
  private urlCreate = '/create';
  private urlEdit = '/edit';
  private urlDelete = '/delete';

  /** CONSTRUCTOR **/
  constructor(private http: HttpClient) {
    this.tasksTotal = -100;
    this.tasksComplete = -100;
    this.tasksLeft = -100;
    this.editMode = false;
    this.taskBeingEdited = -1;

    this.apiGetAll();
    // this.updateTasksCount(this.tasks);
  }

  /** LIFECYCLE HOOKS **/

  /** PRIVATE CALLS **/
  /** PUBLIC CALLS **/

  apiGetAll() {
    return this.http.get(this.urlBase + this.urlGetAll)

      .catch(
        error => Observable.throw(error)
      )

      .map(
        response => {
          this.tasks = response;
          this.updateTasksCount(this.tasks);
        })

      .subscribe(
        response => '',
        error => console.log('rxjs error:', error),
        () => '');
  }

  updateTasksCount(tasks) {
    this.tasksTotal = 0;
    this.tasksComplete = 0;
    this.tasksLeft = 0;

    let i;
    for (i = 0; i < tasks.length; i++) {

      if (tasks[i].DateDone !== '') {
        this.tasksComplete++;
      }
      if (tasks[i].DateDone === '') {
        this.tasksLeft++;
      }
      if (tasks[i].DateDone === '' && tasks[i].DateDue === '') {
        console.log('w/o BOTH date');
      }

      this.tasksTotal++;
      // console.log('TOTAL TASKS: ', this.tasksTotal, 'complete: ', this.tasksComplete, 'left: ', this.tasksLeft);
    }
  }

  toogleEditMode() {
    return this.editMode = !this.editMode;
  }

  getEditMode() {
    return this.editMode;
  }

  getTasksTotal() {
    return this.tasksTotal;
  }

  getTasksComplete() {
    return this.tasksComplete;
  }

  getTasksLeft() {
    return this.tasksLeft;
  }

  /* THIS ACTION SHOULD HAPPEN ONLY WHEN COMPLETION, CREATION OR DELETION IS CALLED */
  // this.updateTasksCount();

  // apiCreate(id: string, title: string) {
  //   return this.http.get(this.urlBase + this.urlCreate);
  // }
  //
  // apiEdit(id: string, title: string) {
  //   return this.http.get(this.urlBase + this.urlEdit);
  // }
  //
  // apiDelete(id: string) {
  //   return this.http.get(this.urlBase + this.urlDelete);
  // }
}
