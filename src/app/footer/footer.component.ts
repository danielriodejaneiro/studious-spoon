import { Component } from '@angular/core';
import { TodosService } from '../todos.service';

@Component( {
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: [ './footer.component.scss' ]
} )
export class FooterComponent {
  todosService;

  constructor ( private t: TodosService ) {
    this.todosService = t;
  }

  // checkIfEditEnable() {
  //   this.todosService.toogleEditMode();
  //   if (this.todosService.taskBeingEdited === -1) {
  //     this.todosService.taskBeingEdited = 0;
  //   }
  // }

  reloadTaskFromServer () {
    this.todosService.apiGetAll();
    // console.log( 'REPLACE THIS WITH A NEW GET CALL' );
  }
}
