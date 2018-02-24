import {Component} from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  todosService;

  constructor(private t: TodosService) {
    this.todosService = t;
  }
}
