import {Component} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  todosService;
  display;

  constructor(private t: TodosService) {
    this.todosService = t.getTasksTotal();
  }

  updateHeader() {
    this.display = this.todosService.getTasksTotal();
  }
}
