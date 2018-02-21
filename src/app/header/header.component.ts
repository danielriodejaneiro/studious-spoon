import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  tasksDisplayed: number;

  constructor(private tasks: TodosService) {
    this.tasksDisplayed = -1;
  }

  ngOnInit() {
    this.tasks.getAll().subscribe(data => console.log(data));
  }

}
