import {Injectable, OnChanges, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodosService implements OnInit, OnChanges {
  editMode: boolean;
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
  private tasksTotal: number;
  private tasksComplete: number;
  private tasksLeft: number;
  /** PRIVATE PROPERTIES **/
  private urlBase = 'http://todo101-api.azurewebsites.net/ServiceTodo.svc';
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
  }

  /** LIFECYCLE HOOKS **/
  ngOnInit() {
  }

  ngOnChanges() {
  }

  /** PRIVATE CALLS **/
  /** PUBLIC CALLS **/
  apiGetAll() {
    this.http.get(this.urlBase + this.urlGetAll)
      .subscribe(
        data => {
          console.log('BEFORE: ', this.tasks);
          this.tasks = data;
          console.log('AFTER: ', this.tasks);
          /* PLACING THE RELOAD HERE IT GETS THE UPDATE FROM 3 TO 15 ITEMS */
          this.updateTasksCount();
        }
      );
  }

  updateTasksCount() {
    this.tasksTotal = 0;
    this.tasksComplete = 0;
    this.tasksLeft = 0;

    let i;
    for (i = 0; i < this.tasks.length; i++) {
      this.tasksTotal++;
      // console.log('TOTAL TASKS: ', this.tasksTotal);

      if (this.tasks[i].DateDone === this.tasks[i].DateDue) {
        this.tasksComplete++;
        // console.log('DONE --- complete: ', this.tasksComplete, 'left: ', this.tasksLeft);
      } else {
        this.tasksLeft++;
        // console.log('LEFT --- complete: ', this.tasksComplete, 'left: ', this.tasksLeft);
      }
    }
  }

  toogleEditMode() {
    return this.editMode = !this.editMode;
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
