import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

@Component( {
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: [ './todo-add.component.scss' ]
} )
export class TodoAddComponent implements OnInit {

  textPlaceholder: string;

  constructor ( private t: TodosService ) {
    this.textPlaceholder = '';
  }

  ngOnInit () {
  }

  onCreateTask () {
    this.t.apiCreate( this.textPlaceholder );
    // console.log( this.textPlaceholder );

  }

  onFocusInput () {
    this.textPlaceholder = '';
  }
}
