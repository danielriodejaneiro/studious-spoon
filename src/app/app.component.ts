import {Component} from '@angular/core';
import {TodosService} from './todos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  editMode: boolean;
  taskBeingEdited: number;

  constructor(private tasks: TodosService) {
    this.editMode = false;
  }

  showMessage(message: string) {
    console.log(message);
  }

  onEnableEditMode(task: any) {
    this.editMode === true ? this.editMode = false : this.editMode = true;
    this.taskBeingEdited = task.id;
  }

  // onCreateTask() {
  //   this.tasks.addTodo();
  //   const newItem = {};
  // }
  //
  // unarchiveTodo(task: any) {
  //   task.completed = false;
  //   this.addTodo();
  // }
}
