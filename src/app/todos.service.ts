import {Injectable, OnChanges} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class TodosService implements OnChanges {
  /** PRIVATE PROPERTIES FIRST **/
  tasksTotal: number;
  tasksComplete: number;
  tasksLeft: number;
  /** THEN PUBLIC PROPERTIES HERE **/

  tasks: any = [
    {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2018-01-01',
      Executor: '',
      Id: 1,
      Tags: 'professional',
      Title: 'Learn about Plootoooooooooooo',
    },
    {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-03',
      DateDue: '2019-02-02',
      Executor: '',
      Id: 2,
      Tags: 'personal',
      Title: 'This is us',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-03',
      DateDue: '2019-02-02',
      Executor: '',
      Id: 2,
      Tags: 'personal',
      Title: 'This is us',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-03',
      DateDue: '2019-02-02',
      Executor: '',
      Id: 2,
      Tags: 'personal',
      Title: 'This is us',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-03',
      DateDue: '2019-02-02',
      Executor: '',
      Id: 2,
      Tags: 'personal',
      Title: 'This is us',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '2019-02-02',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    }, {
      Author: 'Daniel',
      DateDone: '',
      DateDue: '2019-02-02',
      Executor: 'Daniel',
      Id: 2,
      Tags: 'personal',
      Title: 'Go watch a movie',
    },
  ];
  editMode: boolean;
  taskBeingEdited: number;
  private urlBase = 'http://todo101-api.azurewebsites.net/ServiceTodo.svc';
  private urlGetAll = '/findall';
  private urlCreate = '/create';
  private urlEdit = '/edit';
  private urlDelete = '/delete';

  /** LIFECYCLE HOOKS **/
  /** CONSTRUCTOR **/
  constructor(private http: HttpClient) {
    this.tasksTotal = -100;
    this.tasksComplete = -100;
    this.tasksLeft = -100;
    this.editMode = false;

    this.apiGetAll();
  }

  /** PRIVATE CALLS FIRST, PUBLIC LATER **/
  ngOnChanges() {
    this.updateTasksCount();
  }

  /** PUBLIC CALLS HERE **/
  apiGetAll() {
    return this.http.get(this.urlBase + this.urlGetAll)
      .subscribe(
        data => {
          this.updateTasksCount();
          return this.tasks = data;
        });
  }

  apiCreate(id: string, title: string) {
    return this.http.get(this.urlBase + this.urlCreate);
  }

  apiEdit(id: string, title: string) {
    return this.http.get(this.urlBase + this.urlEdit);
  }

  apiDelete(id: string) {
    return this.http.get(this.urlBase + this.urlDelete);
  }

  updateTasksCount() {
    this.tasksTotal = 0;
    this.tasksComplete = 0;
    this.tasksLeft = 0;

    let i;
    for (i = 0; i < this.tasks.length; i++) {
      this.tasksTotal++;
      console.log('TOTAL TASKS: ', this.tasksTotal);

      if (this.tasks[i].DateDone === this.tasks[i].DateDue) {
        // console.log(this.tasks[i].DateDone, this.tasks[i].DateDue);
        this.tasksComplete++;
        console.log('DONE --- complete: ', this.tasksComplete, 'left: ', this.tasksLeft);
      } else {
        this.tasksLeft++;
        console.log('LEFT --- complete: ', this.tasksComplete, 'left: ', this.tasksLeft);
      }
    }
  }

  getTasksTotal() {
    // this.updateTasksCount();
    return this.tasksTotal;
  }

  getTasksComplete() {
    // this.updateTasksCount();
    return this.tasksComplete;
  }

  getTasksLeft() {
    // this.updateTasksCount();
    return this.tasksLeft;
  }

  toogleEditMode() {
    return this.editMode = !this.editMode;
  }
}
