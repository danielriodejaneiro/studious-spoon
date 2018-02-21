import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {forEach} from '@angular/router/src/utils/collection';

@Injectable()
export class TodosService implements OnInit {

  urlBase = 'http://todo101-api.azurewebsites.net/ServiceTodo.svc';
  urlGetAll = '/findall';
  urlCreate = '/create';
  urlEdit = '/edit';
  urlDelete = '/delete';

  tasksTotal: number;
  tasksComplete: number;
  tasksLeft: number;

  private tasks = {};

  constructor(private http: HttpClient) {
    this.tasksTotal = -100;
    this.tasksComplete = -100;
    this.tasksLeft = -100;
  }

  ngOnInit() {
    const firstResponse = this.getAll().subscribe(
      data => this.tasks = data);
  }

  getAll() {
    const response = this.http.get(this.urlBase + this.urlGetAll);
    console.log(response);
    return response;
  }

  getSize() {
    console.log(this.tasks);
  }

  getTodosLeft() {
    console.log(this.tasksLeft);
    return this.tasksLeft;
  }

  changeCompletion(task: any) {
    this.tasksLeft !== 0 ? this.minusTodo() : console.log('No more tasks to complete!');
    task.completed = true;
  }

  private addTodo() {
    this.tasksLeft++;
  }

  private minusTodo() {
    this.tasksLeft--;
  }

  /*tasks = [
      {
        id: 1,
        title: 'Learn about Plootoooooooooooo',
        due_date: '2018-01-01',
        completion_date: '2019-12-12',
        tags: [
          'personal', 'professional'
        ],
        author: 'Daniel',
        executor: 'Daniel',
        late: false,
        completed: false
      }
    ];*/
}
