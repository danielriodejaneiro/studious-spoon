import {Component, OnInit} from '@angular/core';
import {TodosService} from '../todos.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private tasks: TodosService) {
  }

  ngOnInit() {
  }

}
