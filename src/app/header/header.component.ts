import {Component, OnChanges} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnChanges {
  todosService;

  constructor(private t: TodosService) {
    this.todosService = t;
  }

  ngOnChanges() {
    // this.todosService.tasksLeft = this.t.tasksLeft;
    console.log('is anything happening here?!');
  }
}
