import {Component} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  todoService;

  constructor(private t: TodosService) {
    this.todoService = t;
  }
}
