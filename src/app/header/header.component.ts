import {Component} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  tasksDisplayed: number;

  constructor(private tasks: TodosService) {
    this.tasksDisplayed = tasks.getTasksTotal();
  }
}
